// Бургер-меню
function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.classList.toggle("active");
}

// Галерея (горизонтальная прокрутка)
function scrollGallery(direction) {
  const slider = document.getElementById("gallerySlider");
  const card = slider.querySelector(".gallery-card");
  if (!card) return;
  const cardWidth = card.offsetWidth + 20; // +gap, подгони при необходимости
  slider.scrollLeft += direction * cardWidth * 1; // прокрутка на 3 карточки
}
// Отзывы
let currentReview = 0;

function showReview(index) {
  const cards = document.querySelectorAll('.review-card');
  cards.forEach((card, i) => {
    card.classList.toggle('active', i === index);
  });
}

function scrollReviews(direction) {
  const cards = document.querySelectorAll('.review-card');
  currentReview += direction;
  if (currentReview < 0) currentReview = cards.length - 1;
  if (currentReview >= cards.length) currentReview = 0;
  showReview(currentReview);
}

// При загрузке страницы показываем первый отзыв
document.addEventListener('DOMContentLoaded', () => {
  showReview(currentReview);
});
