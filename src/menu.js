import "./style.css";

const menuItems = [
    {
        name: "Margherita Pizza",
        description: "Classic Italian pizza with tomato sauce, mozzarella cheese, and fresh basil.",
        price: 250
    },
    {
        name: "Pepperoni Pizza",
        description: "Traditional pizza topped with pepperoni slices and mozzarella cheese.",
        price: 280
    },
    {
        name: "Vegetarian Pizza",
        description: "Delicious combination of mushrooms, bell peppers, onions, olives, and mozzarella cheese.",
        price: 270
    },
    {
        name: "Hawaiian Pizza",
        description: "Sweet and savory pizza topped with pineapple, ham, and mozzarella cheese.",
        price: 300
    },
    {
        name: "Meat Lovers Pizza",
        description: "Hearty pizza loaded with pepperoni, sausage, bacon, and mozzarella cheese.",
        price: 320
    },
    {
        name: "Custom Pizza",
        description: "Create your own pizza with your choice of toppings!",
        price: "Price varies"
    },
    {
        name: "Tiramisu",
        description: "Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.",
        price: 150
    },
    {
        name: "Chocolate Lava Cake",
        description: "Rich and gooey chocolate cake with a molten chocolate center.",
        price: 180
    },
    {
        name: "Soft Drinks",
        description: "Various soft drinks available.",
        price: 50
    },
    {
        name: "Juices",
        description: "Fresh fruit juices.",
        price: 80
    },
    {
        name: "Coffee",
        description: "Hot brewed coffee.",
        price: 100
    }
];


export default function makeMenuPage() {
    const menuPage = document.createElement("div");
    menuPage.id = "menuPage";

    menuItems.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        const itemName = document.createElement("h3");
        itemName.textContent = item.name;

        const itemDescription = document.createElement("p");
        itemDescription.textContent = item.description;

        const itemPrice = document.createElement("p");
        itemPrice.textContent = `Price: ₹${item.price}`;

        menuItem.appendChild(itemName);
        menuItem.appendChild(itemDescription);
        menuItem.appendChild(itemPrice);

        menuPage.appendChild(menuItem);
    });

    return menuPage;
}
