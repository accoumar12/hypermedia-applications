import { loremIpsum } from "lorem-ipsum"

export default async (models) => {
    const locationModel = [
        {
            name: "Dog Paradise",
            city: "Milan"
        },
        {
            name: "Dog City",
            city: "Rome"
        }
    ]

    const location0 = await models.Location.create(locationModel[0])
    const location1 = await models.Location.create(locationModel[1])

    const dogModel = [
        {
            name: "Orfeo",
            breed: "Schnauzer",
            image: "https://plus.unsplash.com/premium_photo-1670771171077-14858acd4f37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
            age: 14,
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            locationId: location0.id
        },
        {
            name: "Lessie",
            breed: "Collie",
            age: 7,
            image: "~/assets/img/People/P02.png",
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            locationId: location0.id
        },
        {
            name: "Rex",
            breed: "German Shepard",
            age: 10,
            image: "~/assets/img/People/P03.png",
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            locationId: location0.id
        },
        {
            name: "Balto",
            breed: "???",
            image: "~/assets/img/People/P04.png",
            age: 6,
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            locationId: location1.id
        },
        {
            name: "Doggo",
            breed: "Pug",
            image: "~/assets/img/People/P05.png",
            age: 110,
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            locationId: location1.id
        }
    ]
    await models.Dog.bulkCreate(dogModel)
}
