"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
} 

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


const soma = (x=1, y=6) => x+y

console.log(soma(5, 3))
console.log(soma(6))
console.log(soma())



const usuario = {
    nome: 'iker',
    idade: 20,
    endereco: {
        rua: 'rua sao judas thadeu',
        numero: 202,
        cidade: 'Duque top city'
    }
}

 const nome = usuario.nome
const idade = usuario.idade
const cdd = usuario.endereco.cidade
console.log(nome, idade, cdd) 

const { nome, idade, endereco: {cidade} } = usuario // conceito de desinstruturação 

console.log(nome)
console.log(idade)
console.log(cidade)

function mostraNome ({idade}){
    console.log(idade)
}

mostraNome(usuario)



// RESt - pegar os restos das propriedades 
const usuario = {
    nome: 'iker',
    idade: 20,
    endereco: {
        rua: 'rua sao judas thadeu',
        numero: 202,
        cidade: 'Duque top city bacelar'
    }
}

const { nome, ...resto } = usuario

console.log(nome)
console.log(resto)

const arr = [1, 2, 3, 4, 5]

const [a, b , ...c] = arr

console.log(a, b, c) 

// SPREAD > propagar, de repassar as informações de um objeto ou array para outra estrutura de dados

const arr = [1, 2, 3]
const arr2= [4, 5, 6]

const arr3 = [...arr, ...arr2]

console.log(arr3)*/
var usuario1 = {
  nome: "vinicios",
  idade: 21,
  empresa: 'ifma'
};

var usuario2 = _objectSpread(_objectSpread({}, usuario1), {}, {
  nome: 'iker'
});

console.log(usuario1);
console.log(usuario2);
console.log("meu nome e ".concat(usuario1.nome, ", trabalho no ").concat(usuario1.empresa, " e tenho ").concat(usuario1.idade, " anos")); // Sintaxe curta de objeto

var nome = 'iker';
var idade = 21;
var estudante = {
  nome: nome,
  idade: idade,
  empresa: "prefeitura"
};
console.log(estudante);
