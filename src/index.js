import './styles/style.css';
import { headerGenerator, buttonGenerator, footerGenerator } from './pages/menuCreation';
import { mainPageGenerator, messageGenerator } from './pages/mainPage';
import { menuGenerator, menuPopulator } from './pages/menu';
import { contactPageGenerator } from './pages/contact';
import { menu } from './data/menuData';

const content = document.getElementById('content');

// Generate mainpage on load
content.appendChild(headerGenerator());
buttonGenerator();
content.appendChild(mainPageGenerator());
messageGenerator();
footerGenerator();

// Event listeners
const homeBtn = document.getElementById('homeBtn');
homeBtn.addEventListener('click', () => {
  messageGenerator();
});

const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', () => {
  menuGenerator();
  menuPopulator();
});

const contactBtn = document.getElementById('contactBtn');
contactBtn.addEventListener('click', () => {
  contactPageGenerator();
});
