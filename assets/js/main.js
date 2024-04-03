// let navWarb = document.getElementsByClassName("nav-warp");


// let closeBtn = document.querySelector(".closeBtn");
// let equalBtnIcon = closeBtn.querySelector(".fa-equals");
// let closeBtnIcon = closeBtn.querySelector(".fa-xmark");

// closeBtn.addEventListener("click", toggleIcons);

// function toggleIcons(){
//     equalBtnIcon.classList.toggle("d-none");
//     closeBtnIcon.classList.toggle("d-none");
// }
     

// // Initialize Purecounter
// document.addEventListener('DOMContentLoaded', function () {
//   var counters = document.querySelectorAll('.purecounter');
//   counters.forEach(function (counter) {
//     var start = parseInt(counter.getAttribute('data-purecounter-start'));
//     var end = parseInt(counter.getAttribute('data-purecounter-end'));
//     var duration = parseInt(counter.getAttribute('data-purecounter-duration'));

//     var options = {
//       start: start,
//       end: end,
//       duration: duration
//     };

//     new Purecounter(counter, options);
//   });
// });



function openImage(img) {
  // Create a div element for the overlay
  var overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.zIndex = '9999';

  // Create an image element to display the clicked image
  var largeImg = document.createElement('img');
  largeImg.src = img.src;
  largeImg.style.maxWidth = '90%';
  largeImg.style.maxHeight = '90%';

  // Add the image to the overlay
  overlay.appendChild(largeImg);

  // Add the overlay to the body
  document.body.appendChild(overlay);

  // Close the overlay when clicking outside the image
  overlay.onclick = function(event) {
      if (event.target === overlay) {
          document.body.removeChild(overlay);
      }
  };
}
    




//////////////////////////////////////////////////////////////////////


  
  
var swiper = new Swiper("#ProductsWeOffer .swiper", {
  slidesPerView: 4,
  spaceBetween: 10,
  effect: "coverflow",
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: true,
  },
  grabCursor: true,
  reverseDirection: false,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 1,
    modifier: 5,
    slideShadows: false,
  },
  breakpoints: {
      320: {
        slidesPerView: 1,
        loop: true,
        // enabled: true,
      },
      576: {
        slidesPerView: 2,
        // enabled: false,
      },
      992: {
        slidesPerView: 3,
      },
      1500: {
        slidesPerView: 4,
      },
    },
});
var swiper = new Swiper("#visitOurStore .swiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  effect: "coverflow",
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: true,
  },
  grabCursor: true,
  reverseDirection: false,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 1,
    modifier: 5,
    slideShadows: false,
  },
  breakpoints: {
      320: {
        slidesPerView: 1,
        loop: true,
        // enabled: true,
      },
      576: {  
        slidesPerView: 2,
        // enabled: false,
      },
      992: {
        slidesPerView: 3,
      },
      1500: {
        slidesPerView: 3,
      },
    },
});




document.addEventListener('DOMContentLoaded', function () {
  var video = document.getElementById('myVideo');
  var playButton = document.getElementById('playButton');

  playButton.addEventListener('click', function () {
      if (video.paused) {
          video.play();
          video.controls = true; // Show video controls
          playButton.style.display = 'none'; // Hide play button
      }
  });

  video.addEventListener('play', function () {
      video.controls = true; // Show video controls when video starts playing
      playButton.style.display = 'none'; // Hide play button when video starts playing
  });
});






new PureCounter();
// Initialize Purecounter
  
