

export type ManType = {
    name:string
    age:number
}

const people:Array<ManType> = [
    {name: "Egor Zubanov", age: 36},
    {name: "Rustam Mukumov", age: 36},
    {name: "Nikita Ahiev", age: 25},
]

/*const dimychTransformator = (man:ManType) => {
  return{
      stack: ["css, html", "js", "tdd", "react"],
      firstName: man.name.split(" ")[0],
      lastName: man.name.split(" ")[1],
  }
}*/

const dimychTransformator = (man:ManType) => ({
        stack: ["css, html", "js", "tdd", "react"],
        firstName: man.name.split(" ")[0],
        lastName: man.name.split(" ")[1],
    })


const devs = [
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Egor", lastName: "Zubanov"
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Rustam", lastName: "Mukumov"
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Nikita", lastName: "Ahiev"
    }
]

const devs2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2])
]

const devs3 = people.map(dimychTransformator)

const devs4 = people.map(man => ({
    stack: ["css, html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1],
}))


const messages = people.map(man=> `Hello ${man.name.split(" ")[0]}. Welcome to IT-INCUBATOR`)

export const createGreetingMessages = (people:Array<ManType>) => {
  return   people.map(man=> `Hello ${man.name.split(" ")[0]}. Welcome to IT-INCUBATOR`)
}