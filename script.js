console.log("Dad's law firm website is running!");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("open");

  const isOpen = nav.classList.contains("open");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );

  menuToggle.textContent = isOpen ? "✕" : "☰";
});

const whatsappToggle = document.querySelector("#whatsappMenuToggle");
const whatsappOptions = document.querySelector("#whatsappOptions");

if (whatsappToggle && whatsappOptions) {
  whatsappToggle.onclick = function () {
    const isOpen = whatsappOptions.hidden;

    whatsappOptions.hidden = !isOpen;
    whatsappToggle.setAttribute("aria-expanded", String(isOpen));
    whatsappToggle.textContent = isOpen ? "Close ✕" : "WhatsApp ☎";
  };
}