document.addEventListener("DOMContentLoaded", function () {
    // Get the circle elements
    const circles = document.querySelectorAll(".circle");

    // Get the service content container
    const serviceTitle = document.querySelector(".service-subhead h2");
    const serviceDescription = document.querySelector(".service-subhead .h4-head");

    // Define the content for each service
    const serviceContentMap = {
        "hair-wash": {
            title: "Hair wash",
            description: "Conditioning Wash Deep Cleansing Wash <br> Basic Wash"
        },
        "facials": {
            title: "Premium Facials",
            description: "Energy C Gold Foil Facial <br> Shahnaz Gold"
        },
        "threading": {
            title: "Threading",
            description: "Full Face, Brows,Chin,<br> Forehead"
        },
        "body-spa": {
            title: "Body Spa",
            description: "Full Body Massage with Body Polish <br> Moroccan Bath"
        },
    };

    // Initialize the service content with the default content
    serviceTitle.textContent = serviceContentMap["hair-wash"].title;
    serviceDescription.innerHTML = serviceContentMap["hair-wash"].description;

    // Add click event listeners to each circle
    circles.forEach(circle => {
        circle.addEventListener("click", function () {
            // Get the service identifier from the data attribute
            const service = circle.dataset.service;

            // Update only the relevant content
            serviceTitle.textContent = serviceContentMap[service].title;
            serviceDescription.innerHTML = serviceContentMap[service].description;
        });
    });
});

    

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



// Get the cover model element with the new class and ID
const coverModel = document.querySelector('.cover-model');

// Function to check if an element is scrolled into view
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


