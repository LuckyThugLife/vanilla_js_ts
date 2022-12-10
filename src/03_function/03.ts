import {StudentType} from "../02_object/02";
import {CityType, GovernmentBuildingsType, HouseType} from "../02_object/02_02";

export const sum = (a:number, b:number) => {
    return a + b
}


export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })

}

/*export function addSkill2 (st: StudentType, skill: string) {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })

}*/

export const makeStudentActive = (s:StudentType) => {
    s.isActive = true
}

export const doesStudentLive = (s:StudentType, cityName:string) => {
return s.address.city.title === cityName
}

export const addMoneyToBudget = (building: GovernmentBuildingsType,budget: number) => {
building.budget += budget
}

export const repairHouse = (h: HouseType) => {
h.repaired = true
}

export const toFireStuff = (building: GovernmentBuildingsType, stuffCountToFire: number) => {
    building.stuffCount -= stuffCountToFire
}

export const toHireStuff = (building: GovernmentBuildingsType, stuffCountToHire: number) => {
    building.stuffCount += stuffCountToHire
}

export const createMessage = (city: CityType) => {
//return "Hello " + city.title + " citizens.I want you be happy. All " + city.citizensNumber+ " men"
return `Hello ${city.title} citizens.I want you be happy. All ${city.citizensNumber} men`
}