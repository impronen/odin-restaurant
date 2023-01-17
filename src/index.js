import './styles/style.css';

function headerGenerator() {
    const header = document.createElement('div')
    header.classList.add('header')

    const headingLogo = document.createElement('div')
    headingLogo.classList.add('headingLogo')
    headingLogo.setAttribute('id', 'buttonContainer')
    headingLogo.innerHTML = `<h1>The Jolly Badger</h1>`
    header.appendChild(headingLogo)

    const headingMenu = document.createElement('div')
    headingMenu.classList.add('headingMenu')
    headingMenu.setAttribute('id', 'headingMenu')
    header.appendChild(headingMenu)

    console.log(headingMenu)

    return header;
}

function buttonGenerator() {
    
    let homeBtn = document.createElement('button')
    homeBtn.innerHTML = "Hello!"
    homeBtn.classList.add('headingButton')
    menuVar.appendChild('homeBtn')
    
    const menuBtn = document.createElement('button')
    menuBtn.classList.add('headingButton')
    menuVar.appendChild('menuBtn')

    const contactBtn = document.createElement('button')
    contactBtn.classList.add('headingButton')
    menuVar.appendChild('contactBtn') 
}


let content = document.getElementById('content')
content.appendChild(headerGenerator());

let menuVar = document.getElementById('buttonContainer')
let headingMenu = document.getElementById('headingMenu')

headingMenu.appendChild(buttonGenerator())