var images = [
  'images/image1.jpg',
  'images/image2.jpg',
  'images/image3.jpg',
  'images/image4.jpg',
];

var currentImageIndex = 0;
var imageContainer = document.getElementById('image-container');
var prevButton = document.getElementById('prev-button');
var nextButton = document.getElementById('next-button');

function showImage() {
  imageContainer.innerHTML = '';

  var image = document.createElement('img');
  image.src = images[currentImageIndex];
  imageContainer.appendChild(image);
}

function nextImage() {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  showImage();
}

function previousImage() {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  showImage();
}

showImage();

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight') {
    nextImage();
  } else if (event.key === 'ArrowLeft') {
    previousImage();
  }
});
nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', previousImage);
