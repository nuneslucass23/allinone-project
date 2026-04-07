const images = document.querySelectorAll(".gallery_grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox_img");
const closeBtn = document.querySelector(".close");

function openLightbox(img) {
    lightbox.classList.add("active");
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
    lightbox.classList.remove("active");
    lightboxImg.src = "";
    lightboxImg.alt = "";
    lightbox.setAttribute("aria-hidden", "true");
}

images.forEach((img) => {
    img.addEventListener("click", () => {
        openLightbox(img);
    });
});

closeBtn.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
        closeLightbox();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
        closeLightbox();
    }
});