window.onscroll = () => {
    const header = document.querySelector('#modify-header');
    if(this.scrollY <= 30) header.className = '';
    else header.className = 'modify-header';
};

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', ()=>{

        //toggle
        nav.classList.toggle('nav-active');

        //burger anim
        burger.classList.toggle('toggle');

        //animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
            }
        });
    });
}

navSlide();

var recSect = document.getElementById("rec");
var newSect = document.getElementById("new");
var popSect = document.getElementById("pop");
var recBtn = document.getElementById("rec-btn");
var newBtn = document.getElementById("new-btn");
var popBtn = document.getElementById("pop-btn");

function openREC(){
    recSect.style.transform = "translateX(0%)";
    newSect.style.transform = "translateX(0%)";
    popSect.style.transform = "translateX(0%)";

    recBtn.style.color = "black";
    newBtn.style.color = "rgb(85, 84, 84)";
    popBtn.style.color = "rgb(85, 84, 84)";

    recBtn.style.borderBottom = ".2em solid black";
    newBtn.style.borderBottom = ".2em solid transparent";
    popBtn.style.borderBottom = ".2em solid transparent";
};

function openNEW(){
    recSect.style.transform = "translateX(-100%)";
    newSect.style.transform = "translateX(-100%)";
    popSect.style.transform = "translateX(-100%)";

    recBtn.style.color = "rgb(85, 84, 84)";
    newBtn.style.color = "black";
    popBtn.style.color = "rgb(85, 84, 84)";

    recBtn.style.borderBottom = ".2em solid transparent";
    newBtn.style.borderBottom = ".2em solid black";
    popBtn.style.borderBottom = ".2em solid transparent";
};

function openPOP(){
    recSect.style.transform = "translateX(-100%)";
    newSect.style.transform = "translateX(-200%)";
    popSect.style.transform = "translateX(-200%)";

    recBtn.style.color = "rgb(85, 84, 84)";
    newBtn.style.color = "rgb(85, 84, 84)";
    popBtn.style.color = "black";

    recBtn.style.borderBottom = ".2em solid transparent";
    newBtn.style.borderBottom = ".2em solid transparent";
    popBtn.style.borderBottom = ".2em solid black";
};