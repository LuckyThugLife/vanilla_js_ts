export type LocalCityType = {

    title: string
    countryTitle: string
}

export type AddressType = {
    streetTitle: string
    city: LocalCityType
}

export type TechType = {
    id: number
    title: string
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>

}

export const student: StudentType = {
    id: 1,
    name: "Rustam",
    age: 35,
    isActive: false,
    address: {
        streetTitle: "Lohuti 61",
        city: {
            title: "Dushanbe",
            countryTitle: "Tajikistan"

        }
    },

    technologies: [
        {
            id: 1,
            title: "HTML"
        },

        {
            id: 2,
            title: "CSS"
        },

        {
            id: 3,
            title: "React"
        }

    ]
}