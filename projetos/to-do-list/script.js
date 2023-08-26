let text = document.querySelector('input#itxt');
let list = [];
let li = document.querySelector('ol#lista');
let res = document.querySelector('div#r');
let btn = document.querySelector('input#btn')
function AddTask() {
    const NewTask = text.value.trim();
    if(text.value.length > 25){
        alert('Certifique-se de digitar uma tarefa com menos de 20 caractéres')
    } else if(NewTask === '') {
        alert('digite um item e tente novamente')
    } else if (list.includes(NewTask)) {
        alert('o item está presente na lista')
    } else {
        list.push(NewTask);
        let listElement = document.createElement('li');
        listElement.textContent = NewTask;
        let delButton = document.createElement('button');
        delButton.textContent = '';
        delButton.setAttribute('data-index', list.length - 1);
        listElement.appendChild(delButton);
        li.appendChild(listElement);
        delButton.addEventListener('click', Delete);
        res.innerHTML = '';

        let delIcon = document.createElement('i');
        delIcon.className = 'fa-solid fa-delete-left fa-lg delete-icon';
        delIcon.textContent = '';
        delButton.appendChild(delIcon);
        delButton.style.visibility ='hidden'
        // Evento de mouseenter para exibir o botão de exclusão
        listElement.addEventListener('mouseenter', function() {
            delButton.style.visibility = 'visible';
            delButton.style.cursor = 'pointer'
            delButton.style.padding = '0px'
            delButton.style.marginLeft = '50%'
            

        });

        // Evento de mouseleave para ocultar o botão de exclusão
        listElement.addEventListener('mouseleave', function() {
            delButton.style.visibility = 'hidden';
            delButton.style.cursor = 'default'
        });
    }
 
    text.value = '';
    text.focus();
}

function Delete(event){
    const index = event.currentTarget.getAttribute('data-index');
    list.splice(index, 1);
    li.removeChild(event.currentTarget.parentNode);
}