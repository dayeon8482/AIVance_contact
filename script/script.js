console.clear();
document.addEventListener("mousemove", (e) => {
  const cursor = document.querySelector(".custom-cursor");
  if (cursor) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  }
});

function toggleMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("active");
}
