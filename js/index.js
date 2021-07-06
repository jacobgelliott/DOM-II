// Your code goes here
// Listen event 1 - Mouseover
let nameMouse = document.querySelector('.nav')

nameMouse.addEventListener('mouseover', function(event){
    event.target.style.color = "orange";
    
    setTimeout(function(){
        event.target.style.color = "";
    }, 500);
})

// Listen event 2 - Copy event
document.addEventListener('copy', function(event) {
    console.log('Items copied')
})

// Listen event 3 - Pointer Over
document.addEventListener('pointerover', function (event) {
    console.log('Pointer moved over an item');
  })


// Listen Event 4 - Double Click
  const imgEnlarge = document.querySelector('.img-content');

imgEnlarge.addEventListener('dblclick', function (event) {
  imgEnlarge.classList.toggle('large');
})

// tried to loop this, but couldnt figure it out ^^^

// Listen Event 5 - Scroll

document.addEventListener('scroll',function (event) {
    console.log('scrolled');
  })

// Listen Event 6 - Load
document.addEventListener('load', function(event){
    console.log('page is fully loaded');
  })

  // Listen event 7 - Key down
  document.addEventListener("keydown", function(event) {
	console.log("key pressed!");
})

 // Listen event 8 - Key up
 document.addEventListener("keyup", function(event) {
	console.log("key unpressed!");
})

// Listen event 9 - Mouse enter
document.addEventListener('mouseenter', function(event){
    console.log('mouse entered page')
})

// Listen event 10 - Mouse leave
document.addEventListener('mouseleave', function(event){
    console.log('mouse left page')
})


// Stops nav from refreshing page.
  document.querySelector('.nav').addEventListener('click', function(event){
      event.preventDefault();
  })