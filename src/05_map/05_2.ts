import {GovernmentBuildingsType, HouseType} from "../02_object/02_02";

export const getStreettsTitlesofGovermentsBuildings = (buildings: Array<GovernmentBuildingsType>) => {
    return buildings.map(b=>b.address.street.title)
  
}

export const getStreettsTitlesofHouses = (houses: Array<HouseType>) => {
    return houses.map(h=>h.address.street.title)

}

export const createMessages = (houses: Array<HouseType>) => {
    return houses.map(h=>"Hello guys from " + h.address.street.title)

}