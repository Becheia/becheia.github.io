var images = [
  'images/image1.jpg',
  'images/image2.jpg',
  'images/image3.jpg',
  'images/image4.jpg',
  'images/image5.jpg',
  'images/image6.jpg',
  'images/image7.jpg',
  'images/image8.jpg',
  'images/image9.jpg',
  'images/image10.jpg',
  'images/image11.jpg',
  
];

var currentImageIndex = 0;
var imageContainer = document.getElementById('image-container');
var prevButton = document.getElementById('prev-button');
var nextButton = document.getElementById('next-button');

function showImage() {
  var image = document.createElement('img');
  image.src = images[currentImageIndex];
  image.alt='Portfolio Image';
  imageContainer.innerHTML = ' ';
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
function cambiarImagenDesdeMiniatura(imagenIndex) {
  currentImageIndex = imagenIndex;
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

var thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(function (thumbnail, index) {
  thumbnail.addEventListener('click', function () {
    cambiarImagenDesdeMiniatura(index);
  });
});