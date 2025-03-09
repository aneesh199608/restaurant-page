function createMenuPage() {
    const content = document.getElementById("content");
    
    const heading = document.createElement("h1");
    heading.textContent = "Our Naatu Specials";

    const para = document.createElement("p");
    para.textContent = "Choose from authentic Ooty, Chennai and Trichy dishes";

    const menuList = document.createElement("div");
    menuList.classList.add("menu-list");

    const menuItems = [
        { name: "Crispy Ghee Roast Dosa", description: "A golden, crispy dosa with rich ghee aroma.", price: "₹150" },
        { name: "Chettinad Chicken Curry", description: "Spicy, flavorful, and cooked with aromatic spices.", price: "₹250" },
        { name: "Madurai Jigarthanda", description: "A chilled dessert drink with almond, nannari syrup & ice cream.", price: "₹120" },
        { name: "Filter Coffee", description: "Strong South Indian filter coffee, frothy & aromatic.", price: "₹50" },
        { name: "Idiyappam with Coconut Stew", description: "Soft string hoppers served with rich coconut-based stew.", price: "₹180" },
        { name: "Banana Leaf Thali", description: "A grand Tamil meal with rice, sambar, rasam, poriyal & payasam.", price: "₹350" }
    ];

    menuItems.forEach((item) => {

        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        const itemName = document.createElement("h2");
        itemName.textContent = item.name;

        const itemDescription = document.createElement("p");
        itemDescription.textContent = item.description;

        const itemPrice = document.createElement("span");
        itemPrice.textContent = item.price;
        itemPrice.classList.add("price");

        menuItem.appendChild(itemName);
        menuItem.appendChild(itemDescription);
        menuItem.appendChild(itemPrice);

        menuList.appendChild(menuItem);
    });
    content.appendChild(heading);
    content.appendChild(menuList);
}

export default createMenuPage;