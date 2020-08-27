
class Usuario {
    constructor() {
        this.email = '',
            this.senha = ''
    }
}

class Admin extends Usuario {
    constructor() {
        super()
    }
}
const User1 = new Usuario()
User1.email = "vinicios@gmail"
User1.senha = '123456'

console.log(User1)


const Adm1 = new Admin()

Adm1.email = 'iker@gmail'
Adm1.senha = '789456'

console.log(Adm1)

console.log(User1.constructor.name) // false

 

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Vinicios', idade: 21, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
]

const newarr = usuarios.map(function (item) {
    return console.log(item.idade)
})
var resp = []
const newarr2 = usuarios.filter(function (item) {
    if ((item.idade > 17) && (item.empresa === 'Rocketseat')) {
        resp.push(item)
    } else {
        console.log(`${item} nao entrou nas condições`)
    }
})

console.log(resp)
/*
const filt = usuarios.filter(function(item){
    item.idade > 17 && item.empresa === 'Rocketseat'
})

console.log(filt)*/

const findd = usuarios.find(function (item) {
    item.empresa === 'Google'

})
console.log(findd)

const mapp = usuarios.map(function(item){
    if(item.idade*2 < 50){
        console.log(item)
    }
})



