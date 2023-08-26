let slider = document.querySelector('input#slider')
let button = document.querySelector('button#button')
let pass_length = document.querySelector('span#value')
let password = document.querySelector('span#password')
let container_pass = document.querySelector('div#container-password')
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*_"
let newPass = ""
pass_length.innerHTML =slider.value
slider.oninput = function(){
    pass_length.innerHTML = this.value
}
function generatePass(){
    let pass = ""
    for(i = 0, n = charset.length; i < slider.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * n))
    }
    container_pass.style.visibility ='visible'
    password.innerHTML = pass
    newPass = pass
}

function copyPass(){
    navigator.clipboard.writeText(newPass)
}