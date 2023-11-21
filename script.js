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

  // Funzione per gestire l'evento di scroll whatsapp
  function handleScroll() {
    // Questa è la variabile che ti permette di regolare l'altezza dello schermo in cui l'icona sparisce
    var scrollLimit = 350;  // Puoi modificare questo valore come preferisci

    // Se l'utente ha scrollato più del valore di scrollLimit, nascondi l'icona
    if (window.scrollY > scrollLimit) {
      document.querySelector('.whatsapp').style.display = 'none';
    } else {
      document.querySelector('.whatsapp').style.display = 'block';
    }
  }

  // Aggiunta dell'event listener per l'evento di scroll
  window.addEventListener('scroll', handleScroll);



function animateScrollElements(selector) {
  const target = document.querySelectorAll(selector);

  target.forEach((element) => {
    var pos = window.pageYOffset * element.dataset.rate;

    if (element.dataset.direction === 'vertical') {
      element.style.transform = `translate3d(0px, ${pos}px, 0px)`;
    } else {
      var posX = window.pageYOffset * element.dataset.ratex;
      var posY = window.pageYOffset * element.dataset.ratey;

      element.style.transform = `translate3d(${posX}px, ${posY}px, 0px)`;
    }
  });
}

window.addEventListener('scroll', function(e) {
  animateScrollElements('.scroll'); // Modifica qui il selettore
});

function animateScrollElements(selector) {
  const target = document.querySelectorAll(selector);

  target.forEach((element) => {
    var pos = window.pageYOffset * element.dataset.rate;

    if (element.dataset.direction === 'vertical') {
      element.style.transform = `translate3d(0px, ${pos}px, 0px)`;
    } else {
      var posX = window.pageYOffset * element.dataset.ratex;
      var posY = window.pageYOffset * element.dataset.ratey;

      element.style.transform = `translate3d(${posX}px, ${posY}px, 0px)`;
    }
  });
}

window.addEventListener('scroll', function(e) {
  animateScrollElements('.scroll');
  animateScrollElements('.scroll1');
  animateScrollElements('.scroll-Skills');
});
/*
window.addEventListener('scroll', function() {
  var wrapper = document.querySelector('.wrapper');
  var scrollTop = window.scrollY;

  // Aggiungi o rimuovi una classe quando si fa lo scroll
  if (scrollTop > 1000) { // Modifica questo valore in base alla posizione in cui vuoi far apparire il testo
    wrapper.classList.add('scrolled');
  } else {
    wrapper.classList.remove('scrolled');
  }
});

*/

window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY || window.pageYOffset;
  var elements = document.querySelectorAll('.left-text-tattoo');

  elements.forEach(function(el, index) {
    var elementTop = el.getBoundingClientRect().top;
    var elementBottom = el.getBoundingClientRect().bottom;
    var windowHeight = window.innerHeight;

    if (elementTop < windowHeight && elementBottom >= 0) {
      // L'elemento è visibile parzialmente o completamente nella viewport
      el.style.transform = 'translateX(' + (index * 50) + 'px)';
    } else {
      // L'elemento non è più visibile nella viewport
      el.style.transform = 'translateX(-100%)';
    }
  });
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

var icons = document.querySelector(".fa-instagram");

var iconst = document.querySelector(".fa-tiktok");

var iconsw = document.querySelector(".fa-brands");


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
var elements = [esseElement, changemodecircle, rainbowHover, copyright, icons, iconst, iconsw];

elements.forEach(element => {
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);
});





//      FOOTER
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

  // Funzione per gestire l'evento di scroll whatsapp
  function handleScroll() {
    // Questa è la variabile che ti permette di regolare l'altezza dello schermo in cui l'icona sparisce
    var scrollLimit = 100;  // Puoi modificare questo valore come preferisci

    // Se l'utente ha scrollato più del valore di scrollLimit, nascondi l'icona
    if (window.scrollY > scrollLimit) {
      document.querySelector('.whatsapp').style.display = 'none';
    } else {
      document.querySelector('.whatsapp').style.display = 'block';
    }
  }

  let currentSection = 0;


 /*  // Cattura l'evento di scroll
window.addEventListener('wheel', function(event) {
  // Previene lo scroll predefinito
  event.preventDefault();

  // Determina la direzione dello scroll
  const direction = event.deltaY > 0 ? 1 : -1;

  // Aggiorna la sezione corrente in base alla direzione
  currentSection += direction;

  // Assicurati che currentSection sia compreso tra 0 e il numero di sezioni - 1
  const sections = document.querySelectorAll('.section');
  currentSection = Math.max(0, Math.min(currentSection, sections.length - 1));

  // Effettua lo scroll verso la sezione corrente con un andamento "smooth"
  sections[currentSection].scrollIntoView({ behavior: 'smooth' });
});

*/



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
        document.querySelector(".wrapper").classList.toggle("ondark-wrapper");
        document.querySelector(".sp-Work").classList.toggle("ondark-left-text");

        // Seleziona tutti gli elementi con la classe "crafting"
        const titleTexts = document.querySelectorAll(".crafting");
        titleTexts.forEach(title => {
            title.classList.toggle("name-dark");
        });

        const scrollWorks = document.querySelectorAll(".scroll");
        scrollWorks.forEach(title => {
          title.classList.toggle("scroll-dark");
        });

        const ondarkIcons = document.querySelectorAll(".icons");
        ondarkIcons.forEach(title => {
            title.classList.toggle("ondark-icons");
        });

        const ondarkLeftText = document.querySelectorAll(".left-text-tattoo");
        ondarkLeftText.forEach(title => {
          title.classList.toggle("ondark-left-text");
        })
    })
});



















