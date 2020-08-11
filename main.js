'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
    navbarMenu.classList.remove('menu-on');
});

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', () => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    scrollIntoView(link);
});

const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
}

// fading home contetns when scrolling down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1-window.scrollY / homeHeight;
});

const arrowBtn = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2){
        arrowBtn.classList.add('visible');
    } else {
        arrowBtn.classList.remove('visible');
    }
});

arrowBtn.addEventListener('click', () => {
    scrollIntoView('#home');
});

// work filtering, have four categories which are all, front-end, back-end, mobile
// animation effect when uploading filtered contents, scaling to 1 and bottom to top
const categories = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
categories.addEventListener('click', () => {
    const target = event.target.dataset.category;
    if(target == null){
        return;
    }

    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const select = event.target.nodeName === 'BUTTON' ? event.target : e.target.parentNode;
    select.classList.add('selected');

    projectContainer.classList.add('anim-out');
    setTimeout(() => {
        for (let project of projects){
            if(target == "*" || project.dataset.category == target){
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        }
        projectContainer.classList.remove('anim-out');
    }, 300);
});

const toggleBtn = document.querySelector('.navbar__toggle-btn');
toggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('menu-on');
});
