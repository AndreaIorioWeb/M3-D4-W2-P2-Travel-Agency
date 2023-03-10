function clickBottone() {
    for (let section of document.querySelectorAll('section')) {
        section.children[0].classList.add('collapse');
        section.children[0].classList.add('show');
        section.innerHTML = `
        <button class="bottone btn btn-outline-light toggle-btn" data-bs-target="#${section.id} > div"  data-bs-toggle="collapse">ON/OFF</button>` + section.innerHTML
        
    }
}

function footer() {
    let numeriViaggi = document.getElementsByClassName('card').length -7
    let span = document.createElement('span');
    span.classList.add('text-left');
    span.innerHTML = "Questa pagina contiene " + numeriViaggi + " Viaggi";
    document.getElementById('jumbotrons').appendChild(span)[6]
}

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

// carousel-inner
function badge() {
    let span = document.createElement('span');
    span.classList.add('badge')
    span.innerHTML = "Hot";
    document.getElementById('badge').appendChild(span)[5]
}


window.onload = function () {
    clickBottone()
    footer()
    badge()
}