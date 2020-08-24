var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var todos = [
'acordar',
'fazer cafe',
'estudar java script'
]

function renderTodo(){
    listElement.innerHTML = '';
    for(todo of todos){
        var todoElement = document.createElement('li')
        var todoTexto = document.createTextNode(todo)

        var linkElement= document.createElement('a')     

        linkElement.setAttribute('href', '#')

        var posicao = todos.indexOf(todo)
        linkElement.setAttribute('onclick', 'deleteTodo('+ posicao +')')

        var linkText = document.createTextNode('excluir')

        linkElement.appendChild(linkText)

        todoElement.appendChild(todoTexto)
        todoElement.appendChild(linkElement)

        listElement.appendChild(todoElement)
    }


}

renderTodo()

function addTodo(){
    var todoText = inputElement.value
    todos.push(todoText)
    inputElement.value = ''
    renderTodo()
}

buttonElement.onclick = addTodo

function deleteTodo(posicao){
    todos.splice(posicao, 1)
    renderTodo()
}