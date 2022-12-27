

export const userObj = {
    '0': 'Rustam',
    '1': 'Daler',
    '2': 'Timur',
    '3': 'Ismail',
}

type UsersType = {
    [key:string]:{id:number, name: string}
}

export const users:UsersType = {
    '43': {id: 43, name:'Rustam'},
    '345': {id: 345, name:'Daler'},
    '543': {id: 543, name:'Timur'},
    '465': {id: 465, name:'Ismail'}
}
//users[1]
let user = {id: 100500, name:'Igor'}
users[user.id]=user
delete users[user.id]
users[user.id].name = 'Farruh'



export const usersArray = [
    {id: 43, name:'Rustam'},
    {id: 345, name:'Daler'},
    {id: 543, name:'Timur'},
    {id: 465, name:'Ismail'}
]

//usersArray.find(u=>u.id===1)
//let usersCopy = [...usersArray.filter(), user]
//let usersArray = usersArray.filter(u=>u.id !== user.id)
