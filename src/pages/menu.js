import {pageScrubber} from '../functions/reusableFunctions';
import {menu} from '../data/menuData'


function menuGenerator() {
    pageScrubber()
    let content = document.getElementById('mainContent')

    let menuHeading = document.createElement('div')
    menuHeading.classList.add('menuHeading')
    menuHeading.setAttribute('id', 'menuHeading')
    menuHeading.innerHTML = '<h2>Menu</h2>'
    content.appendChild(menuHeading)


    let menuContainer = document.createElement('div')
    menuContainer.classList.add('menuContainer')
    menuContainer.setAttribute('id', 'menuContainer')
    content.appendChild(menuContainer)



}

function menuPopulator() {
let menuContainer = document.getElementById('menuContainer')
    menu.menuItems.forEach((menuObject) => {
        let menuCard = document.createElement('div')
        menuCard.classList.add('menucard')
        menuCard.innerHTML = `<h4>${menuObject.Name}</h4><br><h3>${menuObject.price}</h3>`
        menuContainer.appendChild(menuCard)
    })
}


export {
    menuGenerator,
    menuPopulator
}