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


{/* <div class="galery__item galery__item--2"><img src="./img/IMG__2.png" alt="" class="galery__img">
                        </div>
                        <div class="galery__item galery__item--3"><img src="./img/IMG__3.png" alt="" class="galery__img">
                        </div>
                        <div class="galery__item galery__item--4"><img src="./img/IMG__4.png" alt="" class="galery__img">
                        </div> */}