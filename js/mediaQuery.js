const img1 = document.createElement("img");
img1.setAttribute("src", "assets/Refactory-artikelContent-jan3-04-02.png");
const img2 = document.createElement("img");
img2.setAttribute("src", "assets/Refactory-artikelContent-jan2-09-02.png");
const img3 = document.createElement("img");
img3.setAttribute("src", "assets/Refactory-artikelContent-jan2-08-02.png");
const img4 = document.createElement("img");
img4.setAttribute("src", "assets/Ilustrasi-Web-1200x675-19-Januari-2021.jpg");
const img5 = document.createElement("img");
img5.setAttribute(
  "src",
  "assets/Ilustrasi-Web-1200x675-Beberapa-Rekomendasi-Film-Terkait-Pemrograman.jpg"
);
const img6 = document.createElement("img");
img6.setAttribute(
  "src",
  "assets/Ilustrasi-Web-1200x675-Belajar-Pemrograman-Melalui-10-Game-Berikut.jpg"
);

function mediaQuerySm(sm) {
  if (sm.matches) {
    let cards = document.getElementById("mobile-card").childNodes;
    let desktopCard = document.getElementById("desktop-card");

    for (let i = 0; i < cards.length; i++) {
      document.getElementById("mobile-card").removeChild(cards[i]);
    }

    let firstCard = document.createElement("div");
    firstCard.appendChild(img1);
    firstCard.appendChild(img2);
    firstCard.appendChild(img3);
    firstCard.classList.add("carousel-item");
    firstCard.classList.add("active");

    let secondCard = document.createElement("div");
    secondCard.appendChild(img4);
    secondCard.appendChild(img5);
    secondCard.appendChild(img6);
    secondCard.classList.add("carousel-item");

    desktopCard.appendChild(firstCard);
    desktopCard.appendChild(secondCard);
  } else {
    let cards = document.getElementById("desktop-card").childNodes;
    let mobileCard = document.getElementById("mobile-card");

    for (let i = 0; i < cards.length; i++) {
      document.getElementById("desktop-card").removeChild(cards[i]);
    }

    let card1 = document.createElement("div");
    card1.appendChild(img1);
    card1.classList.add("carousel-item");
    card1.classList.add("active");

    let card2 = document.createElement("div");
    card2.appendChild(img2);
    card2.classList.add("carousel-item");

    let card3 = document.createElement("div");
    card3.appendChild(img3);
    card3.classList.add("carousel-item");

    let card4 = document.createElement("div");
    card4.appendChild(img4);
    card4.classList.add("carousel-item");

    let card5 = document.createElement("div");
    card5.appendChild(img5);
    card5.classList.add("carousel-item");

    let card6 = document.createElement("div");
    card6.appendChild(img6);
    card6.classList.add("carousel-item");

    mobileCard.appendChild(card1);
    mobileCard.appendChild(card2);
    mobileCard.appendChild(card3);
    mobileCard.appendChild(card4);
    mobileCard.appendChild(card5);
    mobileCard.appendChild(card6);
  }
}

let sm = window.matchMedia("(min-width: 768px)");
mediaQuerySm(sm);
sm.addEventListener("change", mediaQuerySm);
