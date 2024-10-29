const images = ['caro1.png', 'caro2.png', 'caro3.png' , 'caro4.png' , 'caro5.png'];
let currentIndex = 0;

const carouselImage = document.getElementById('carouselImage');

function updateImage() {
  carouselImage.innerHTML = `<img src="${images[currentIndex]}" alt="Image ${currentIndex + 1}">`;
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
}

setInterval(updateImage, 2000); // Changes image every 3 seconds
