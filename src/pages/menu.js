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

    let onTap = document.createElement('div')
    onTap.classList.add('onTap')
    onTap.innerHTML = `<p>Enjoy classic British cuisine while sipping some watery ale.</p>`
    menuHeading.appendChild(onTap)

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
        menuContainer.appendChild(menuCard)
        let dishName = document.createElement('div')
        dishName.innerHTML = `<h4>${menuObject.Name}</h4>`
        menuCard.appendChild(dishName)
        let dishDescription = document.createElement('div')
        dishDescription.classList.add('dishDescription')
        dishDescription.innerHTML = `<p>${menuObject.description}</p>`
        menuCard.appendChild(dishDescription)
        let dishPrice = document.createElement('div')
        dishPrice.innerHTML = `<br><h3>${menuObject.price}</h3>`
        menuCard.appendChild(dishPrice)
    })
}


export {
    menuGenerator,
    menuPopulator
}