const canvas = document.querySelector('canvas#analogic-clock');
const context = canvas.getContext('2d');
const clockRadius = 500
const border = 20
//Obtém o elemento do canvas
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
//define o centro do relógio
function drawClock() { //função que desenha o ponteiro

    context.clearRect(0, 0, canvas.width, canvas.height); //limpa o canvas a cada frame


    const now = new Date();
    const hours = now.getHours();
    const min = now.getMinutes();
    const secon = now.getSeconds();
    //variáveis que obtém horas, minutos e segundos atuais

    context.beginPath();
    const hourAngle = ((hours % 12) + min / 60) * 30 * (Math.PI / 180);
    const hoursLength = 60.2;
    context.moveTo(centerX, centerY);
    context.lineTo(centerX + Math.cos(hourAngle) * hoursLength, centerY + Math.sin(hourAngle) * hoursLength);
    context.strokeStyle = 'black';
    context.lineWidth = 3.9;
    context.stroke();
    context.closePath();
    //desenha o ponteiro de horas do relógio

    context.beginPath();
    const minAngle = (min + secon / 60) * 6 * (Math.PI / 180);
    const minLength = 67.5;
    context.moveTo(centerX, centerY);
    context.lineTo(centerX + Math.cos(minAngle) * minLength, centerY + Math.sin(minAngle) * minLength);
    context.strokeStyle = 'red';
    context.lineWidth = 2.7;
    context.stroke();
    context.closePath();
    //desenha o ponteiro de minutos do relógio

    context.beginPath();
    const secAngle = secon * 6 * (Math.PI / 180);
    const seconLength = 80;
    context.moveTo(centerX, centerY);
    context.lineTo(centerX + Math.cos(secAngle) * seconLength, centerY + Math.sin(secAngle) * seconLength);
    context.strokeStyle = 'darkblue'; 
    context.lineWidth = 2.5; 
    context.stroke();
    context.closePath();
    //desenha o ponteiro de segundos do relógio

    context.font ='30px Arial'
    context.fillStyle ='black'
    context.textAlign ='center'

    for(let i = 1; i <= 12; i++){
        const angle = (i - 3) * (Math.PI / 6)
        const X = centerX + Math.cos(angle) * 120
        const Y = centerY + Math.sin(angle) * 120
        context.fillText(i.toString(), X, Y)
    }
}

    setInterval(drawClock, 1000);
    //chama a função drawClock de 1 em 1seg
