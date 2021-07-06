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
document.addEventListener('copy', (event) => {
    console.log('Items copied')
});

// Listen event 3 - Pointer Over
document.addEventListener('pointerover', (event) => {
    console.log('Pointer moved in');
  });


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

