function getAdmins(map){
    let admins = []
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key)
        }
    }
    return admins
}

const usuarios = new Map()

usuarios.set('João', 'Admin')
usuarios.set('Ala', 'Admin')
usuarios.set('John', 'User')
usuarios.set('Maria', 'Admin')

console.log(getAdmins(usuarios))