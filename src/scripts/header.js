// header mobile menu
window.addEventListener("load", () => {
    const hamMenu = document.querySelector("#ham-menu");
    const links = document.querySelector(".header__list");
    const html = document.documentElement;

    function navToggle() {
        html.classList.toggle("nav-open");
        hamMenu.classList.toggle("icon-bars");
        hamMenu.classList.toggle("icon-times");
    }

    // Event listener to Toggle nav menu in mobile
    hamMenu.addEventListener("click", navToggle);

    // Close header when nav links are clicked
    links.addEventListener("click", () => {
        if(html.classList.contains('nav-open')) {
            navToggle();
        }
    });
})
