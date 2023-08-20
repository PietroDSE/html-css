document.addEventListener('DOMContentLoaded', function() {
    let dm = document.querySelector('#dark_mode');
    let body = document.querySelector('body#c');
    let main = document.querySelector('main#main')
    let footer = document.querySelector('footer#footer'); 
    let links = document.querySelectorAll('.link');
    let link_f = document.querySelector('a#f_link');
    let art = document.querySelector('article#article');
    let m = document.querySelector('main#main');
    let isDarkMode = false;

    dm.addEventListener('click', function(){
        isDarkMode = !isDarkMode;

        if (isDarkMode) {
            body.style.backgroundColor = '#1a1a1a';
            body.style.color = 'white';
            art.style.backgroundColor = '#1a1a1a';
            art.style.color = 'white';
            m.style.backgroundColor = '#1a1a1a';
            m.style.color = 'white';
            footer.style.backgroundColor = 'black';
            footer.style.color = 'white'
            link_f.style.color = 'white';
            for (let link of links) {
                link.style.color = 'white'; // Manter os links brancos
            }
        } else {
            body.style.backgroundColor = 'whitesmoke';
            body.style.color = 'black';       
            art.style.backgroundColor = 'whitesmoke';
            art.style.color = 'black';
            m.style.backgroundColor = 'whitesmoke';
            footer.style.backgroundColor = 'black';
            footer.style.color = 'white '
            link_f.style.color = 'white'; 
            for (let link of links) {
                link.style.color = 'black';
                link.style.textDecoration = 'underline'; 
            }
        }
    });
    dm.addEventListener('mouseenter', function(){
        dm.style.cursor = 'pointer'
    })
});

