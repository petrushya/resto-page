import './style.css';
import { homepage } from './home.js';
import { menupage } from './menu.js';
import { aboutpage } from './about.js';

const body = document.querySelector('body');
const hWrapper = document.createElement('div');
const header = document.createElement('header');
const nav = document.createElement('nav');
const mainContent = document.createElement('div');
const footer = document.createElement('footer');
const para = document.createElement('p');
const fWrapper = document.createElement('div');
const homeBtn = document.createElement('button');
const menuBtn = document.createElement('button');
const aboutBtn = document.createElement('button');

mainContent.appendChild(homepage());
const pageTitle = document.querySelector('head title');
pageTitle.textContent = `HOME - TIM`;

hWrapper.className = 'wrapper';
fWrapper.className = 'wrapper';
mainContent.id = 'content';
homeBtn.setAttribute('type', 'button');
homeBtn.setAttribute('name', 'home');
homeBtn.className = 'color';
homeBtn.textContent = homeBtn.name.toUpperCase();
menuBtn.setAttribute('type', 'button');
menuBtn.setAttribute('name', 'menu');
menuBtn.textContent = menuBtn.name.toUpperCase();
aboutBtn.setAttribute('type', 'button');
aboutBtn.setAttribute('name', 'about');
aboutBtn.textContent = aboutBtn.name.toUpperCase();
para.innerHTML = '&trade; Mirage&Freak';

nav.appendChild(homeBtn);
nav.appendChild(menuBtn);
nav.appendChild(aboutBtn);
header.appendChild(nav);
hWrapper.appendChild(header);
footer.appendChild(para);
fWrapper.appendChild(footer);
body.appendChild(hWrapper);
body.appendChild(mainContent);
body.appendChild(fWrapper);

const buttons = document.querySelectorAll('button');
for(let i = 0; i < buttons.length; i++){
  buttons[i].onclick = () => {
    buttons.forEach(item => item.removeAttribute('class'));
    buttons[i].classList = 'color';
    const pageTitle = document.querySelector('head title');
    pageTitle.textContent = `${buttons[i].name.toUpperCase()} - TIM`;
    mainContent.textContent = '';
    if(buttons[i].name === 'home') mainContent.appendChild(homepage());
    if(buttons[i].name === 'menu') mainContent.appendChild(menupage());
    if(buttons[i].name === 'about') mainContent.appendChild(aboutpage());
  }
};