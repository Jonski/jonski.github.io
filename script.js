document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalCaption = document.getElementById("modal-caption");
    const closeModal = document.getElementById("close");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const galleryItems = document.querySelectorAll(".gallery-grid figure");

    let currentIndex = 0;

    // Open modal and display the clicked image
    function openModal(index) {
        modal.style.display = "flex";
        currentIndex = index;
        updateModalContent();
    }

    // Update modal content based on current index
    function updateModalContent() {
        const item = galleryItems[currentIndex];
        const img = item.querySelector("img");
        const caption = item.querySelector("figcaption").innerText;

        modalImg.src = img.src;
        modalCaption.innerText = caption;
    }

    // Close the modal
    function closeModalHandler() {
        modal.style.display = "none";
    }

    // Show the previous image
    function showPrevImage() {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        updateModalContent();
    }

    // Show the next image
    function showNextImage() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        updateModalContent();
    }

    // Add event listeners
    galleryItems.forEach((item, index) => {
        item.addEventListener("click", () => openModal(index));
    });

    closeModal.addEventListener("click", closeModalHandler);
    prevButton.addEventListener("click", showPrevImage);
    nextButton.addEventListener("click", showNextImage);

    // Close modal when clicking outside the image or on the close button
    window.addEventListener("click", (event) => {
        if (event.target === closeModal) {
            closeModalHandler();
        }
    });
});