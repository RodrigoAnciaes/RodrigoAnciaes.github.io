document.addEventListener('DOMContentLoaded', function() {

    nome = document.querySelector('h1')
    console.log(nome.innerHTML)
    console.log(localStorage.getItem('nome'))

    nome.innerHTML = localStorage.getItem('nome')

})
