function headerGenerator() {
  const header = document.createElement('div');
  header.classList.add('header');

  const headingLogo = document.createElement('div');
  headingLogo.classList.add('headingLogo');
  headingLogo.setAttribute('id', 'buttonContainer');
  headingLogo.innerHTML = '<h1>The Jolly Badger</h1>';
  header.appendChild(headingLogo);

  const headingMenu = document.createElement('div');
  headingMenu.classList.add('headingMenu');
  headingMenu.setAttribute('id', 'headingMenu');
  header.appendChild(headingMenu);

  return header;
}

function buttonGenerator() {
  const menuVar = document.getElementById('headingMenu');

  const homeBtn = document.createElement('button');
  homeBtn.innerHTML = 'Home';
  homeBtn.classList.add('headingButton');
  homeBtn.setAttribute('id', 'homeBtn');
  menuVar.appendChild(homeBtn);
  /*     homeBtn.addEventListener('click', function(){
        console.log("Working?")
    }) */

  const menuBtn = document.createElement('button');
  menuBtn.innerHTML = 'Menu';
  menuBtn.classList.add('headingButton');
  menuBtn.setAttribute('id', 'menuBtn');
  menuVar.appendChild(menuBtn);

  const contactBtn = document.createElement('button');
  contactBtn.innerHTML = 'Contact';
  contactBtn.classList.add('headingButton');
  contactBtn.setAttribute('id', 'contactBtn');
  menuVar.appendChild(contactBtn);
}

function footerGenerator() {
  const content = document.getElementById('content');
  const footer = document.createElement('div');
  footer.classList.add('footer');
  footer.innerHTML = 'antero 2023';
  content.appendChild(footer);
}

export {
  headerGenerator,
  buttonGenerator,
  footerGenerator,
};
