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
            name: "Anastasia Petrova",
            role: "Schnauzer",
            image: "https://images.generated.photos/o2s8ngYVqmlVHuvqaAKIBM2OHzeFU0T-ZsFPedVW0Ks/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTE1MjgwLmpwZw.jpg",
            supervisor: "false",
            team: "team name",
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            locationId: location0.id
        },
        {
            name: "Hiroshi Nakamura",
            role: "Schnauzer",
            image: "https://images.generated.photos/qdLD50WNxBPnVwgGiRsEHQU1VC2pVyPA2-VS-ZPRSVQ/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzYwNDY2LmpwZw.jpg",
            supervisor: "false",
            team: "team name",
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            locationId: location0.id
        },
        {
            name: "Javier Rodriguez",
            role: "Schnauzer",
            image: "https://images.generated.photos/2D-ZKeoiXPPGKyvaymCUpul7jU34JkdmmBa1Qp9NWio/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDc1NzI1LmpwZw.jpg",
            supervisor: "false",
            team: "team name",
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            locationId: location0.id
        },
        {
            name: "Emilia Costa",
            role: "Schnauzer",
            image: "https://images.generated.photos/cyB4QZUFezafBKyDY68Rk7HZYNzwsx9S-5kAKdYMdHw/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDk2MzIwLmpwZw.jpg",
            supervisor: "false",
            team: "team name",
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            locationId: location0.id
        },
        {
            name: "Isabella Rossi",
            role: "Schnauzer",
            image: "https://images.generated.photos/pnRnY8yXjjor5i9bA11bnNnf6LNUA_dluUNQnAPKOow/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTYwODc4LmpwZw.jpg",
            supervisor: "false",
            team: "team name",
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            locationId: location0.id
        },
        {
            name: "Maya Patel",
            role: "Schnauzer",
            image: "https://images.generated.photos/ICdteXo2TklxncJ0AXFcb4pbqUU09fI1hF8aBUyrkVI/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjkwMjgyLmpwZw.jpg",
            supervisor: "false",
            team: "team name",
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            locationId: location0.id
        },
        {
            name: "Juan Garcia",
            role: "Schnauzer",
            image: "https://images.generated.photos/uJWbQx2qeCN1wRTiAb4kMnmx1MiVE9hwGGiGceNZPHo/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjYxMzI4LmpwZw.jpg",
            supervisor: "false",
            team: "team name",
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            locationId: location0.id
        },
        {
            name: "Aisha Khan",
            role: "Schnauzer",
            image: "https://images.generated.photos/RiBisg3NjFkV_rWyb8pISfGa6G_23il2-WatcsILCws/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjcwNTA4LmpwZw.jpg",
            supervisor: "false",
            team: "team name",
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            locationId: location0.id
        },
        {
            name: "Kofi Mensah",
            role: "Schnauzer",
            image: "https://images.generated.photos/dIyJWRLfsX-V0m02fHxliP0rKbXdDanizxCu92SMbFg/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzcwMTM3LmpwZw.jpg",
            supervisor: "false",
            team: "team name",
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            locationId: location0.id
        },
        {
            name: "Omar Al-Farsi",
            role: "Schnauzer",
            image: "https://images.generated.photos/kGsAWkP8-SuFDEjVOnhTj1VqLDtv_exzolBxepiJyvs/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDkyNTY3LmpwZw.jpg",
            supervisor: "false",
            team: "team name",
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            locationId: location0.id
        },
        {
            name: "Leila Ahmed",
            role: "Schnauzer",
            image: "https://images.generated.photos/-5hL90kRQCOIJcoSfTE1jg5HXqgkJsR5m6LpvV-3tnY/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjAwNzM0LmpwZw.jpg",
            supervisor: "false",
            team: "team name",
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            locationId: location0.id
        },
        {
            name: "Carlos Ramirez",
            role: "Schnauzer",
            image: "https://images.generated.photos/6t5NqQ71oTmoUTIE2OCotQ8rCf_ki8iESBXNSwj7ERk/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDExNjIyLmpwZw.jpg",
            supervisor: "false",
            team: "team name",
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            locationId: location0.id
        },
        {
            name: "Niamh Murphy",
            role: "Schnauzer",
            image: "https://images.generated.photos/ol8-PlI0aHrwYAddM0J_rJ5JpgnyrlohY8dm4iyEJM0/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODYwMDIwLmpwZw.jpg",
            supervisor: "false",
            team: "team name",
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            locationId: location0.id
        },
        {
            name: "Tariq Ali",
            role: "Schnauzer",
            image: "https://images.generated.photos/zRZHZZBmahRLRMvL9iYi-QH4oSE0aUJ-iczhWW3FJO8/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzkzMDI2LmpwZw.jpg",
            supervisor: "false",
            team: "team name",
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            locationId: location0.id
        },
        {
            name: "Sofia Hernandez",
            role: "Schnauzer",
            image: "https://images.generated.photos/5670owP5xUWAc_jX38k01dgR4Bv02BqZZcE1xxfkdVU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Mjc4MjkzLmpwZw.jpg",
            supervisor: "false",
            team: "team name",
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            locationId: location0.id
        },
        {
            name: "Rajesh Singh",
            role: "Schnauzer",
            image: "https://images.generated.photos/19JlfeiSlISk0S4OdOfChzW99ghETYKXJyjY30GYWbk/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzUxMzY3LmpwZw.jpg",
            supervisor: "false",
            team: "team name",
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            locationId: location0.id
        },
        {
            name: "Olivia Jones",
            role: "Schnauzer",
            image: "https://images.generated.photos/QlI_H6ImJ413_0BcIcbXe7sPVBlxMXg2X6lYmKbpjSk/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDI4MTA0LmpwZw.jpg",
            supervisor: "false",
            team: "team name",
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            locationId: location0.id
        },
        {
            name: "Amirah Abdullahi",
            role: "Schnauzer",
            image: "https://images.generated.photos/AUaKbR5yLe1cyGBKOJ71-qDflmELAJBTGjGa5ZFmbKY/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTM5NTM0LmpwZw.jpg",
            supervisor: "false",
            team: "team name",
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            locationId: location0.id
        },
        {
            name: "Lars Andersen",
            role: "Schnauzer",
            image: "https://images.generated.photos/vnu9KzNx3sWXqL-ayVCXsCOsCtXiWpHEp5441eFcoe4/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTE3MTQzLmpwZw.jpg",
            supervisor: "false",
            team: "team name",
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            locationId: location0.id
        },
        {
            name: "Fatima Hassan",
            role: "Schnauzer",
            image: "https://images.generated.photos/wKcDWaIoC2bNfyvWDIY0uRcgjGdh6jWvJcsyp88KayU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Mjg5OTIwLmpwZw.jpg",
            supervisor: "false",
            team: "team name",
            description: loremIpsum({
                count: 4,
                units: "paragraph"
            }),
            locationId: location0.id
        },
    ]
    await models.Dog.bulkCreate(dogModel)
}
