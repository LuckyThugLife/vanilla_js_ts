import {createGreetingMessages, ManType} from "./05_map";


let people:Array<ManType> = []

beforeEach(()=>{
    people = [
        {name: "Egor Zubanov", age: 36},
        {name: "Rustam Mukumov", age: 36},
        {name: "Nikita Ahiev", age: 25},

    ]
})

test("should be array of greeting messages", ()=>{
   /* const messages = people.map(man=> `Hello ${man.name.split(" ")[0]}. Welcome to IT-INCUBATOR`)*/

    const messages = createGreetingMessages(people)


    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Hello Egor. Welcome to IT-INCUBATOR")
    expect(messages[1]).toBe("Hello Rustam. Welcome to IT-INCUBATOR")
    expect(messages[2]).toBe("Hello Nikita. Welcome to IT-INCUBATOR")
})