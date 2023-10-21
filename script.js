
//                  HELLO LOADING PAGE
gsap.registerPlugin(ScrollTrigger);

const hello_arr = ["Hello", "Hola","स्वागत हे", "Hallo", "Bonjour", "Ciao", "你好", "G'day","Guten tag", "Ola", "नमस्ते"];


window.onload = function () {
    const spanHelloContainer = document.querySelector(".span-hello-container");
    const spanHello = document.querySelector(".span-hello");

    // Impedisci lo scrolling
    document.body.style.overflow = 'hidden';

    let currentIndex = 0;

    function displayNextHello() {
        if (currentIndex < hello_arr.length) {
            spanHello.textContent = hello_arr[currentIndex];
            currentIndex++;
            setTimeout(displayNextHello, 220);
        } else {
            spanHelloContainer.classList.add("translate-animation");

            
            document.body.style.overflow = 'auto';
        }
    }

    displayNextHello();
};


// Animazione per le immagini a sinistra
gsap.to(".left", {
    x: 0,
    opacity: 1,
    stagger: 0.1, // Ritardo tra ogni animazione
    scrollTrigger: {
        trigger: ".container",
        start: "top 75%", // La posizione dello scroll quando inizia l'animazione
        end: "bottom 25%",
        markers: false, // Mostra i marker per il debug
        scrub: true
    }
});

// Animazione per le immagini a destra
gsap.to(".right", {
    x: 0,
    opacity: 1,
    stagger: 0.5, 
    scrollTrigger: {
        trigger: ".container",
        start: "top 75%",
        end: "bottom 25%",
        markers: false,
        scrub: true
    }
});



var active = 3;

var mncircles = document.querySelectorAll(".mn-circle");

var h4 = document.querySelectorAll(".sec h4");

var sec = document.querySelectorAll(".sec");

var dot = document.querySelector(".dot");

var stripes = document.querySelectorAll(".head-h4");

var herotonav = document.querySelector(".hero-to-nav");

var changemodecircle = document.querySelector(".change-dark-light");

var esseElement = document.querySelector(".imgcont");

var copyright = document.querySelector(".copyright");

var rainbowHover = document.querySelector(".rainbow-hover");




const lerp = (x, y, a) => x * (1 - a) + y * a;

//                           ANIMAZIONE  "mousemove"
function handleMouseMove(event) {
    var dims = this.getBoundingClientRect();
    var xstart = dims.x;
    var xend = xstart + dims.width;

    var zeroOne = gsap.utils.mapRange(xstart, xend, 0, 1, event.clientX);

    var ystart = dims.y;
    var yend = ystart + dims.height;

    var zerotwo = gsap.utils.mapRange(ystart, yend, 0, 1, event.clientY);

    gsap.to(this, {
        x: lerp(-20, 20, zeroOne),
        y: lerp(-30, 30, zerotwo)
    });
}

function handleMouseLeave() {
    gsap.to(this, {
        x: 0,
        y: 0
    });
}

// Lista di elementi su cui applicare l'effetto
var elements = [esseElement, changemodecircle, rainbowHover, copyright];

elements.forEach(element => {
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);
});

//                                  DARK       MODE ON


document.addEventListener("DOMContentLoaded", function() {
    changemodecircle.addEventListener("click",function(){
        document.querySelector(".change-mode-circle").classList.toggle("change-mode-circle-class");
        document.querySelector(".change-mode-circle i").classList.toggle("fa-moon");
        document.querySelector(".changeinputdarklight").classList.toggle("input-backgroundchange");
        document.querySelector(".hero-section #madeby").classList.toggle("madebydark");
        document.querySelector(".hero-section .block").classList.toggle("block-dark");
        document.querySelector(".name").classList.toggle("name-dark");
        document.querySelector(".hero-section").classList.toggle("ondark-hero");
        document.querySelector(".product-section").classList.toggle("ondark-product")
    })
});














