// toggle shopping cart show/hide onclick 
const cartIcon = document.querySelector('.shopping-cart-icon');
const shoppingCart = document.querySelector('.shopping-cart');

cartIcon.addEventListener('click', function() {
  shoppingCart.classList.toggle('show');
})


// increment and decrement buttons 
const plus = document.querySelector('.cart-toggle-plus');
const minus = document.querySelector('.cart-toggle-minus');
const displayValue = document.querySelector('.cart-toggle-value');
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
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', function() {
  navList.classList.add('nav-open-nav-list')
  document.body.classList.add('nav-open-body')
})

closeBtn.addEventListener('click', function() {
  navList.classList.remove('nav-open-nav-list')
  document.body.classList.remove('nav-open-body')
})


// Slideshow Desktop 
let thumbnailList = document.querySelectorAll('.slideshow-thumbnail');
let slideshowImages = document.querySelectorAll('.slideshow-product');

thumbnailList.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', function() {
    // add active class to thumnbail
    thumbnailList.forEach(thumb => thumb.classList.remove('active')); 
    this.classList.add('active');

    // show corresponding slideshow image 
    slideshowImages.forEach(img => img.classList.remove('show'));
    slideshowImages[index].classList.add('show');
  })
})




/* To Do 
  shopping cart show/display onclick XX 
  button increment and decrement to change the number value. XX 
  mobile menu show/hide (or maybe I want to do transform instead). XX

  slideshow DESKTOP: 
    - remove active class from all thumnbnails + add active class to currently selected thumbnail XX
    - switch big picture on click of thumbnail. XX
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

/* Notes: 
How to do img slider by changing the img url instead of adding 'show' classes to the img. 
let slideshowImageUrls = [
  './images/image-product-1.jpg', 
  './images/image-product-2.jpg', 
  './images/image-product-3.jpg', 
  './images/image-product-4.jpg', 
]

inside the thumbnail event listener add the following (replacing the add/show slideshow image code): 
  slideshowImage[0].src = slideshowImageUrls[index];
 
*/ 