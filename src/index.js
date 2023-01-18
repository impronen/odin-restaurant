import './styles/style.css';
import {headerGenerator, buttonGenerator, footerGenerator} from './pages/menuCreation';
import {mainPageGenerator, messageGenerator} from './pages/mainPage'
import {menuGenerator, menuPopulator} from './pages/menu'
import {menu} from './data/menuData'

let content = document.getElementById('content');

//Generate mainpage on load
content.appendChild(headerGenerator());
buttonGenerator();
content.appendChild(mainPageGenerator());
messageGenerator();
footerGenerator();


//Event listeners
const homeBtn = document.getElementById('homeBtn')
homeBtn.addEventListener('click', function(){
    messageGenerator()
})

const menuBtn = document.getElementById('menuBtn')
menuBtn.addEventListener('click', function(){
    menuGenerator()
    menuPopulator()
})

const contactBtn = document.getElementById('contactBtn')
contactBtn.addEventListener('click', function(){
    console.log(menu)
})