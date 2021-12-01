document.addEventListener('DOMContentLoaded', function() {
    

    alterar = document.querySelector('.alterar')

    editor = document.querySelector('.editor')

    ca = document.querySelectorAll('.ca')

    submit = document.querySelector('input[type="submit"]')

    nome = document.querySelector('.nome')

    email = document.querySelector('.email')

    seu_nome = document.querySelector('h1')

    seu_email = document.querySelector('.seu_email')

    submit.disabled = true

    cancelar = ca[0]

    confirmar = ca[1]

    state_b2 = 0

    
    alterar.addEventListener('click', function(event) {
            editor.style.display = 'block'
    })

    cancelar.addEventListener('click', function(event) {
        editor.style.display = 'none'
})
    

    confirmar.addEventListener('click', function(event) {

        if (nome.value != ''){seu_nome.innerHTML = nome.value}
        if (email.value != '') {seu_email.innerHTML = email.value}
        editor.style.display = 'none'
        

        
})
    

    
    
    })