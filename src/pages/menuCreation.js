

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

    return header;
}


function buttonGenerator() {
    let menuVar = document.getElementById('headingMenu')
    let homeBtn = document.createElement('button')
    homeBtn.innerHTML = "Home"
    homeBtn.classList.add('headingButton')
    menuVar.appendChild(homeBtn)
    
    const menuBtn = document.createElement('button')
    menuBtn.innerHTML = "Menu"
    menuBtn.classList.add('headingButton')
    menuVar.appendChild(menuBtn)

    const contactBtn = document.createElement('button')
    contactBtn.innerHTML = "Contact"
    contactBtn.classList.add('headingButton')
    menuVar.appendChild(contactBtn) 
}

function footerGenerator() {
    let content = document.getElementById('content')
    const footer = document.createElement('div')
    footer.classList.add('footer')
    footer.innerHTML = "antero 2023"
    content.appendChild(footer)
}

export {
    headerGenerator,
    buttonGenerator,
    footerGenerator
};