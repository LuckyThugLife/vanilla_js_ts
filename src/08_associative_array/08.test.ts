



type UsersType = {
    [key:string]:{id:number, name: string}
}

let users:UsersType
beforeEach(()=>{
    users = {
        '43': {id: 43, name:'Rustam'},
        '345': {id: 345, name:'Daler'},
        '543': {id: 543, name:'Timur'},
        '465': {id: 465, name:'Ismail'}
    }
})


test('Should update corresponding user', ()=>{

  users['543'].name = 'TimurShah'
    expect(users['543']).toEqual({id:543, name:'TimurShah'})

})

test('Should delete corresponding user', ()=>{

    delete users['543']
    expect(users['543']).toBeUndefined()

})