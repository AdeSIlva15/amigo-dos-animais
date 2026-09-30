import { navegar } from "./navegacao.js";


const botaoMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav");

if (botaoMenu && menu) {
    botaoMenu.addEventListener("click", function () {
        const menuAberto = menu.classList.toggle("menu-aberto");

        botaoMenu.setAttribute("aria-expanded", menuAberto);

        if (menuAberto) {
            botaoMenu.setAttribute("aria-label", "Fechar menu");
        } else {
            botaoMenu.setAttribute("aria-label", "Abrir menu");
        }
    });
}


document.querySelectorAll("[data-rota]").forEach(function (link) {

    link.addEventListener("click", function (evento) {

        evento.preventDefault();

        const rota = link.dataset.rota;

        navegar(rota);

    });

});