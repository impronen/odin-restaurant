import './styles/style.css';
import {headerGenerator, buttonGenerator} from './pages/menuCreation';
import {mainPageGenerator} from './pages/mainPage'

let content = document.getElementById('content');
content.appendChild(headerGenerator());
buttonGenerator();
content.appendChild(mainPageGenerator())