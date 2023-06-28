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
const thumbnailList = document.querySelectorAll('.slideshow-thumbnail');
const slideshowImages = document.querySelectorAll('.slideshow-product');
let currentSlide = 0;

//function
let showImage = function() {
  slideshowImages.forEach(img => img.classList.remove('show'));
  slideshowImages[currentSlide].classList.add('show');
}

//event listener 
thumbnailList.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', function() {
    // add active class to thumnbail
    thumbnailList.forEach(thumb => thumb.classList.remove('active')); 
    this.classList.add('active');

    // show corresponding slideshow image 
    currentSlide = index;
    showImage();
  })
})


// Slideshow Mobile 
const next = document.querySelector('.slideshow-next');
const prev = document.querySelector('.slideshow-prev');

next.addEventListener('click', function() {
  currentSlide++;
  if (currentSlide > 3) {
    currentSlide = 0;
  }
  showImage()
})

prev.addEventListener('click', function() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = 3;
  }
  showImage()
})



/* To Do 
  shopping cart show/display onclick XX 
  button increment and decrement to change the number value. XX 
  mobile menu show/hide (or maybe I want to do transform instead). XX

  slideshow DESKTOP: 
    - remove active class from all thumnbnails + add active class to currently selected thumbnail XX
    - switch big picture on click of thumbnail. XX
  slideshow MOBILE: 
    - prev button makes slideshow display prev img. XX
    - next button makes slideshow display next img. XX
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
 
-----------------------
the thumbnail doesn't update the currently selected main image on page load. 
I can explore this later. either: 
  reset image current slide to 0 when page goes from 819px or below to 820+px. 
  or change thumbnail code to update value. 
*/ 