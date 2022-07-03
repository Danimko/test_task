////////////////////// Tabs
const button1 = document.querySelector('.galery__tab--1');
const button2 = document.querySelector('.galery__tab--2');
const button3 = document.querySelector('.galery__tab--3');
const button4 = document.querySelector('.galery__tab--4');
const tab1 = document.querySelector('.galery__text--1');
const tab2 = document.querySelector('.galery__text--2');
const tab3 = document.querySelector('.galery__text--3');
const tab4 = document.querySelector('.galery__text--4');



button1.addEventListener('click', function () {

    tab2.classList.add('galery__text--none');
    tab3.classList.add('galery__text--none');
    tab4.classList.add('galery__text--none');    
    tab1.classList.remove('galery__text--none');    

    
});

button2.addEventListener('click', function () {

    tab1.classList.add('galery__text--none');
    tab3.classList.add('galery__text--none');
    tab4.classList.add('galery__text--none');    
    tab2.classList.remove('galery__text--none');    

    
});

button3.addEventListener('click', function () {

    tab1.classList.add('galery__text--none');
    tab2.classList.add('galery__text--none');
    tab4.classList.add('galery__text--none');    
    tab3.classList.remove('galery__text--none');    

    
});

button4.addEventListener('click', function () {

    tab1.classList.add('galery__text--none');
    tab3.classList.add('galery__text--none');
    tab2.classList.add('galery__text--none');    
    tab4.classList.remove('galery__text--none');    

    
});

////////////////// Burger menu open
const gamb = document.querySelector('#gamb');
const burger = document.querySelector('#burg');
const darkburg = document.querySelector('#gamb--dark');
const body = document.querySelector('body');
const hidden_hero = document.querySelector('.hero');
const hidden_about = document.querySelector('.about');


gamb.addEventListener('click', function (e) {
    e.preventDefault(e);
    burger.classList.add("open");
    body.classList.add("scroll__off");
    hidden_hero.classList.add("hidden")
    hidden_about.classList.add("hidden")

    
});



darkburg.addEventListener('click', function (e){
    e.preventDefault(e);
    burger.classList.remove("open");
    body.classList.remove("scroll__off");
    hidden_hero.classList.remove("hidden")
    hidden_about.classList.remove("hidden")
});

//////////////// Burger menu list

const menu1 = document.querySelector('#menu1');
const menu_item1 = document.querySelector(".burger-menu__sub-list");
const row1 = document.querySelector("#rowdown1");


menu1.addEventListener('click', function (){
    menu_item1.classList.toggle("on1");
    row1.classList.toggle("rotate");
});

const menu2 = document.querySelector('#menu1-1');
const menu_item2 = document.querySelector(".burger-menu__sub-list--yabl");
const row2 = document.querySelector("#rowdown2");

menu2.addEventListener('click', function (){
    menu_item2.classList.toggle("on2");
    row2.classList.toggle("rotate");
});

const menu3 = document.querySelector('#menu2');
const menu_item3 = document.querySelector(".burger-list--howbuy");
const row3 = document.querySelector("#rowdown3");

menu3.addEventListener('click', function (){
    menu_item3.classList.toggle("on3");
    row3.classList.toggle("rotate");
});