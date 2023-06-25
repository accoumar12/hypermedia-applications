import express from "express"
import { DataTypes, Sequelize } from "sequelize"
import cors from "cors"

import { fileURLToPath } from "url"
import path from "path"

import dbInitialization from "./dbInit.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const db = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname, "db.sqlite")
})

// This fixes the CORS error. This allows only request from the set origin to communicate with the server
const corsOptions = {
    origin: "http://localhost:3000" // The link of your project when run locally
}
const app = express()
app.use(express.json())
app.use(cors(corsOptions))



async function initDB() {
    const models = {}

    await db.authenticate()
    models.Person = db.define('person', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            allowNull: true
        },
        image: {
          type: DataTypes.STRING,
          allowNull: true  
        },
        team: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description2: {
            type: DataTypes.STRING,
            allowNull: true
        },
        area:{
            type: DataTypes.STRING,
            allowNull: true
        },        
        areaId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        award1:{
            type: DataTypes.STRING,
            allowNull: true
        },
        award2:{
            type: DataTypes.STRING,
            allowNull: true
        },
        award3:{
            type: DataTypes.STRING,
            allowNull: true
        },
        award4:{
            type: DataTypes.STRING,
            allowNull: true
        }
    })

    models.Company = db.define('company', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        areas: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description2: {
            type: DataTypes.STRING,
            allowNull: true
        },
        link: {
            type: DataTypes.STRING,
            allowNull: true
        },
        ceo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        companyId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        areasId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        MostRelevant: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
    })

    models.Area = db.define('area',{
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description2: {
            type: DataTypes.STRING,
            allowNull: true
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        logo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        data_target: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
    })

    models.Company.belongsTo(models.Person)
    models.Person.hasMany(models.Company)

    models.Area.hasMany(models.Company)
    models.Company.belongsTo(models.Area)

    await db.sync({ force: true })

    await dbInitialization(models)

    return models
}

async function initServer() {
    const models = await initDB()

    app.get('/people', async (req, res) => {
        const data = await models.Person.findAll();

        res.status(200).json(data)
    })

    app.get('/people/:id', async (req, res) => {
        const data = await models.Person.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: models.Company
                }
            ]
        })

        if (data) {
            res.status(200).json(data)
        }
        else {
            res.sendStatus(404)
        }
    })
    

    app.get('/companies', async (req, res) => {
        const data = await models.Company.findAll();

        res.status(200).json(data)
    })

    app.get('/companies/:id', async (req, res) => {
        const data = await models.Company.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: models.Person
                },
                {
                    model: models.Area
                }
            ]
        });

        if (data) {
            res.status(200).json(data);
        }
        else {
            res.sendStatus(404);
        }
    });

    app.get('/areas', async (req, res) => {
        const data = await models.Area.findAll();

        res.status(200).json(data);
    });

    app.get('/areas/:id', async (req, res) => {
        const data = await models.Area.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: models.Company
                }
            ]
        });

        if (data) {
            res.status(200).json(data);
        }
        else {
            res.sendStatus(404);
        }
    });

    // Using a different port
    app.listen(3001, () => {
        console.log("Listening on port 3001")
    })
}

initServer();