const images = ['cont.png', 'cont2.png' , 'cont3.png'];
let currentIndex = 0;

const carouselImage = document.getElementById('carouselImage');

function updateImage() {
  carouselImage.innerHTML = `<img src="${images[currentIndex]}" alt="Image ${currentIndex + 1}">`;
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
}

setInterval(updateImage, 2000); // Changes image every 3 seconds


 // Initialize EmailJS
 (function(){
  emailjs.init("lJsEoYOXZsoHhVWMd"); // Replace with your actual User ID from EmailJS dashboard
})();

// Listen for form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const serviceID = "service_72dclm8";  // Replace with your Service ID
  const templateID = "template_112aikr"; // Replace with your Template ID

  // Show a loading SweetAlert
  Swal.fire({
    title: 'Sending...',
    text: 'Please wait while we send your message.',
    icon: 'info',
    allowOutsideClick: false,
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });

  // Send the email
  emailjs.sendForm(serviceID, templateID, this)
    .then((response) => {
      // On success, show a SweetAlert success message
      Swal.fire({
        title: 'Success!',
        text: 'Your email has been sent successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      console.log("SUCCESS!", response.status, response.text);
    })
    .catch((error) => {
      // On failure, show a SweetAlert error message
      Swal.fire({
        title: 'Oops...',
        text: 'Something went wrong. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      console.error("FAILED...", error);
    });
});