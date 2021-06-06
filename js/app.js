// Magnefic Popup


$(document).ready(function() {
    $('.video__popup').magnificPopup({type:'iframe'});
  });


  // CounterUP

  $('.counter__span').counterUp({
    delay: 20,
    time: 1000
});

// offset menu


let overlay = document.querySelector('.offset__overlay')
let trigger = document.querySelector('.nav__trigger')
let offset = document.querySelector('.offset__wrap')
let logo = document.querySelector('.nav__logo')

 trigger.addEventListener('click' , function(){
  overlay.classList.toggle('active');
  navbar.classList.toggle('bg-transparent');
  offset.classList.toggle('active');
  logo.classList.toggle('active');
  this.classList.toggle('active');
 });

 overlay.addEventListener('click', function(){
  offset.classList.remove('active');
  logo.classList.toggle('active');
  navbar.classList.toggle('bg-transparent');
  trigger.classList.remove('active');
  this.classList.remove('active');
 });


 let navbar = document.querySelector('.nav');

 window.addEventListener('scroll' , function(){
  let number = Math.floor(pageYOffset);

  if(number > 80){
    navbar.classList.add('active')
  }else{
    navbar.classList.remove('active')
  }
 
 });
