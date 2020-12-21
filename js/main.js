/////////////////////////SLIDER////////////////

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length){
    slideIndex = 1;
  }

  if (n < 1){
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/////////////////////////SLIDER END////////////////


//////////////////////animation/////////////////////
let myDot = document.getElementById('blue-dot');

window.addEventListener('scroll', (event)=>{
  let scrolled = window.scrollY;
  console.log(Math.ceil(scrolled) );

  if (scrolled > 700 && scrolled < 780){
    myDot.classList.add('distance-16');
    myDot.classList.remove('distance-22')
  }

  if (scrolled > 780 && scrolled < 940){
    myDot.classList.add('distance-22');
    myDot.classList.remove('distance-16');
    myDot.classList.remove('distance-28')
  }

  if (scrolled > 940 && scrolled < 1020){
    myDot.classList.add('distance-28');
    myDot.classList.remove('distance-22');
    myDot.classList.remove('distance-34')
  }

  if (scrolled > 1020 && scrolled < 1100){
    myDot.classList.add('distance-34');
    myDot.classList.remove('distance-28');
    myDot.classList.remove('distance-40')
  }

  if (scrolled > 1100 && scrolled < 1180){
    myDot.classList.add('distance-40');
    myDot.classList.remove('distance-34');
    myDot.classList.remove('distance-60')
  }

  if (scrolled > 1480 && scrolled < 1560){
    myDot.classList.add('distance-60');
    myDot.classList.remove('distance-40');
    myDot.classList.remove('distance-66')
  }

  if (scrolled > 1560 && scrolled < 1640){
    myDot.classList.add('distance-66');
    myDot.classList.remove('distance-60');
    myDot.classList.remove('distance-72')
  }

  if (scrolled > 1640 && scrolled < 1720){
    myDot.classList.add('distance-72');
    myDot.classList.remove('distance-66');
    myDot.classList.remove('distance-78')
  }

  if (scrolled > 1720 && scrolled < 1800){
    myDot.classList.add('distance-78');
    myDot.classList.remove('distance-72');
    myDot.classList.remove('distance-84')
  }

  if (scrolled > 1800 && scrolled < 1880){
    myDot.classList.add('distance-84');
    myDot.classList.remove('distance-78');
    myDot.classList.remove('distance-90')
  }

  if (scrolled > 1980 && scrolled < 2100){
    myDot.classList.add('distance-90');
    myDot.classList.remove('distance-84')
  }
});

//////////////////////animation end/////////////////////

///////////////////googleMaps///////////////////////////


//////////////////////buttons/////////////////////////
let one = document.querySelector('.one');
let twoo = document.querySelector('.twoo');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let arrBtn = [one, twoo, three, four];


//////////////////////blocks//////////////////////////////////
let losAngeles = document.querySelector('#mapLosAngeles');
let newYork = document.querySelector('#mapNewYork');
let boston = document.querySelector('#mapBoston');
let detroit = document.querySelector('#mapDetroit');
let arrMaps = [losAngeles, newYork, boston, detroit];

////////////////////////iiiiiiiiiiiiiiiiiiiiiiii///////////
let greenLos = document.querySelector(".iclassLos");
let greenNew = document.querySelector(".iclassNew");
let greenBos = document.querySelector(".iclassBos");
let greenDetr = document.querySelector(".iclassDetr");
let arrI = [greenLos, greenNew, greenBos, greenDetr];

///////////////////////////special-wrap-map-and-right-window//////////////////////////////////////

let wrap1 = document.querySelector('.special-wrap-map-and-right-window1');
let wrap2 = document.querySelector('.special-wrap-map-and-right-window2');
let wrap3 = document.querySelector('.special-wrap-map-and-right-window3');
let wrap4 = document.querySelector('.special-wrap-map-and-right-window4');
let arrWrap = [wrap1, wrap2, wrap3, wrap4];

function remove() {
  arrMaps.map(value => {
      value.classList.remove('displayBlock');
  });
  settBtnMaps();
  settI();
  wrap();
}

function settBtnMaps() {
  arrBtn.map(value => {
    value.classList.remove('set-btn-maps')
  })
}

function settI() {
  arrI.map(value => {
    value.classList.remove('settin-i');
  })
}

function wrap() {
  arrWrap.map(value => {
    value.classList.remove('displayBlock')
  })
}


function losA(){
  one.addEventListener('click', ()=>{
    remove();
    losAngeles.classList.add('displayBlock');
    one.classList.add('set-btn-maps');
    greenLos.classList.add('settin-i');
    wrap1.classList.add('displayBlock');
  })
}
losA();

function newY(){
  twoo.addEventListener('click', ()=>{
    remove();
    newYork.classList.add('displayBlock');
    twoo.classList.add('set-btn-maps');
    greenNew.classList.add('settin-i');
    wrap2.classList.add('displayBlock');
  })
}
newY();

function bost(){
  three.addEventListener('click', ()=>{
    remove();
    boston.classList.add('displayBlock');
    three.classList.add('set-btn-maps');
    greenBos.classList.add('settin-i');
    wrap3.classList.add('displayBlock');
  })
}
bost();

function detr(){
  four.addEventListener('click', ()=>{
    remove();
    detroit.classList.add('displayBlock');
    four.classList.add('set-btn-maps');
    greenDetr.classList.add('settin-i');
    wrap4.classList.add('displayBlock');
  })
}
detr();


function initMap() {
  let opt1 = {
    center: {lat: 34.0130286822208,
             lng: -118.26634310241322
    },
    zoom: 10
  };

  let opt2 = {
    center: {lat: 40.713603873921045,
             lng: -74.0062074892901
    },
    zoom: 10
  };

  let opt3 = {
    center: {lat: 42.35972769690495,
             lng: -71.05841599766212
    },
    zoom: 10
  };

  let opt4 = {
    center: {lat: 42.34178825381858,
             lng: -83.05231574655049
    },
    zoom: 10
  };

  let map1 = new google.maps.Map(document.getElementById('mapLosAngeles'), opt1);
  let map2 = new google.maps.Map(document.getElementById('mapNewYork'), opt2);
  let map3 = new google.maps.Map(document.getElementById('mapBoston'), opt3);
  let map4 = new google.maps.Map(document.getElementById('mapDetroit'), opt4);
  // каже на котре місце буде загружати
}

///////////////////googleMaps end///////////////////////////


////////////////Burger/////////////////
let btn = document.querySelector('.my-menu-btn');
let bars = document.querySelector('.bars');
let close = document.querySelector('.close');
let ul = document.querySelector('.settings-ul');


btn.addEventListener('click', ()=>{
  if (bars.classList.contains('displayBlock')){
    bars.classList.remove('displayBlock');
    close.classList.add('displayBlock');

    ul.classList.add('displayBlock', 'animation');
  }else if (close.classList.contains('displayBlock')){
    close.classList.remove('displayBlock');
    bars.classList.add('displayBlock');
    ul.classList.remove('displayBlock', 'animation');

  }
});
////////////////Burger end/////////////////
