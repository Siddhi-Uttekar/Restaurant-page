import './style.css';
import pizzaImage from './pizza_img.webp';

export default function makeHomePage() {
    const homePage = document.createElement("div");
    homePage.id = "homePage";

    const title = document.createElement("div");
    title.id = "title";
    title.textContent = "Welcome to Our Restaurant Pizzerias!";
    title.classList.add("title-text");

    const introinfo = document.createElement("div");
    introinfo.id = "introinfo";
    const IntroPara = document.createElement('p');
    IntroPara.textContent = "Welcome to our cozy pizza restaurant, where every slice tells a delicious story! Whether you're craving a classic Margherita or adventurous with our specialty toppings, we promise a slice of perfection in every bite. Join us for a culinary journey where our handcrafted pizzas, made from the finest ingredients and baked to perfection, await to delight your taste buds. From our kitchen to your table, experience the essence of authentic flavors and warm hospitality at our pizza paradise.";

    const imgElement = document.createElement('img');
    imgElement.src = pizzaImage;


    homePage.appendChild(title);
    introinfo.appendChild(IntroPara);
    homePage.appendChild(introinfo);
    homePage.appendChild(imgElement);


    return homePage;
}
