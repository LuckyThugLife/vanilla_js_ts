import {CityType} from "../02_object/02_02";
import {addMoneyToBudget, createMessage, repairHouse, toFireStuff, toHireStuff} from "./03";


let city: CityType

beforeEach(() => {
    city = {
        title: "New York",
        houses: [{
            buildedAt: 2012, repaired: false,
            address: {number: 100, street: {title: "White street"}}
        },
            {
                buildedAt: 2008, repaired: false,
                address: {number: 100, street: {title: "Happy street"}}
            },
            {
                buildedAt: 2020, repaired: false,

                address: {number: 101, street: {title: "Happy street"}}
            }
        ],
        governmentBuildings: [
            {type:"HOSPITAL",budget:200000,stuffCount:200,
                address:{street:{title:"Central street"}}},
            {type:"FIRE STATION",budget:500000,stuffCount:1000,
            address:{street:{title:"South street"}}}

        ],
        citizensNumber: 1000000

    }

})


test("Budget should be changed for HOSPITAL", () => {

    addMoneyToBudget(city.governmentBuildings[0], 100000)

    expect(city.governmentBuildings[0].budget).toBe(300000)
})

test("Budget should be changed for FIRE STATION", () => {

    addMoneyToBudget(city.governmentBuildings[1], -100000)

    expect(city.governmentBuildings[1].budget).toBe(400000)
})

test("House should be repaired", () => {

    repairHouse(city.houses[1])

    expect(city.houses[1].repaired).toBeTruthy()
})

test("Stuff should be increased", () => {

    toFireStuff(city.governmentBuildings[0], 20)

    expect(city.governmentBuildings[0].stuffCount).toBe(180)
})

test("Stuff should be creased", () => {

    toHireStuff(city.governmentBuildings[0], 20)

    expect(city.governmentBuildings[0].stuffCount).toBe(220)
})

test("Greeting message should be correct for city", () => {
/*    const message = createMessage(city)

    expect(message).toBe("Hello New York citizens.I want you be happy. All 1000000 men")*/
    expect(createMessage(city)).toBe("Hello New York citizens.I want you be happy. All 1000000 men")
})