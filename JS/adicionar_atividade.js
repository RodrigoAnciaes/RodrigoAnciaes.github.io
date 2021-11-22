document.addEventListener('DOMContentLoaded', function() {
    
    var today = new Date()
    var dd = String(today.getDate()).padStart(2, '0')
    var mm = String(today.getMonth() + 1).padStart(2, '0')
    var yyyy = today.getFullYear()

    today = yyyy + '-' + mm + '-' + dd;

    atividades = document.querySelector('.atividades')

    editor = document.querySelector('.editor')

    agendada = document.querySelector('.agendada')

    ta = document.querySelector('.texto_agendada')

    ok = document.querySelector('.fechar')

    nome = document.querySelector('.nome_at')

    data = document.querySelector('.data_at')

    inicio = document.querySelector('.hora_in')

    termino = document.querySelector('.hora_te')

    ca = document.querySelectorAll('.ca')

    submit = document.querySelector('input[type="submit"]')

    submit.disabled = true

    cancelar = ca[0]

    confirmar = ca[1]

    state_b2 = 0

    
    atividades.addEventListener('click', function(event) {
            editor.style.display = 'block'
    })

    cancelar.addEventListener('click', function(event) {
        editor.style.display = 'none'
})
    

    confirmar.addEventListener('click', function(event) {
        console.log(data.value)
        console.log(today)
        if (data.value === today){
        
        conteudo = inicio.value + ' às ' + termino.value + ": " + nome.value
        editor.style.display = 'none'
        new_at = document.createElement('li')
        new_at.innerHTML = conteudo
        atividades.append(new_at)
        }

        else{
            editor.style.display = 'none'
            agendada.style.display = 'block'
            ta.innerHTML = 'Atividade agendada para: ' + data.value + ' com sucesso!!'
        }
})
    

ok.addEventListener('click', function(event) {
    agendada.style.display = 'none'


})
    
    
    })