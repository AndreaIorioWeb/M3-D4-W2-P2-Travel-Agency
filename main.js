// BOTTONI ON/OFF
function clickBottone() {
    for (let section of document.querySelectorAll('section')) {
        section.children[0].classList.add('collapse');
        section.children[0].classList.add('show');
        section.innerHTML = `
        <button class="bottone btn btn-outline-light toggle-btn" data-bs-target="#${section.id} > div" data-bs-toggle="collapse">ON/OFF</button>` + section.innerHTML;
    }
}

function footer() {
    let numeriViaggi = document.getElementsByClassName('card').length -7
    let span = document.createElement('span');
    span.classList.add('text-left');
    span.innerHTML = "Questa pagina contiene " + numeriViaggi + " Viaggi";
    document.getElementById('jumbotrons').appendChild(span)[6]
}





function offerta() {
    let numeriCard =document.querySelectorAll('#offerte .hot')
    for (let i = 0; i < numeriCard.length; i++) {
        let badge = numeriCard[i]
        let span = `<span style=" color:black;"> HOT </span>`
        badge.innerHTML += span 
        
    }
}

// CANCELLA LE CARD
function invisibile() {
    let card = document.querySelectorAll('.card')
    for (let i = 0; i < card.length; i++) {
        let rimuviCard = card[i];
        rimuviCard.remove()
    }
}

window.onload = function () {
    clickBottone()
    footer()
    offerta()
    
}