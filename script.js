// toggleMenu — для мобильного бургер-меню
function toggleMenu() {
  const menu = document.getElementById("navMenu");
  menu.classList.toggle("active");
}

// Автоматически закрываем меню при клике по ссылке
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navMenu").classList.remove("active");
  });
});

// scrollGallery — слайдер галереи
function scrollGallery(direction) {
  const slider = document.getElementById("gallerySlider");
  const cardWidth = slider.querySelector('.gallery-card').offsetWidth + 20; // + gap
  slider.scrollBy({ left: cardWidth * direction, behavior: "smooth" });
}

// Простая валидация формы и отправка (через Telegram Bot API или Email)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = form.querySelector("input[type='text']").value.trim();
      const phone = form.querySelector("input[type='tel']").value.trim();

      if (name.length < 2 || phone.length < 6) {
        alert("Пожалуйста, заполните все поля корректно.");
        return;
      }

      // Отправка формы — пример с Telegram (замени на свой токен и ID)
      const telegramToken = "YOUR_BOT_TOKEN";
      const chatId = "YOUR_CHAT_ID";
      const message = `📩 Новая заявка:\n👤 Имя: ${name}\n📞 Телефон: ${phone}`;

      fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      })
      .then(res => res.ok ? alert("Заявка отправлена!") : alert("Ошибка отправки."))
      .catch(() => alert("Ошибка соединения."));
    });
  }
});
