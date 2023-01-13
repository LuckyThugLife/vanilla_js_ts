export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

type CompanyType = { id: number, title: string };
export type withCompaniesType = {
    companies: Array<CompanyType>
}

export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    //copy.hair = u.hair / power
    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }
    /* copy.address = {
         ...copy.address,
         city: city
     }*/
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBook: string) {
    return {
        ...u,
        books: [...u.books, newBook]
    }
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {
    return  {
        ...u,
        books: u.books.map(b => b === oldBook ? newBook : b)
    }
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, bookForDelete: string) {
    return  {
        ...u,
        books: u.books.filter(b=>b !== bookForDelete)
    }
}

export function addNewCompany(u: UserWithLaptopType & withCompaniesType, newCompany: string) {
    return {
        ...u,
        companies: [...u.companies, newCompany]
    }
}

export function updateCompanyTitle(u: withCompaniesType, companyID:number,newTitleCompany: string) {
    return {
        ...u,
        companies: u.companies.map(c => c.id === companyID ? {...c, title:newTitleCompany} : c)
        // books: u.books.map(b => b === oldBook ? newBook : b)
    }
}
export function updateCompanyTitle2(companies: { [key:string]: Array<CompanyType> }, userName:string, companyID:number, newTitle:string) {

    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c=>c.id===companyID ? {...c, title: newTitle} : c)

    return companyCopy
}