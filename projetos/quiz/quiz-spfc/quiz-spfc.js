document.addEventListener("DOMContentLoaded", function() {
    let iniciarBotao = document.querySelector("button#iniciar");
    let expliDiv = document.querySelector("div#expli");
    let quizDiv = document.querySelector("div#quiz");
    let perguntaDiv = document.querySelector("div#pergunta");
    let opcoes = document.querySelector('div#opcoes')
    let resposta = document.querySelector('div#resposta')
    let responder = document.querySelector('button#responder')
    let proximaB = document.querySelector('button#proxima') 
    let perguntasRespondidas = 0;
    let perguntasRespondidasIndex = [];
    let pontuacao = 0;
    let perguntaAtual = 0; // Movido para fora do evento DOMContentLoaded

    responder.addEventListener("click", function() {
        let select = document.querySelector('input[name="resposta"]:checked');
        if (select) {
            let perguntaAtualObj = perguntasEmbaralhadas[perguntaAtual];
            let respostaIndex = parseInt(select.value);
            let respostaCerta = perguntaAtualObj.correta;
        }
            if (respostaIndex === respostaCerta) {
                resposta.innerHTML = 'Resposta certa';
                pontuacao++;
            } else {
                resposta.innerHTML = 'Resposta incorreta';
            }

         if (perguntasRespondidas < 10) {
                perguntaAtual++;

        }else{
            exibirResultadoFinal()
        }
        perguntasRespondidasIndex.push(perguntaAtual);
        perguntasRespondidas++;
});

    iniciarBotao.addEventListener("click", function() {
        console.log('Botão clicado');
        expliDiv.style.display = "none";
        iniciarBotao.style.display = "none";
        quizDiv.style.display = "block";
        resposta.style.display = 'block';
        responder.style.display = 'block';
        exibirPergunta(perguntasEmbaralhadas[perguntaAtual]);
    });
    let perguntas = [
        {
            //pergunta 1
            pergunta: "Qual é o mascote do São Paulo Futebol Clube?",
            respostas: ["Bandeirinha", "Bambi", "Leão", "Um santo"],
            correta: 3
        },
        {
            //pergunta 2
            pergunta: "Quantas vezes o São Paulo venceu a Copa Libertadores?",
            respostas: ["1 vez", "3 vezes", "6 vezes", "nenhuma vez"],
            correta: 1
        },
        {
            //pergunta 3
            pergunta: "quantas vezes o são paulo conquistou a triplice coroa?",
            respostas: ["1 vez", "nenhuma vez", "2 vezes", "5 vezes"],
            correta: 2
        },
        {
            //pergunta 4
            pergunta: "verdadeiro ou falso: o são paulo é o maior vencedor internacional brasileiro?",
            respostas: ["verdadeiro", "falso"],
            correta: 0
        },
        {
            //pergunta 5
            pergunta: "quem marcou o gol do são paulo na final do mundial contra o liverpool?",
            respostas: ["Amoroso", "Rogério Ceni", "Lugano", "Mineiro"],
            correta: 3
        },
        {
            //pergunta 6
            pergunta: "qual foi o primeiro titulo oficial do são paulo e quando ele foi conquistado?",
            respostas: ["paulistão(1931)", "paulistão(1930)", "copa do brasil (1940)", "campeonato brasileiro(1935)"],
            correta: 0
        },
        {
            //pergunta 7
            pergunta: "Quais times o São Paulo já enfrentou na final da Libertadores?",
            respostas: ["Independiente, Newell's Old Boys, Universidad católica, athlético paranaense, internacional", "Newell's Old Boy's, penãrol, vélez,  internacional", "penãrol, internacional, boca juniors, cap", "independiente, newell's old boys, universidad católica, vélez, cap, internacional"],
            correta: 3
        },
        {
            //pergunta 8
            pergunta: "qual treinador conquistou o tri-hexa brasileirão pelo são paulo?",
            respostas: ["Rubens Minelli", "muricy ramalho", "paulo autuori", "tele santana"],
            correta: 1
        },
        {
            //pergunta 9
            pergunta: "quem foi cicero pompeu de toledo?",
            respostas: ["um jogador", "um conselheiro", "um arquiteto do morumbi", "presidente do clube"],
            correta: 2
        },
        {
            //pergunta 10
            pergunta: "quantos titulos internacionais o são paulo tem?",
            respostas: ["9", "15", "8", "7"],
            correta: 0
        },
        {
            //pergunta 11
            pergunta: "quantos titulos OFICIAIS o são paulo possui?",
            respostas: ["90", "26", "73", "58"],
            correta: 3
        },
        {
            //pergunta 12
            pergunta: "qual posição de maior torcida o são paulo ocupa?",
            respostas: ["primeiro", "quinto", "terceiro", "segundo"],
            correta: 2
        },
        {
            //pergunta 13
            pergunta: "Antes de pegar o Liverpool na final do Mundial de 2005, quem o São Paulo enfrentou?",
            respostas: ["Al-ain", "al-ittihad", "raja casablanca", "al-qaeda"],
            correta: 1
        },
        {
            //pergunta 14
            pergunta: "quem o São Paulo enfrentou na partida inaugural do Morumbi e qual o resultado?",
            respostas:["são paulo 1 x 0 sporting", "são paulo 2 x 0 real madrid", "são paulo 3 x 0 juventus", "são paulo 2 x 0 roma"],
            correta: 0
        },
        {
            //pergunta 15
            pergunta: "Quando o são paulo foi fundado?",
            respostas: ["20 de janeiro de 1930", "25 de janeiro de 1931", "25 de janeiro de 1930", "2 de janeiro de 1930"],
        }
            
    ];    let perguntasEmbaralhadas = shuffleArray(perguntas.slice());

    function exibirPergunta(pergunta) {
        perguntaDiv.innerHTML = pergunta.pergunta;
        opcoes.innerHTML = "";
        for (let i = 0; i < pergunta.respostas.length; i++) {
            let label = document.createElement('label');
            let input = document.createElement('input');
            input.type = "radio";
            input.name = 'resposta';
            input.value = i; 
            label.appendChild(input);
            label.appendChild(document.createTextNode(" " + pergunta.respostas[i]));
            opcoes.appendChild(label);
        }
        resposta.innerHTML = "";
        proximaB.style.display = 'none'
    }

    function ExibirNaoRespondida() {
        let disponiveis = perguntasEmbaralhadas.slice();
        shuffleArray(disponiveis);
        disponiveis = disponiveis.filter((_perguntas, index) => !perguntasRespondidasIndex.includes(index));
        if (disponiveis.length > 0) {
            exibirPergunta(disponiveis[0]);
            proximaB.style.display = 'none'
        }
    }

    function exibirResultadoFinal() {
        quizDiv.style.display = "none";
        resposta.style.display = "none";
        responder.style.display = "none";

        let resultadoDiv = document.createElement("div");
        resultadoDiv.textContent = "Quiz finalizado! Sua pontuação é: " + pontuacao;
        document.body.appendChild(resultadoDiv);
    }
    proximaB.addEventListener("click", function(){
        if(perguntasRespondidas < 10){
            ExibirNaoRespondida()
            perguntaAtual++
        }
    })
    function shuffleArray(array) {
        let currentIndex = array.length, randomIndex, tempValue;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            tempValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = tempValue;
        }

        return array;
    }
});