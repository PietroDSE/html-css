const iniciar = document.querySelector('button#iniciar')
addEventListener("click", function(){
    document.querySelector('div#tudo').style.display = 'none'
    iniciar.style.display = 'none'
    document.querySelector('div#quiz').style.display = 'block'

})
