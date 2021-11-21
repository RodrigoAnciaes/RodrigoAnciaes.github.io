document.addEventListener('DOMContentLoaded', function() {

    resultado = document.querySelector('.resultados')
    
    if (localStorage.length != 0){
        valor = "Exibindo resultados para: " + localStorage.getItem('pesquisa')
        resultado.innerHTML = valor
        localStorage.clear
    }
})
