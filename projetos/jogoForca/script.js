const words = ['exceto', 'cínico', 'idôneo', 'âmbito', 'índole', 'mister', 'apogeu', 'convém', 'utopia', 'sádico', 'escopo', 'ênfase', 'idiota', 'casual', 'mérito', 'alusão', 'hostil', 'anseio', 'cético', 'legado', 'hétero', 'pressa', 'gentil', 'alheio', 'nocivo', 'infame', 'empatia', 'cônjuge', 'exceção', 'caráter', 'prolixo', 'verbete', 'análogo', 'genuíno', 'estória', 'sublime', 'família', 'pêsames', 'apático', 'redimir', 'astúcia', 'pródigo', 'audácia', 'cultura', 'recesso', 'estigma', 'virtude',, 'recíproco', 'concessão', 'impressão', 'escrúpulo', 'retificar', 'presunção', 'propósito', 'concepção', 'hipócrita', 'plenitude', 'essencial', 'hegemonia', 'corolário', 'incidente', 'altruísmo', 'vagabundo', ]

let randomIndex = Math.floor(Math.random() * words.length)
let chosenWord = words[randomIndex]
let win = document.querySelector('div#winMsg')
let lose = document.querySelector('div#loseMsg')

let hidden = Array(chosenWord.length).fill('_')
let remainingAttempts = 5
let userLetters = []

const hiddenElement = document.querySelector('div#hiddenWord')
const attemptsElement = document.querySelector('span#attempts')
const userInput = document.querySelector('input#userAttempt')
const userButton = document.querySelector('button#userButton')

function updateWord(){
    hiddenElement.innerHTML = hidden.join('')
}
function updateAttempts(){
    attemptsElement.innerHTML = remainingAttempts
}
function checkWin(){
    if(!hidden.includes('_')){
    win.innerHTML ='Você venceu!'
    }
    resetGame()
}
function checkLose(){
    if(remainingAttempts === 0){
    lose.innerHTML ='você perdeu!'
    }
    resetGame()
}
function resetGame(){
    randomIndex = Math.floor(Math.random() * words.length)
    chosenWord = words[randomIndex]
    hidden = Array(chosenWord.length).fill('_')
    remainingAttempts = 5
    userLetters = []
    updateWord()
    updateAttempts()
}
function makeUser(letter){
    if(userLetters.includes(letter)){
        alert('letra já inserida')
        return
    }
    userLetters.push(letter)
    if(chosenWord.includes(letter)){
        for(let i = 0; i < chosenWord.length; i++){
            if(chosenWord[i] === letter){
                hidden[i] = letter
            }
        }
        updateWord()
        checkWin()
    }else{
        remainingAttempts--
        updateAttempts()
        checkLose()
    }
}
userButton.addEventListener('click', () => {
    const user = userInput.value.toLowerCase()
    if(user.length === 1 &&  /^[a-z]+$/.test(user)){
        makeUser(user)
    }else{
        alert('insira uma letra válida')
    }
    userInput.value =''
})
updateWord()
updateAttempts()