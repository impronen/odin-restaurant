import './styles/style.css';
import {headerGenerator, buttonGenerator, footerGenerator} from './pages/menuCreation';
import {mainPageGenerator, messageGenerator} from './pages/mainPage'

let content = document.getElementById('content');
content.appendChild(headerGenerator());
buttonGenerator();
content.appendChild(mainPageGenerator());
messageGenerator();
footerGenerator();
