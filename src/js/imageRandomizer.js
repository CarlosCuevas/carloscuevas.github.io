document.addEventListener("DOMContentLoaded", function() {
	var headerImages = ['bridge.jpg', 'bridge2.jpg', 'lights.jpg', 'frontSt.jpg', 'courtSt.jpg'];
	
	var header = document.querySelector('#header-section');
	header.style.backgroundImage = 'url(images/' + headerImages[Math.floor(Math.random() * headerImages.length)] + ')';
});