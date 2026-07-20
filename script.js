// elementler secilir
const menuBtn = document.getElementById("menu-btn");
const menu = document.querySelector(".melumatlar");
const navLinks = document.querySelectorAll(
  ".melumatlar a, .hero-cont a, #logo",
);
const form = document.querySelector(".kontakt");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

// burger menyu
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");

  // ikonu deyis
  if (menu.classList.contains("active")) {
    menuBtn.textContent = "✕";
    menuBtn.setAttribute("aria-label", "Menyunu bağla");
  } else {
    menuBtn.textContent = "☰";
    menuBtn.setAttribute("aria-label", "Menyunu aç");
  }
});

// smooth scroll
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");

    if (!targetId.startsWith("#")) return;

    e.preventDefault();

    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // mobil menyu aciqdirsa bagla
    menu.classList.remove("active");
    menuBtn.textContent = "☰";
    menuBtn.setAttribute("aria-label", "Menyunu aç");
  });
});

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  document.querySelectorAll(".error-message").forEach((error) => {
    error.remove();
  });

  let isValid = true;

  // ad ve soyad
  if (nameInput.value.trim() === "") {
    showError(nameInput, "Ad və soyad daxil edin.");
    isValid = false;
  }

  // email
  if (emailInput.value.trim() === "") {
    showError(emailInput, "Email daxil edin.");
    isValid = false;
  } else if (!emailRegex.test(emailInput.value.trim())) {
    showError(emailInput, "Düzgün email daxil edin.");
    isValid = false;
  }

  // mesaj
  if (messageInput.value.trim() === "") {
    showError(messageInput, "Mesaj daxil edin.");
    isValid = false;
  }

  // her sey ok
  if (isValid) {
    alert("Mesaj uğurla göndərildi!");
    form.reset();
  }
});

// xeta mesaji
function showError(input, message) {
  const error = document.createElement("small");
  error.classList.add("error-message");
  error.textContent = message;
  input.parentElement.appendChild(error);
}
