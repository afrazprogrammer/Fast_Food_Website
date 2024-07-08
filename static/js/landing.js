let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentIndex);
    });
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Initialize the carousel
showSlide(currentIndex);

const button = document.getElementById("hidden_menu_button");
const menu = document.getElementById("hidden_menu_container");
const button_2 = document.getElementById("hidden_menu_button_2");
let clicked = false;

button.onclick = () => {
    if (clicked === false){
        console.log("Clicked");
        menu.style.display = "grid";
        clicked = true;   
    }
    else{
        const menu = document.getElementById("hidden_menu_container");
        console.log("Clicked");
        menu.style.display = "none";
        clicked = false;
    }
}

button_2.onclick = () => {
    if (clicked === false){
        console.log("Clicked");
        menu.style.display = "grid";
        clicked = true;   
    }
    else{
        const menu = document.getElementById("hidden_menu_container");
        console.log("Clicked");
        menu.style.display = "none";
        clicked = false;
    }
}