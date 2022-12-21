import {ManType} from "./07_destructive_assignment";


let props:ManType

beforeEach(()=>{
    props = {
        name: "Rustam",
        age:35,
        lessons:[{title:"1"}, {title: "2"}],
        address: {
            street: {
                title:"Lohuti street"
            }
        }

    }
})

test("", () => {

    const {age, lessons} = props
    const {title} = props.address.street


    expect(age).toBe(35)
    expect(lessons.length).toBe(2)


    expect(title).toBe("Lohuti street")
})

test(' ',() => {
    const L1 = props.lessons[0]
    const L2 = props.lessons[1]

    const [Ls1, Ls2] = props.lessons

    expect(L1.title).toBe("1")
    expect(L2.title).toBe("2")

    expect(Ls1.title).toBe("1")
    expect(Ls2.title).toBe("2")

})