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
            image: "https://images.generated.photos/o2s8ngYVqmlVHuvqaAKIBM2OHzeFU0T-ZsFPedVW0Ks/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTE1MjgwLmpwZw.jpg",
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
            image: "https://images.generated.photos/r_fsLdUSmf7BjXkx7oEvlgSKjByo5_vVN5CoAOdORyc/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTE5NzUyLmpwZw.jpg",
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
            image: "https://images.generated.photos/2D-ZKeoiXPPGKyvaymCUpul7jU34JkdmmBa1Qp9NWio/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDc1NzI1LmpwZw.jpg",
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            locationId: location0.id
        },
        {
            name: "Balto",
            breed: "???",
            image: "https://images.generated.photos/cyB4QZUFezafBKyDY68Rk7HZYNzwsx9S-5kAKdYMdHw/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDk2MzIwLmpwZw.jpg",
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
            image: "https://images.generated.photos/pnRnY8yXjjor5i9bA11bnNnf6LNUA_dluUNQnAPKOow/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTYwODc4LmpwZw.jpg",
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
