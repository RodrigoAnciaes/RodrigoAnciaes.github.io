document.addEventListener('DOMContentLoaded', function() {

    mensagem = document.querySelector('.agendada')
    
    enviar = document.querySelector('.enviar')

    conteudo = document.querySelector('.texto_agendada')

    ok = document.querySelector('.fechar')

    title =  document.querySelector('h2')
    
    enviar.addEventListener('click', function() {
        console.log(title.innerHTML,'Agendamento')
        if (title.innerHTML === 'Agendamento') {conteudo.innerHTML = 'Reunião agendada com Sucesso!!!'}
        else {conteudo.innerHTML = 'Mensagem enviada com Sucesso!!!'}
        mensagem.style.display = 'block'
    })
    ok.addEventListener('click', function() {
        mensagem.style.display = 'none'
    })

})
