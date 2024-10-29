const images = ['ser.png', 'ser2.png' , 'ser3.png'];
let currentIndex = 0;

const carouselImage = document.getElementById('carouselImage');

function updateImage() {
  carouselImage.innerHTML = `<img src="${images[currentIndex]}" alt="Image ${currentIndex + 1}">`;
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
}

setInterval(updateImage, 2000); // Changes image every 3 seconds
