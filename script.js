AOS.init();

const members = [
    {
        name: "Christopher Pottes",
        age: 32,
        idol: "Renato Portaluppi",
        match: "Final Copa do Brasil 2016 Grêmio 1 x 1 Atlético Mineiro",
        img: "./src/images/members/christopher.jpg",
        insta: "https://www.instagram.com/chriistopherp?igsh=MXd6eW9jMmJ6Y3gxdQ=="
    },
    {
        name: "Daniel Jaekel",
        age: 32,
        idol: "Renato Portaluppi",
        match: "Final Copa do Brasil 2016 Grêmio 1 x 1 Atlético Mineiro",
        img: "./src/images/members/daniel.jpg",
        insta: "https://www.instagram.com/danieljaekel?igsh=NGxsd2thcm0wdnFq"
    },
    {
        name: "Gilberto Xavier",
        age: 33,
        idol: "Renato Portaluppi",
        match: "Final Copa do Brasil 2016 Grêmio 1 x 1 Atlético Mineiro",
        img: "./src/images/members/gilberto.jpg",
        insta: "https://www.instagram.com/ogilbertosx?igsh=ajRreGxibjlwbWpi"
    },
    {
        name: "Lelo Greco",
        age: 34,
        idol: "Renato Portaluppi",
        match: "Final Copa Libertadores 2017 Grêmio 1 x 0 Lanús",
        img: "./src/images/members/lelo.jpg",
        insta: "https://www.instagram.com/lelogreco?igsh=NTZzZ2k4ajBhamRz"
    },
    {
        name: "Leon Amaral",
        age: 36,
        idol: "Danrlei",
        match: "Campeonato Brasileiro 1996 Grêmio 2 x 1 Portuguesa",
        img: "./src/images/members/leon.jpg",
        insta: "https://www.instagram.com/leon_amaral?igsh=MWZodXo0b3h4emtxZw=="
    }
];

const cards = document.querySelector('.cards');


function createCard() {

    members.forEach((item) => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("cards__content");

        const linkElement = document.createElement("a");
        linkElement.href = item.insta;
        linkElement.target = "_blank"

        const imgElement = document.createElement("img");
        imgElement.src = item.img;
        imgElement.alt = item.name;

        const descriptionElement = document.createElement("div");

        const titleElement = document.createElement("h3");
        titleElement.textContent = item.name;

        const textElement = document.createElement("p");
        textElement.innerHTML = `
            Idade: ${item.age} <br>
            Ídolo: ${item.idol} <br>
            Jogo marcante:<br>
            ${item.match}
        `;

        linkElement.appendChild(imgElement);

        descriptionElement.appendChild(titleElement);
        descriptionElement.appendChild(textElement);

        cardElement.appendChild(linkElement);
        cardElement.appendChild(descriptionElement);


        cards.appendChild(cardElement);

    })
}

createCard();
