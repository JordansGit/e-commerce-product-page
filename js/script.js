// toggle shopping cart show/hide onclick 
let cartIcon = document.querySelector('.shopping-cart-icon');
let shoppingCart = document.querySelector('.shopping-cart');

cartIcon.addEventListener('click', function() {
  shoppingCart.classList.toggle('show');
})


// increment and decrement buttons 
let plus = document.querySelector('.cart-toggle-plus');
let minus = document.querySelector('.cart-toggle-minus');
let displayValue = document.querySelector('.cart-toggle-value');
let value = 0;

plus.addEventListener('click', function() {
  value++
  displayValue.innerText = value;
})

minus.addEventListener('click', function() {
  if (value > 0) {
    value--
  }
  displayValue.innerText = value;
})


// Mobile menu 
let mobileMenu = document.querySelector('.mobile-menu');
let closeBtn = document.querySelector('.close-btn');
let navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', function() {
  navList.classList.add('nav-open-nav-list')
  document.body.classList.add('nav-open-body')
})

closeBtn.addEventListener('click', function() {
  navList.classList.remove('nav-open-nav-list')
  document.body.classList.remove('nav-open-body')
})








/* To Do 
  shopping cart show/display onclick XX 
  button increment and decrement to change the number value. XX 
  mobile menu show/hide (or maybe I want to do transform instead). XX

  slideshow DESKTOP: 
    - remove active class from all thumnbnails + add active class to currently selected thumbnail 
    - switch big picture on click of thumbnail. 
  slideshow MOBILE: 
    - prev button makes slideshow display prev img. 
    - next button makes slideshow display next img. 
  slideshow modal: 
    - popup modal for big image. 
    - same functionality as desktop slideshow. 

  add to cart button: 
    adds current number of selected item to cart. 
    updates cart-icon number 
    updates quantity + total cost in cart 

  shopping cart delete button: 
    delete's shopping cart. 

  maybe like react: 
    if shopping cart number = 1 or more, display (the shoes),
    if it's empty (or 0), display the empty text html code instead. 
    -> maybe leave this till last. 

*/