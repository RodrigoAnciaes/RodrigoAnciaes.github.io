document.addEventListener('DOMContentLoaded', function() {


    b_c2 = document.querySelector('.selecionar')

    state_b2 = 0

    cor = ('#FF0C20')
    
    b_c2.addEventListener('click', function(event) {
        if (state_b2 === 0) { 
            b_c2.style.borderColor = cor
            b_c2.innerHTML = 'Faculdade Salva'
            state_b2 = 1
        }
        else {
            b_c2.style.borderColor = "black"
            b_c2.innerHTML = 'Salvar Facauldade'
            state_b2 = 0
        }
    })
    
    
    
    
    })