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

gamb.addEventListener('click', function (e) {
    e.preventDefault(e);
    burger.classList.add("open");
});



darkburg.addEventListener('click', function (e){
    e.preventDefault(e);
    burger.classList.remove("open");
});

//////////////// Burger menu list

const menu1 = document.querySelector('#menu1');
const menu_item1 = document.querySelector(".burger-menu__sub-list");

menu1.addEventListener('click', function (){
    menu_item1.classList.toggle("on1");
});

const menu2 = document.querySelector('#menu1-1');
const menu_item2 = document.querySelector(".burger-menu__sub-list--yabl");

menu2.addEventListener('click', function (){
    menu_item2.classList.toggle("on2");
});

const menu3 = document.querySelector('#menu2');
const menu_item3 = document.querySelector(".burger-list--howbuy");

menu3.addEventListener('click', function (){
    menu_item3.classList.toggle("on3");
});