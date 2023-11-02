document.addEventListener("DOMContentLoaded", function() {
    var currentIndex = 0;
    var images = document.querySelectorAll(".slider a");

    function showImage(index) {
        for (var i = 0; i < images.length; i++) {
            images[i].style.display = "none";
        }
        images[index].style.display = "block";
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    setInterval(nextImage, 2000); // Change image every 2 seconds

    showImage(currentIndex);
});



const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay:{
      delay: 3000
      },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });



  document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.getElementById("burger-menu");
    const popupContainer = document.getElementById("popup-container");
    const menuClose = document.getElementById("menu-close");

    burgerMenu.addEventListener("click", function () {
        popupContainer.style.display = "block";
    });

    menuClose.addEventListener("click", function () {
        popupContainer.style.display = "none";
    });
});


var preloader = document.getElementById('loader');

function preLoaderHandler() {
    preloader.style.display = 'none';
}

// Function to hide the loader after 4 seconds
function hideLoader() {
    setTimeout(function() {
        preLoaderHandler();
    }, 2000); // 4000 milliseconds (4 seconds)
}

// Call the hideLoader function to start the countdown when the page loads
window.addEventListener('load', hideLoader);





