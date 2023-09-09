let buttonCalc = document.querySelector('button#calc')

buttonCalc.addEventListener('click', () => {
    let alt = parseFloat(document.querySelector('input#altura').value.replace(',', '.'))
    let pes = parseFloat(document.querySelector('input#peso').value.replace(',', '.'))
    let imc = 0

    if(!isNaN(alt) && !isNaN(pes) && alt > 0 && pes > 0){
    imc = pes / (alt * alt)
 
    }if(imc < 18.5){   
    document.querySelector('span#results').innerHTML =`seu imc é de ${imc.toFixed(2)} e é considerado BAIXO!`
    document.querySelector('span#results').style.color ='red'
    }else if(imc >= 18.6 && imc <= 24.9){
    document.querySelector('span#results').innerHTML =`seu imc é de ${imc.toFixed(2)} e é considerado SAUDÁVEL!`
    document.querySelector('span#results').style.color ='green'
    }else if(imc >= 25 && imc <= 29.5){
        document.querySelector('span#results').innerHTML =`seu imc é de ${imc.toFixed(2)} e é considerado SOBREPESO!`
        document.querySelector('span#results').style.color ='orange'
    }else if(imc >= 29.6 && imc <= 34.9){
        document.querySelector('span#results').innerHTML =`seu imc é de ${imc.toFixed(2)} e é considerado OBESIDADE!`
        document.querySelector('span#results').style.color ='red'
    }else if(imc >= 35 && imc <= 39.5){
        document.querySelector('span#results').innerHTML =`seu imc é de ${imc.toFixed(2)} e é considerado OBESIDADE CLASSE 2!`
        document.querySelector('span#results').style.color ='#7c0000d1'
    }else if(imc > 39.6){
        document.querySelector('span#results').innerHTML =`seu imc é de ${imc.toFixed(2)} e é considerado GRAVE!`
        document.querySelector('span#results').style.color ='#000'
    }else{
    document.querySelector('span#results').innerHTML ='insira valores validos'
    }
})