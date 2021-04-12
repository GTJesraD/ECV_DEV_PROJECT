/* CODE POUR LE SLIDESHOW */

var slideIndex = 0;

// On appelle la fonction afin que le slideshow se lance dès l'entrée sur le site
slider();

function slider() {
    var i;
    var x = document.getElementsByClassName("slideshow-img");

    // On met toute les images en display: none
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;

    // Et on affiche celle que l'on veut afficher, c.a.d la suivante
    if (slideIndex > x.length) { slideIndex = 1 }

    x[slideIndex - 1].style.display = "block";

    // On change d'image toute les 7 secondes
    setTimeout(slider, 7000);
}

/* CODE POUR LE MENU BURGER EN MODE MOBILE */

const bouton_burger = document.querySelector('.menu_burger');
const contenu = document.querySelector('nav ul');
const liens_menu = document.querySelectorAll('nav ul li a');

bouton_burger.addEventListener('click', () => {
    bouton_burger.classList.toggle('menu_burger_active');
    contenu.classList.toggle('contenu_active');
});

liens_menu.forEach(lien => {
    lien.addEventListener('click', () => {
        bouton_burger.classList.toggle('menu_burger_active');
        contenu.classList.toggle('contenu_active');
    });
});

/* CODE POUR LE CTA "Nous découvrir" du slideshow */

const bouton_slideshow = document.querySelector('#slideshow button');
var prod = true;

bouton_slideshow.addEventListener('click', () => {
    // On change l'url de la page avec le #presentation. C'est l'équivalent de la technique avec les liens
    // mais en utilisant un élément button
    if (prod)
        document.location.href = '/ECV_DEV_PROJECT/#titre1';
    else
        document.location.href = '/index.html#titre1';
});

/* CODE POUR LE CTA "En savoir plus" de la partie presentation */

const bouton_pres = document.querySelector('#CTA button');

bouton_pres.addEventListener('click', () => {
    // On change l'url de la page avec le #tarif.
    if (prod)
        document.location.href = '/ECV_DEV_PROJECT/#tarif';
    else
        document.location.href = '/index.html/#tarif';
});