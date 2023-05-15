import express from "express"
import { DataTypes, Sequelize } from "sequelize"

import { fileURLToPath } from "url"
import path from "path"

import dbInitialization from "./dbInit.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const db = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname, "db.sqlite")
})

const app = express()
app.use(express.json())

async function initDB() {
    const models = {}

    await db.authenticate()
    models.Dog = db.define('dog', {
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
        supervisor: {
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

    })

    models.Company.belongsTo(models.Dog)
    models.Dog.hasMany(models.Company)

    await db.sync({ force: true })

    await dbInitialization(models)

    return models
}

async function initServer() {
    const models = await initDB()

    app.get('/dogs', async (req, res) => {
        const data = await models.Dog.findAll();

        res.status(200).json(data)
    })

    app.get('/dogs/:id', async (req, res) => {
        const data = await models.Dog.findOne({
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
                    model: models.Dog
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

    // Using a different port
    app.listen(3001, () => {
        console.log("Listening on port 3001")
    })
}

initServer();