 function createAboutPage() {
    const content = document.getElementById("content");

    const heading = document.createElement("h1");
    heading.textContent = "About Us";
    
    const para1 = document.createElement("p");
    para1.textContent = "At Sambar Symphony & Rasam Republic (SSRR), we believe that great food is more than just a meal—it's a story passed down through generations. Our kitchen is a tribute to Tamil Nadu’s rich culinary heritage, where every dosa is golden, every filter coffee is frothy, and every meal is served with love.";

    const para2 = document.createElement("p");
    para2.textContent = "Inspired by the bustling streets of Chennai and the aromatic kitchens of Madurai, we bring you flavors that are bold, authentic, and unforgettable. From our crispy ghee roast dosas to the tangy kick of our Chettinad curries, every dish is a journey through South India.";

    const para3 = document.createElement("p");
    para3.textContent = "Whether you’re here for a quick bite or a feast fit for a king, SSRR welcomes you with open arms, banana leaves, and a hearty dose of Tamil hospitality. Because here, every meal comes with a side of tradition and a sprinkle of joy.";


    content.appendChild(heading);
    content.appendChild(para1);
    content.appendChild(para2);
    content.appendChild(para3);
}

export default createAboutPage;