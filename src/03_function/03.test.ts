import {StudentType} from "../02_object/02";
import {doesStudentLive, makeStudentActive} from "./03";


let student: StudentType

beforeEach(() => {
    student = {
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
})

/*test("new tech skill should be added to student", () => {
    expect(student.technologies.length).toBe(3)
    expect(student.technologies[3].title).toBe("JS")
    expect(student.technologies[3].id).toBeDefined()


})*/


test("student should be made active", () => {
    expect(student.isActive).toBe(false)

    makeStudentActive(student)

    expect(student.isActive).toBe(true)

})

test("does student live in city?", () => {

    let result1 = doesStudentLive(student, "Moscow")
    let result2 = doesStudentLive(student, "Dushanbe")

    expect(result1).toBe(false)
    expect(result2).toBe(true)

})