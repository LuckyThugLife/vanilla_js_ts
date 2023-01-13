import {
    addNewBooksToUser, addNewCompany,
    makeHairstyle,
    moveUser, moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, withCompaniesType
} from "./10_immutability";


test("reference type test", () => {

    let user: UserType = {
        name: "Rustam",
        hair: 32,
        address: {
            city: "Dushanbe",
            house: 12
        }
    }

    const awesomeUser = makeHairstyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
})

test("change address", () => {

    let user: UserWithLaptopType = {
        name: "Rustam",
        hair: 32,
        address: {
            city: "Dushanbe"
        },
        laptop: {
            title: "Nitro"
        }
    }
    const movedUser = moveUser(user, "California")

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe("California")
})

test("upgrade laptop to macbook", () => {

    let user: UserWithLaptopType = {
        name: "Rustam",
        hair: 32,
        address: {
            city: "Dushanbe"
        },
        laptop: {
            title: "Nitro"
        }
    }
    const upgradedLaptop = upgradeUserLaptop(user, "Macbook")

    expect(user).not.toBe(upgradedLaptop)
    expect(user.address).toBe(upgradedLaptop.address)
    expect(user.laptop).not.toBe(upgradedLaptop.laptop)
    expect(upgradedLaptop.laptop.title).toBe("Macbook")
    expect(user.laptop.title).toBe("Nitro")
})

test("move user to other house", () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Rustam",
        hair: 32,
        address: {
            city: "Dushanbe"
        },
        laptop: {
            title: "Nitro"
        },
        books: ["css", "html", "js", "react"]
    }
    const upgradedLaptop = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(upgradedLaptop)
    expect(user.books).toBe(upgradedLaptop.books)
    expect(user.laptop).toBe(upgradedLaptop.laptop)
    expect(user.address).not.toBe(upgradedLaptop.address)
    expect(upgradedLaptop.address.house).toBe(99)
})

test("add new books to user", () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Rustam",
        hair: 32,
        address: {
            city: "Dushanbe"
        },
        laptop: {
            title: "Nitro"
        },
        books: ["css", "html", "js", "react"]
    }
    const userCopy = addNewBooksToUser(user, "ts")

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe("ts")
    expect(user.books.length).toBe(4)
})

test("update jt to ts", () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Rustam",
        hair: 32,
        address: {
            city: "Dushanbe"
        },
        laptop: {
            title: "Nitro"
        },
        books: ["css", "html", "js", "react"]
    }
    const userCopy = updateBook(user, "js", "ts")

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe("ts")
})

test("remove js book", () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Rustam",
        hair: 32,
        address: {
            city: "Dushanbe"
        },
        laptop: {
            title: "Nitro"
        },
        books: ["css", "html", "js", "react"]
    }
    const userCopy = removeBook(user, "js")

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe("react")
})

test("add new company", () => {

    let user: UserWithLaptopType &withCompaniesType = {
        name: "Rustam",
        hair: 32,
        address: {
            city: "Dushanbe"
        },
        laptop: {
            title: "Nitro"
        },
        companies:[{id:1, title:"Epam"}, {id:2, title:"it-incubator"}]
    }
    const userCopy = addNewCompany(user, "google")

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies )
    expect(userCopy.companies.length).toBe(3)
    expect(userCopy.companies[2]).toBe("google")
})

test("update company", () => {

    let user: UserWithLaptopType &withCompaniesType = {
        name: "Rustam",
        hair: 32,
        address: {
            city: "Dushanbe"
        },
        laptop: {
            title: "Nitro"
        },
        companies:[{id:1, title:"Епам"}, {id:2, title:"it-incubator"}]
    }
    const userCopy = updateCompanyTitle(user, 1,"Epam") as UserWithLaptopType &withCompaniesType

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies )
    expect(userCopy.companies.length).toBe(2)
    expect(userCopy.companies[0].title).toBe("Epam")
})
test("update company 2", () => {

    let companies = {
        "Rustam" : [{id:1, title:"Епам"}, {id:2, title:"it-incubator"}],
        "Dimych" : [{id:1, title:"it-incubator"}]
    }

    const copy = updateCompanyTitle2(companies,"Rustam",1,"Epam")

    expect(copy["Rustam"]).not.toBe(companies["Rustam"])
    expect(copy["Dimych"]).toBe(companies["Dimych"])
    expect(copy["Rustam"][0].title).toBe("Epam")

})