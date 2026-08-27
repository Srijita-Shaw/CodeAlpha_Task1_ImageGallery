const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filterValue = button.getAttribute("data-filter");

        galleryItems.forEach(item => {

            if (
                filterValue === "all" ||
                item.classList.contains(filterValue)
            ) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });

    });
});


/* LIGHTBOX */

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const closeButton = document.querySelector(".close");

galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        const image = item.querySelector("img");
        const title = item.querySelector("h3");

        lightbox.style.display = "flex";

        lightboxImg.src = image.src;

        lightboxCaption.textContent = title.textContent;

        document.body.style.overflow = "hidden";
    });

});


/* CLOSE LIGHTBOX */

closeButton.addEventListener("click", () => {

    lightbox.style.display = "none";

    document.body.style.overflow = "auto";

});


/* CLOSE BY CLICKING BACKGROUND */

lightbox.addEventListener("click", event => {

    if (event.target === lightbox) {

        lightbox.style.display = "none";

        document.body.style.overflow = "auto";

    }

});


/* CLOSE USING ESC KEY */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        lightbox.style.display = "none";

        document.body.style.overflow = "auto";

    }

});