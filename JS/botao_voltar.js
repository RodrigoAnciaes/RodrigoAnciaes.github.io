document.addEventListener('DOMContentLoaded', function() {

    let img_voltar = document.querySelector('.img_voltar')
    
    img_voltar.addEventListener('click', function() {
        window.history.back() 
    })
})
