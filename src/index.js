import './styles/style.css';

function testFunction() {
    const element = document.createElement('div');
    element.innerHTML = "Hey so does this work"
    element.classList.add('test')
    return element;

}


document.body.appendChild(testFunction());