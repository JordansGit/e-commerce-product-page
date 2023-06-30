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


// Slideshow for Desktop, Mobile & Modal Slideshow 
const ogThumbnailList = document.querySelectorAll('.og-slideshow-thumbnail');
const ogSlideshowImages = document.querySelectorAll('.og-slideshow-product');
const modal = document.querySelector('.modal');
const modalSlideshowImages = document.querySelectorAll('.modal-slideshow-product');
const modalThumbnailList = document.querySelectorAll('.modal-slideshow-thumbnail');
const thumbnailGroup = [ogThumbnailList, modalThumbnailList];

const modalClose = document.querySelector('.modal-close');
const next = document.querySelectorAll('.slideshow-next');
const prev = document.querySelectorAll('.slideshow-prev');

let currentSlide = 0;

// function to show big image. 
function showImage(slideshowImages) {
  slideshowImages.forEach(img => img.classList.remove('show'));
  slideshowImages[currentSlide].classList.add('show');
}

// Thumbnail event listener 
thumbnailGroup.forEach(thumbnailList => {
  thumbnailList.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', function() {
      // add active class to thumnbail
      thumbnailList.forEach(thumb => thumb.classList.remove('active')); 
      this.classList.add('active');
  
      // show corresponding slideshow image 
      currentSlide = index;
  
      if (modal.classList.contains('show-flex')) {
        showImage(modalSlideshowImages)
      } else {
        showImage(ogSlideshowImages);
      }
    })
  })
})

// Modal - close slideshow 
modalClose.addEventListener('click', function() {
  modal.classList.remove('show-flex');
})

// Modal - open modal when clicking on image. 
ogSlideshowImages.forEach(img => {
  img.addEventListener('click', function() {
    console.log('clicked');
    modal.classList.add('show-flex');
  })
})


// Next Button 
next.forEach(nextBtn => {
  nextBtn.addEventListener('click', function() {
    console.log("next clicked");
    currentSlide++;
    if (currentSlide > 3) {
      currentSlide = 0;
    }
    if (modal.classList.contains('show-flex')) {
      showImage(modalSlideshowImages)
      modalThumbnailList.forEach(thumb => thumb.classList.remove('active')); // repeated code. 
      modalThumbnailList[currentSlide].classList.add('active'); // repeated code. 
    } else {
      showImage(ogSlideshowImages);
    }
    console.log(currentSlide);
  })  
})

// Prev Button 
prev.forEach(prevBtn => {
  prevBtn.addEventListener('click', function() {
    console.log("prev clicked");
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = 3;
    }
    if (modal.classList.contains('show-flex')) {
      showImage(modalSlideshowImages)
      modalThumbnailList.forEach(thumb => thumb.classList.remove('active')); // repeated code. 
      modalThumbnailList[currentSlide].classList.add('active'); // repeated code. 
    } else {
      showImage(ogSlideshowImages);
    }
    console.log(currentSlide);
  })
})



// Add To Cart Button 
const addToBtn = document.querySelector('.cart-add-to-btn');
const cartItemQuantityDisplay = document.querySelector('.cart-item-quantity');
const totalCostDisplay = document.querySelector('.cart-total-cost');
const cartBodyDisplay = document.querySelector('.cart-body');
const cartEmptyDisplay = document.querySelector('.cart-empty');
let totalCost = Number(totalCostDisplay.innerText); // we can change this to 0 once we update 
let itemQuantity = Number(cartIconCount.innerText);
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

// function to reset the cart toggle value (quantity user has chosen to add to cart) to 0 after pressing add to cart. 
function resetToggleValue() {
  value = 0;
  displayValue.innerText = value;
}

// Event listener 
addToBtn.addEventListener('click', function() {
  itemQuantity += value;
  cartIconCount.innerText = itemQuantity;
  cartItemQuantityDisplay.innerText = itemQuantity;

  if (isCartEmpty) {
    console.log("displayCart is running");
    displayCart();
  }
  calcTotalCost();

  // if cart is not already showing when addToBtn is pressed, show cart. 
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
slideshow modal: 
  - refactor: js- where I've commented // repeated code. 
  - fix: when clicking on my slideshow, the same img is the 1 that appears on the modal. 
  - bonus: add and minus btns on shopping cart. 
  - bonus: when modal open, click anywhere outside of modal to close modal. 
  - bonus- CSS: 
    - add hover effects to delete icon, prev & next buttons, modal close icon. mobile close btn, mobile nav links. 
*/ 