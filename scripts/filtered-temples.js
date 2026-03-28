document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("open");
    hambutton.classList.toggle("open");
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Temple of Belem",
    location: "Belem, Brazil",
    dedicated: "20 November 2022",
    area: 27000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/belem-brazil-temple/belem-brazil-temple-31306.jpg"  
  },
  {
    templeName: "Temple of Campinas",
    location: "Campinas, Brazil",
    dedicated: "17 May 2002",
    area: 49100,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/campinas-brazil-temple/campinas-brazil-temple-6012-main.jpg"
  },
  {
    templeName: "Temple of São Paulo",
    location: "São Paulo, Brazil",
    dedicated: "30 October 1978",
    area: 59246,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/017-São-Paulo-Brazil-Temple.jpg"
  }
];

function createTempleCards(filteredTemples) {
    document.querySelector(".res-grid").innerHTML = "";

    for (let i = 0; i < filteredTemples.length; i++) {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");



        name.textContent = filteredTemples[i].templeName;
        location.innerHTML = `<span class="label">Location:</span> ${filteredTemples[i].location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${filteredTemples[i].dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${filteredTemples[i].area} sq ft`;
        img.setAttribute("src", filteredTemples[i].imageUrl);
        img.setAttribute("alt", `${filteredTemples[i].templeName} Temple`);
        img.setAttribute("loading", "lazy");



        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".res-grid").appendChild(card);
    }
}

createTempleCards(temples);

const homeButton = document.getElementById("home");
const oldButton = document.getElementById("old");
const newButton = document.getElementById("new");
const largeButton = document.getElementById("large");
const smallButton = document.getElementById("small");
const mainTitle = document.querySelector("main h2");

homeButton.addEventListener("click", function() {
    createTempleCards(temples);
    mainTitle.textContent = "Home";
});

oldButton.addEventListener("click", function() {
    const oldTemples = temples.filter(function(temple) {
        let dateParts = temple.dedicated.split(",");
        let yearString = "";
        
        if (dateParts.length > 1) {
            yearString = dateParts[0];
        } else {
            let spaceParts = temple.dedicated.split(" ");
            yearString = spaceParts[2];
        }

        let year = parseInt(yearString);
        return year < 1900;
    });
    createTempleCards(oldTemples);
    mainTitle.textContent = "Old";
});

newButton.addEventListener("click", function() {
    const newTemples = temples.filter(function(temple) {
        let dateParts = temple.dedicated.split(",");
        let yearString = "";
        
        if (dateParts.length > 1) {
            yearString = dateParts[0];
        } else {
            let spaceParts = temple.dedicated.split(" ");
            yearString = spaceParts[2];
        }

        let year = parseInt(yearString);
        return year > 2000;
    });
    createTempleCards(newTemples);
    mainTitle.textContent = "New";
});

largeButton.addEventListener("click", function() {
    const largeTemples = temples.filter(function(temple) {
        return temple.area > 90000;
    });
    createTempleCards(largeTemples);
    mainTitle.textContent = "Large";
});

smallButton.addEventListener("click", function() {
    const smallTemples = temples.filter(function(temple) {
        return temple.area < 10000;
    });
    createTempleCards(smallTemples);
    mainTitle.textContent = "Small";
});

