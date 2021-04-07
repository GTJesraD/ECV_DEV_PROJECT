// Code pour le slideshow

var slideIndex = 0;

// On appelle la fonction afin quue le slideshow se lance dès l'entrée sur le site
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slideshow-img");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex - 1].style.display = "block";
    // Change d'image toute les 6 secondes
    setTimeout(carousel, 7000);
}