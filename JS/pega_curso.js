document.addEventListener('DOMContentLoaded', function() {

    as = document.querySelectorAll('li')

    for (a of as) {

        console.log(a.innerHTML)

        a.addEventListener('click', function(event) {

            t = event.currentTarget

            localStorage.setItem('nome', t.innerHTML)

        })

    }
})