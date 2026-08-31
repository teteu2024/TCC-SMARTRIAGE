// Seleciona todos os links do menu
const menuLinks = document.querySelectorAll(".menu a");

// Seleciona todas as seções
const sections = document.querySelectorAll("section[id]");


// ==========================================
// CLIQUE NO MENU
// ==========================================

menuLinks.forEach((link) => {

    link.addEventListener("click", () => {

        // Remove a classe ativa de todos
        menuLinks.forEach((item) => {
            item.classList.remove("ativo");
        });

        // Adiciona no link clicado
        link.classList.add("ativo");

    });

});


// ==========================================
// DESTACAR MENU DURANTE O SCROLL
// ==========================================

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    menuLinks.forEach((link) => {

        link.classList.remove("ativo");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {
            link.classList.add("ativo");
        }

    });

});