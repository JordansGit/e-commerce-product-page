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
const cartIconCount = document.querySelector('.shopping-cart-icon-count');
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
function showImage() {
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


// Add To Cart Button 
const addToBtn = document.querySelector('.cart-add-to-btn');
const cartItemQuantityDisplay = document.querySelector('.cart-item-quantity');
const totalCostDisplay = document.querySelector('.cart-total-cost');
let totalCost = Number(totalCostDisplay.innerText); // we can change this to 0 once we update 
let itemQuantity = Number(cartIconCount.innerText);
const cartBodyDisplay = document.querySelector('.cart-body');
const cartEmptyDisplay = document.querySelector('.cart-empty');
let isCartEmpty = true;

// function to calculate total cost 
function calcTotalCost() {
  let itemCost = 125;
  totalCost = itemCost * itemQuantity;

  totalCostDisplay.innerText = `\$${totalCost}.00`
  if (itemQuantity > 0) {
    isCartEmpty = false;
  }
}

// function to display empty code if item quanitiy = 0, or display cart-body if display >= 1;. 
function displayCart() {
  if (itemQuantity === 0) {
    cartBodyDisplay.classList.add('hide');
    cartEmptyDisplay.classList.remove('hide');  
  } else {
    cartBodyDisplay.classList.remove('hide');
    cartEmptyDisplay.classList.add('hide');  
  }
}

function resetToggleValue() {
  value = 0;
  displayValue.innerText = value;
}

addToBtn.addEventListener('click', function() {
  itemQuantity += value;
  cartIconCount.innerText = itemQuantity;

  cartItemQuantityDisplay.innerText = itemQuantity;

  if (isCartEmpty) {
    console.log("displayCart is running");
    displayCart();
  }
  calcTotalCost();

  // if cart show = false, show class. 
  if (!shoppingCart.classList.contains('show')) {
    shoppingCart.classList.add('show');
  }
  
  resetToggleValue()
})


// Cart Delete 
const cartDelete = document.querySelector('.cart-delete');

cartDelete.addEventListener('click', function() {
  // Reset values
  itemQuantity = 0;
  cartIconCount.innerText = itemQuantity;
  cartItemQuantityDisplay.innerText = itemQuantity;
  calcTotalCost();

  // Display empty html 
  displayCart();

  isCartEmpty = true;
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

  add to cart button: 
    adds current number of selected item to cart. XX
    updates cart-icon number XX
    updates quantity + total cost in cart XX

  shopping cart delete button: XX
    reset shopping cart values. XX
    display the empty html code block XX

  add to cart: 
    if shopping cart = 0, display empty html code block  XX 
    else display the other code block. XX

  slideshow modal: 
    - popup modal for big image. 
    - same functionality as desktop slideshow. 

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

-----------------------
the isCartEmpty function makes it so the function doesn't keep running if the cart is not empty. 
if the cart already has 1 item in it and we add another, we don't need to run the if(cart ===0) {display empty} function, every time we click the addToBtn. 
for performance.
it'll probably make the code more harder to read when I try to re-read it back. 
*/ 