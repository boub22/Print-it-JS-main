// script.js

// Tableau contenant les chemins des images du carousel
const carouselImages = [
	'assets/images/slideshow/slide1.jpg',
	'assets/images/slideshow/slide2.jpg',
	'assets/images/slideshow/slide3.jpg',
	'assets/images/slideshow/slide4.png'
  ];
  
  // Sélection des éléments HTML nécessaires
  const carouselImage = document.querySelector('.banner-img'); // L'image principale du carousel
  const arrowLeft = document.querySelector('.arrow_left'); // Flèche pour aller à gauche
  const arrowRight = document.querySelector('.arrow_right'); // Flèche pour aller à droite
  const dotsContainer = document.querySelector('.dots'); // Conteneur pour les points (dots)
  
  // Index pour suivre l'image affichée actuellement
  let currentIndex = 0;
  
  // Fonction pour mettre à jour l'affichage du carousel
  function updateCarousel() {
	// Change l'image affichée en utilisant l'index actuel
	carouselImage.src = carouselImages[currentIndex];
  
	// Met à jour l'état des points (dots) pour indiquer l'image active
	document.querySelectorAll('.dot').forEach((dot, index) => {
	  // Ajoute ou enlève la classe CSS "dot_selected" selon si le dot correspond à l'index actuel
	  dot.classList.toggle('dot_selected', index === currentIndex);
	});
  }
  
  // Événement : Clique sur la flèche gauche
  arrowLeft.addEventListener('click', () => {
	// Décrémente l'index pour aller à l'image précédente
	// Utilise `(currentIndex - 1 + carouselImages.length) % carouselImages.length` pour rester dans les limites (boucle circulaire)
	currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
  
	// Met à jour le carousel avec la nouvelle image
	updateCarousel();
  });
  
  // Événement : Clique sur la flèche droite
  arrowRight.addEventListener('click', () => {
	// Incrémente l'index pour aller à l'image suivante
	// Utilise `(currentIndex + 1) % carouselImages.length` pour rester dans les limites (boucle circulaire)
	currentIndex = (currentIndex + 1) % carouselImages.length;
  
	// Met à jour le carousel avec la nouvelle image
	updateCarousel();
  });
  
  // Création des points (dots) dynamiquement
  carouselImages.forEach((_, index) => {
	// Crée un élément <div> pour chaque point
	const dot = document.createElement('div');
	dot.classList.add('dot'); // Ajoute la classe CSS de base "dot"
  
	// Si le dot correspond à l'index actuel, on lui ajoute la classe "dot_selected"
	if (index === currentIndex) dot.classList.add('dot_selected');
  
	// Ajoute un événement pour détecter le clic sur un dot
	dot.addEventListener('click', () => {
	  // Change l'index actuel à celui correspondant au dot cliqué
	  currentIndex = index;
  
	  // Met à jour le carousel
	  updateCarousel();
	});
  
	// Ajoute le dot au conteneur des dots
	dotsContainer.appendChild(dot);
  });
  
  // Appel initial pour afficher la première image et ses dots
  updateCarousel();
  
  