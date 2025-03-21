
document.addEventListener("DOMContentLoaded", function () {
    // Slide-in observer for "about" items
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    });
    const elements = document.querySelectorAll(".details-container");
    elements.forEach((element) => observer.observe(element));
  
    //=============== MODAL LOGIC ================
    const openModalButtons = document.querySelectorAll("[data-modal-target]");
    const overlay = document.getElementById("overlay");
    const closeModalButtons = document.querySelectorAll("[data-close-button]");
  
    openModalButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        const modalId = button.getAttribute("data-modal-target");
        const modal = document.querySelector(modalId);
        if (modal) {
          openModal(modal);
        }
      });
    });
  
    overlay.addEventListener("click", () => {
      const modals = document.querySelectorAll(".modal.active");
      modals.forEach((modal) => closeModal(modal));
    });
  
    closeModalButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const modal = button.closest(".modal");
        if (modal) {
          closeModal(modal);
        }
      });
    });
  
    function openModal(modal) {
      modal.classList.add("active");
      overlay.classList.add("active");
    }
  
    function closeModal(modal) {
      modal.classList.remove("active");
      overlay.classList.remove("active");
    }
  });