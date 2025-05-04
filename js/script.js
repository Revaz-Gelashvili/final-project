window.addEventListener("load", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const closeBtn = document.querySelector(".close-btn");
  const sidebar = document.querySelector(".sidebar");

  if (menuToggle && closeBtn && sidebar) {
    menuToggle.addEventListener("click", () => {
      sidebar.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
      sidebar.classList.remove("active");
    });
  } else {
    console.warn("One or more elements are missing in the DOM.");
  }
});
