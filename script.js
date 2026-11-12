const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

// Menandai menu yang sedang dipilih
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-link").forEach((item) => item.classList.remove("active"));
    if (link.closest(".nav-menu")) link.classList.add("active");
    if (window.innerWidth <= 760) sidebar.classList.remove("open");
  });
});

// Shortcut Ctrl + K untuk menuju kolom pencarian
document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    document.getElementById("searchInput").focus();
  }
});

// Pencarian sederhana pada judul dan tautan dashboard
document.getElementById("searchInput").addEventListener("input", (event) => {
  const keyword = event.target.value.toLowerCase().trim();
  document.querySelectorAll(".news-item, .quick-link, .nav-menu .nav-link").forEach((item) => {
    item.style.opacity = !keyword || item.textContent.toLowerCase().includes(keyword) ? "1" : ".25";
  });
});
