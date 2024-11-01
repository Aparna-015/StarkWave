const image_array = [

  "images/04.jpg",
  "images/03.png",
  "images/shop-hero-1-product-slide-1.jpg"
];

let currentIndex = 0;

const imageContainer = document.getElementById("image_id");

imageContainer.innerHTML = image_array
  .map((src, index) => {
    return `<img src="${src}" class="${
      index === 0 ? "active" : ""
    }" alt="Slide ${index + 1}"/>`;
  })
  .join("");

function showSlide(index) {
  const slides = document.querySelectorAll("#image_id img");
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function next_Slide() {
  currentIndex = (currentIndex + 1) % image_array.length;
  showSlide(currentIndex);
}

function prev_Slide() {
  currentIndex = (currentIndex - 1 + image_array.length) % image_array.length;
  showSlide(currentIndex);
}

showSlide(currentIndex);
