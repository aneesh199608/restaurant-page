import heroImage from "./assets/hero-image.jpg";

function createHomePage() {
    const content = document.getElementById("content");
    
    const heading = document.createElement("h1");
    heading.textContent = "Sambar Symphony & Rasam Republic";

    const para = document.createElement("p");
    para.textContent = `Step into the land of filter coffee, crispy dosas, and flavors that make your
                        taste buds do the Bharatanatyam. At SSRR, we serve tradition with a side 
                        of humor—because great food should always come with great stories!`;

    const image = document.createElement("img");
    image.src = heroImage;
    image.alt = "Image of south indian dish";
    image.width = 600;

    content.appendChild(heading);
    content.appendChild(para);
    content.appendChild(image);
}

export default createHomePage;