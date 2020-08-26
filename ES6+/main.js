/* class list {
    constructor() {
        this.todo = [];
    }

    add() {
        this.todo.push('inicio da todo: ')
        console.log(this.todo)
    }

}

class todolist extends list {
    constructor(){
        super()
        this.usuario = 'iker'
    }

    mostrarusuario(){
        console.log(this.usuario)
    }
}

var minhaLista = new todolist()

document.getElementById('botao').onclick = function () {
    minhaLista.add()
    minhaLista.mostrarusuario()
} */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// map ele vai percorrer todo o vetor, posicao por posicao:
const newArr = arr.map(function (item) {
    return item * 2

})
console.log(newArr)

// reduce vai transformar em 1 unico valor
const sum = arr.reduce(function(total, next){
    return total + next

})
console.log(sum)

// filter vai pegar os pares pos ele retorna um true ou false

const filter = arr.filter(function(item){
    return item % 2 === 0

})
console.log(filter)

// find saber se existe uma informação e encontrar ela no array

const find = arr.find(function(item){
return item === 6

})
console.log(find)
// arrow function em funsao anonima 
const findd = arr.find(item => item === 2)
console.log(findd)






