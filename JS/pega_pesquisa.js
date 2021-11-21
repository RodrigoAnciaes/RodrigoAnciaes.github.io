document.addEventListener('DOMContentLoaded', function() {

    pesquisa = document.querySelector('.pesquisa')

    
    pesquisa.addEventListener('input', function() {
        localStorage.setItem('pesquisa',pesquisa.value ) 
    })
})