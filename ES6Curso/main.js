class TodoList{
    constructor(){
        this.todos = [];
    }
    addTodo(novo){
        this.todos.push(novo);
        var ul = document.querySelector('ul');
        var li = document.createElement('li');
        var texto = document.createTextNode(novo);
        li.appendChild(texto);
        ul.appendChild(li);
    }
}
const MinhaLista = new TodoList();
document.getElementById('addTodo').onclick = function(){
    MinhaLista.addTodo(document.getElementById('todo').value);
}
import { soma } from './funcoes.js';
console.log(soma(3,4));
