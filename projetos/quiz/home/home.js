const spfcB = document.querySelector('button#spfc')
const corB = document.querySelector('button#sccp')
const palB = document.querySelector('button#sep')

spfcB.addEventListener("click", function(){
    window.location.href = '../quiz-spfc/spfc-quiz.html'
})
corB.addEventListener("click", function(){
    window.location.href = '../quiz-sccp/sccp-quiz.html'
})
palB.addEventListener("click", function(){
    window.location.href = '../quiz-sep/sep-quiz.html'
})