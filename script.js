// Code pour le slideshow

var slideIndex = 0;

// On appelle la fonction afin que le slideshow se lance dès l'entrée sur le site
slider();

function slider() {
    var i;
    var x = document.getElementsByClassName("slideshow-img");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex - 1].style.display = "block";
    // Change d'image toute les 6 secondes
    // setTimeout(slider, 7000);
}

const bouton = document.querySelector('.menu_burger');
const contenu = document.querySelector('nav ul');

bouton.addEventListener('click', () => {
    bouton.classList.toggle('menu_burger_active');
    contenu.classList.toggle('contenu_active');
});

const bouton_slideshow = document.querySelector('#slideshow button');
bouton_slideshow.addEventListener('click', () => {
    window.scrollTo(document.getElementById('presentation'));
});
