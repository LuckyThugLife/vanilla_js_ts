import {CityType, GovernmentBuildingsType} from "../02_object/02_02";

export const demolishesHosesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(h=>h.address.street.title !== street)
    /*city.houses = city.houses.filter(h=> !(h.address.street.title === street))*/
}

export const getBuildigsWithStuffCountGreaterThen = (buildings: Array<GovernmentBuildingsType>, number: number) => {

return buildings.filter(b => b.stuffCount > number)

}