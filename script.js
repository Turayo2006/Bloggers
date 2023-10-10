$(document).ready(function(){

$nav = $('.nav');

$toggleCollapse = $('.toggle-collapse');

/* click event on toggle menu */
$toggleCollapse.click(function(){
$nav.toggleClass('collapse');
})

  
  /*--------------------Carousel------------*/
  
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
  autoplay:true,
  autoplayTimeout: 1800,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
       1400:{
            items:4
        }
    }
})
  
  // footer move-up-arrow scroll-top //
  $('.move-up-arrow span').click(function(){
     $('html, body').animate({
    scrollTop: 0
     }, 1000);
  })
  
  // AOS Instance
  AOS.init();
  
  
  });

let noOfCharac = 150;
let contexts = document.querySelectorAll(".context");
contexts.forEach(context => {
  
  //If text length is less that noOfCharac... then hide the read more button
  if(context.textContext.length < noOfCharac){
    context.nextElementSibling.style.display = "none";
       
  }
  else{
    let displayText = context.textContext.slice(0, noOfCharac);
    let moreText = context.textContext.slice(noOfCharac);
    context.innerHTML = `${displayText}`
  }
  
})

// const parentContainer = document.querySelector('site-content');
// parentContainer.addEventListener('click', event=>{
  
//   const current = event.target;
//   const isPostTitle = current.className.includes('post-btn');
  
//   if(!isPostTitle) return;
  
//   const currentText = event.target.parentNode.querySelector('.read-more-text');
  
//   currentText.classList.toggle('read-more-text--show');
// })


// $(document).ready(function(){
// $(".read-more-text").hide();
  
//   $(document).on('click',".post-btn",function(){
    
//     var moreLessButton=$(".read-more-text").is(":read-less-text")?'Read More' : 'Read Less';
//     $(this).text(moreLessButton);
//     $(this).parent(".post-title").find(".read-more-text").toggle();
//     $(this).parent(".post-title").find(".read-less-text").toggle();
    
//   });
  
  
//  });






// window.onscroll = function() {myFunction()};

// var nav = document.getElementById(".nav");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
