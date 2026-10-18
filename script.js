
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");

    hamburger.addEventListener("click", () => {
        const isOpen = mobileMenu.classList.toggle("active");

        hamburger.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';

        hamburger.setAttribute("aria-expanded", isOpen);
        hamburger.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
            hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
            hamburger.setAttribute("aria-expanded", "false");
        });
    });
