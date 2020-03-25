var ul = document.querySelector('#app ul');
var input = document.querySelector('#app input');
var button = document.querySelector('#app button');
button.onclick = adicionar;

function adicionar(){

    var texto = document.createTextNode(input.value);
    var li = document.createElement('li');
    li.appendChild(texto);
    var a = document.createElement('a');
    a.setAttribute('href','#');
    a.style.padding='10px';
    var textoLink = document.createTextNode('Excluir');
    a.appendChild(textoLink);
    li.appendChild(a);
    ul.appendChild(li);
}
