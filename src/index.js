import "./styles.css";
import createHomePage from "./home.js";
import createAboutPage from "./about.js";
import createMenuPage from "./menu.js";

document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");
    const buttons = document.querySelectorAll(".tab-btn");

    function setActiveTab(tabName) {
        content.innerHTML = "";

        buttons.forEach((btn) => btn.classList.remove("active"));

        switch (tabName) {
            case "Home":
                createHomePage();
                document.getElementById("home-btn").classList.add("active");
                break;
            case "Menu":
                createMenuPage();
                document.getElementById("menu-btn").classList.add("active");
                break;
            case "About":
                createAboutPage();
                document.getElementById("about-btn").classList.add("active");
                break;
        }
    }

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            setActiveTab(e.target.innerText);
        });
    });
    setActiveTab("Home");

});