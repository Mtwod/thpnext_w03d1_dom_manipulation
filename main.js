const homeContent = document.getElementById('home').innerHTML;

const menuContent = document.getElementById('menuContent').innerHTML;


const clickHome = (e) => {
  e.preventDefault();
  const homeLink = document.getElementById('homeLink');
  const menuLink = document.getElementById('menuLink');
  const homeElement = document.getElementById('home');
  if (homeElement === null) {
    menuLink.style = '';
    homeLink.style.color = 'red';
    homeLink.style.border = '3px solid red';
    document.getElementById('content').innerHTML = `<div id='home'>${homeContent}</div>`;
  }
}


const clickMenu = (e) => {
  e.preventDefault();
  const homeLink = document.getElementById('homeLink');
  const menuLink = document.getElementById('menuLink');
  const menuElement = document.getElementById('menu');
  if (menuElement === null) {
    homeLink.style = '';
    menuLink.style.color = 'red';
    menuLink.style.border = '3px solid red';
    document.getElementById('content').innerHTML = menuContent;
  }
}

const homeLink = document.getElementById('homeLink');
const menuLink = document.getElementById('menuLink');

homeLink.addEventListener('click', clickHome);
menuLink.addEventListener('click', clickMenu);