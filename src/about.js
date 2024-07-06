import "./style.css";

export default function makeAboutPage() {
    const aboutPage = document.createElement("div");
    aboutPage.id = "aboutPage";

    // Title
    const aboutTitle = document.createElement("h2");
    aboutTitle.textContent = "About Our Pizza Restaurant";

    // Introduction Paragraph
    const aboutIntro = document.createElement("p");
    aboutIntro.textContent = "Welcome to our cozy pizza restaurant, where every slice tells a delicious story! Whether you're craving a classic Margherita or adventurous with our specialty toppings, we promise a slice of perfection in every bite. Join us for a culinary journey where our handcrafted pizzas, made from the finest ingredients and baked to perfection, await to delight your taste buds. From our kitchen to your table, experience the essence of authentic flavors and warm hospitality at our pizza paradise.";

    // History Section
    const historyTitle = document.createElement("h3");
    historyTitle.textContent = "Our History";

    const historyText = document.createElement("p");
    historyText.textContent = "Founded in 2000 by passionate food enthusiasts, our pizza restaurant started as a small family-owned business in the heart of Pune. Over the years, we have grown into a beloved local establishment known for our commitment to quality, flavor, and customer satisfaction. Today, we continue to uphold our tradition of excellence, serving delicious pizzas made with love and care.";


    const missionTitle = document.createElement("h3");
    missionTitle.textContent = "Our Mission";

    const missionText = document.createElement("p");
    missionText.textContent = "At Pizzerias, our mission is to create memorable dining experiences through exceptional food and hospitality. We strive to source the freshest ingredients, support local suppliers, and innovate in our culinary offerings. Whether you're dining in, ordering takeout, or catering an event, we aim to exceed your expectations with every slice.";


    aboutPage.appendChild(aboutTitle);
    aboutPage.appendChild(aboutIntro);
    aboutPage.appendChild(historyTitle);
    aboutPage.appendChild(historyText);
    aboutPage.appendChild(missionTitle);
    aboutPage.appendChild(missionText);

    return aboutPage;
}
