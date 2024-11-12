const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let arrow_left = document.querySelector("img.arrow_left");
let arrow_right = document.querySelector("img.arrow_right");

arrow_left.addEventListener("click", slidePrecedente);
arrow_right.addEventListener("click", slideSuivante);

function slideSuivante() {
    slideShow(slideIndex += 1);
}

function slidePrecedente() {
    slideShow(slideIndex -= 1);
}

 // Récupère l'élément point 
 const dotsContainer = document.querySelector('.dots');
	
 // Boucle pour ajouter un point par image 
 for (let i = 0; i < slides.length; i++) {
   const dot = document.createElement('div');
   dot.classList.add('dot');
 
   // Ajoute la classe 'dot_selected' au premier point
   if (i === 0) {
	 dot.classList.add('dot_selected');
   }
 
   dotsContainer.appendChild(dot);
 }

let bannerImg = document.querySelector("#banner .banner-img");
let bannerText = document.querySelector("#banner p");
let dots = document.querySelectorAll(".dots .dot");

// Initialisation de l'index du slide
let slideIndex = 0;

slideShow(slideIndex);
    
function slideShow(n) {
	// mise en place du défillement infini
    if (n >= slides.length) {slideIndex = 0;} // Revenir a la premiere slide après la derniere

    if (n < 0) {slideIndex = slides.length - 1;} // Aller a la dernière slide avant la premiere
	
    // configuration des images et du texte sur la banniere
    bannerImg.src = "./assets/images/slideshow/" + slides[slideIndex].image;
    bannerText.innerHTML = slides[slideIndex].tagLine;

    // configuration des points (dots) pour slide actif
    dots.forEach((dot, index) => {
        dot.classList.toggle("dot_selected", index === slideIndex);
    });
}