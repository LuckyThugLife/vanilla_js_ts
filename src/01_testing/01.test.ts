import {mult, splitIntoWords, sum} from "./01";

//data
let a: number
let b: number
let c: number

beforeEach( () => {
//data
    a = 1
    b = 2
    c = 3
})

test('sum should be correct', () => {

    //action
    const result1 = sum(a, b)
    a = 100
    const result2 = sum(a, b)

    // expect result
    expect(result1).toBe(3)
    expect(result2).toBe(102)
})

test('multiply should be correct', () => {


    const result1 = mult(a, b)
    const result2 = mult(b, c)

    expect(result1).toBe(2)
    expect(result2).toBe(6)
})

test('splitting into words should be correct', () => {

    const sent1 = "Hello my friend!"
    const sent2 = "JS - the best programming language"


    const result1 = splitIntoWords(sent1)
    const result2 = splitIntoWords(sent2)


    expect(result1.length).toBe(3)
    expect(result1[0]).toBe("hello")
    expect(result1[1]).toBe("my")
    expect(result1[2]).toBe("friend")

})
