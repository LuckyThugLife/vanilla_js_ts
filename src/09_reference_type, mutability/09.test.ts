export type AddressType = {
    title: string
}

export type UserType = {
    name: string
    age: number
    address: AddressType
}

function increaseAge(u: UserType) {
    u.age++
}

test('reference type test', () => {
    let user = {
        name: 'Rustam',
        age: 35,
        address: {
            title: 'Dushanbe'
        }
    }
    increaseAge(user)

    expect(user.age).toBe(36)

    const superman = user

    superman.age = 1000

    expect(user.age).toBe(1000)

})

test('reference array test', () => {
    let users = [
        {
            name: 'Rustam',
            age: 35
        },
        {
            name: 'Farik',
            age: 34
        }
    ]


    const admins = users

    admins.push({
        name: 'Adam',
        age: 5
    })
    expect(users[2]).toEqual({
        name: 'Adam',
        age: 5
    })

})

test('value type test', () => {
    let usersCount = 100
    let adminsCount = usersCount

    adminsCount = adminsCount + 1
    adminsCount++
    expect(usersCount).toBe(100)
    expect(adminsCount).toBe(102)
})

test('reference type2 test', () => {
    let user: UserType = {
        name: 'Rustam',
        age: 35,
        address: {
            title: 'Dushanbe'
        }
    }

    const  user2: UserType = {
        name: 'Fira',
        age: 31,
        address: user.address
    }

    user2.address.title = 'Santa Monica'

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe('Santa Monica')


})

test('reference array2 test', () => {
    const address = {
        title: 'Dushanbe'
    }

    const user: UserType = {
        name: 'Rustam',
        age: 35,
        address: address
    }

    const  user2: UserType = {
        name: 'Fira',
        age: 31,
        address: address
    }

    const users = [user, user2, {name:'Adam', age: 5, address:address}]
    const admins = [user, user2]

    admins[0].name = 'RustamJon'


  expect(users[0].name).toBe('RustamJon')
  expect(user.name).toBe('RustamJon')


})

test('sort array test', () => {
    const letters = ['a', 'g', 'd', 'v', 'e', 't',]
    letters.sort()

    expect(letters).toEqual(['a', 'd', 'e', 'g', 't', 'v'])

})