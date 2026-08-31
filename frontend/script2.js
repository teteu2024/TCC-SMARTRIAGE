// ========================================
// MENU MOBILE
// ========================================

const menuButton =
    document.getElementById("menuButton");

const navigation =
    document.getElementById("navigation");


menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

});


// ========================================
// LINKS DO MENU
// ========================================

const menuLinks =
    document.querySelectorAll(".navigation a");


menuLinks.forEach((link) => {

    link.addEventListener("click", () => {

        // Fecha o menu no celular
        navigation.classList.remove("open");


        // Remove o ativo de todos
        menuLinks.forEach((item) => {

            item.classList.remove("active");

        });


        // Adiciona ativo no clicado
        link.classList.add("active");

    });

});


// ========================================
// DESTAQUE AUTOMÁTICO NO SCROLL
// ========================================

const sections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", () => {

    let currentSection = "";


    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    menuLinks.forEach((link) => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


// ========================================
// VÍDEO MODAL
// ========================================

const videoButton =
    document.getElementById("videoButton");

const videoModal =
    document.getElementById("videoModal");

const closeVideo =
    document.getElementById("closeVideo");


videoButton.addEventListener("click", () => {

    videoModal.classList.add("active");

});


closeVideo.addEventListener("click", () => {

    videoModal.classList.remove("active");

});


// Fecha clicando fora do conteúdo

videoModal.addEventListener("click", (event) => {

    if (event.target === videoModal) {

        videoModal.classList.remove("active");

    }

});


// ========================================
// FECHAR MODAL COM ESC
// ========================================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        videoModal.classList.remove("active");

    }

});