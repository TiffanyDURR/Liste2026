import { cadeaux } from "./data.js";
let dataCadeaux = [];
dataCadeaux = cadeaux;

const giftslistContainer = document.getElementById("giftslist");
const tiffany = document.getElementById("tiffany");
let totalGifts = dataCadeaux.length;
const prixDecroissant = document.getElementById("prix-decroissant");
const prixCroissant = document.getElementById("prix-croissant");
const tagContainer = document.getElementById("categorie");
const closeButton = document.getElementById("close");
const selectedFilterContainer = document.querySelector(".selected-filtre");
const filterNameContainer = document.getElementById("filter");
const etoilesContainer = document.querySelector(".etoiles");
let tagID;
let etoilesID;
let filteredCadeaux = [...cadeaux];

function displaynumber() {
  tiffany.innerHTML = `${totalGifts} objets sur ma liste`;
}

function displayCadeaux() {
  displaynumber();
  giftslistContainer.innerHTML = dataCadeaux.map(
    (cadeau) => `
            <article>
           <a href="${cadeau.lien}" target="_blank">
            <img src="${cadeau.image}"/>
            <h3>${cadeau.titre}</h3>
            <h4 class="marque">${cadeau.marque}</h4>
            <span class="tag">${cadeau.tag}</span>
            <div class="stars">${cadeau.etoiles}</div>
            <h4 class="prix">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
  
          <path
            d="M192 160L192 144C192 99.8 278 64 384 64C490 64 576 99.8 576 144L576 160C576 190.6 534.7 217.2 474 230.7C471.6 227.9 469.1 225.2 466.6 222.7C451.1 207.4 431.1 195.8 410.2 187.2C368.3 169.7 313.7 160.1 256 160.1C234.1 160.1 212.7 161.5 192.2 164.2C192 162.9 192 161.5 192 160.1zM496 417L496 370.8C511.1 366.9 525.3 362.3 538.2 356.9C551.4 351.4 564.3 344.7 576 336.6L576 352C576 378.8 544.5 402.5 496 417zM496 321L496 288C496 283.5 495.6 279.2 495 275C510.5 271.1 525 266.4 538.2 260.8C551.4 255.2 564.3 248.6 576 240.5L576 255.9C576 282.7 544.5 306.4 496 320.9zM64 304L64 288C64 243.8 150 208 256 208C362 208 448 243.8 448 288L448 304C448 348.2 362 384 256 384C150 384 64 348.2 64 304zM448 400C448 444.2 362 480 256 480C150 480 64 444.2 64 400L64 384.6C75.6 392.7 88.5 399.3 101.8 404.9C143.7 422.4 198.3 432 256 432C313.7 432 368.3 422.3 410.2 404.9C423.4 399.4 436.3 392.7 448 384.6L448 400zM448 480.6L448 496C448 540.2 362 576 256 576C150 576 64 540.2 64 496L64 480.6C75.6 488.7 88.5 495.3 101.8 500.9C143.7 518.4 198.3 528 256 528C313.7 528 368.3 518.3 410.2 500.9C423.4 495.4 436.3 488.7 448 480.6z"
          />
        </svg>
            ${cadeau.prix}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
  
          <path
            d="M192 160L192 144C192 99.8 278 64 384 64C490 64 576 99.8 576 144L576 160C576 190.6 534.7 217.2 474 230.7C471.6 227.9 469.1 225.2 466.6 222.7C451.1 207.4 431.1 195.8 410.2 187.2C368.3 169.7 313.7 160.1 256 160.1C234.1 160.1 212.7 161.5 192.2 164.2C192 162.9 192 161.5 192 160.1zM496 417L496 370.8C511.1 366.9 525.3 362.3 538.2 356.9C551.4 351.4 564.3 344.7 576 336.6L576 352C576 378.8 544.5 402.5 496 417zM496 321L496 288C496 283.5 495.6 279.2 495 275C510.5 271.1 525 266.4 538.2 260.8C551.4 255.2 564.3 248.6 576 240.5L576 255.9C576 282.7 544.5 306.4 496 320.9zM64 304L64 288C64 243.8 150 208 256 208C362 208 448 243.8 448 288L448 304C448 348.2 362 384 256 384C150 384 64 348.2 64 304zM448 400C448 444.2 362 480 256 480C150 480 64 444.2 64 400L64 384.6C75.6 392.7 88.5 399.3 101.8 404.9C143.7 422.4 198.3 432 256 432C313.7 432 368.3 422.3 410.2 404.9C423.4 399.4 436.3 392.7 448 384.6L448 400zM448 480.6L448 496C448 540.2 362 576 256 576C150 576 64 540.2 64 496L64 480.6C75.6 488.7 88.5 495.3 101.8 500.9C143.7 518.4 198.3 528 256 528C313.7 528 368.3 518.3 410.2 500.9C423.4 495.4 436.3 488.7 448 480.6z"
          />
        </svg>
            </h4>
            <h5>${cadeau.boutique}</h5>
          </a>
        </article>
    `,
  );
}

displayCadeaux();

function displayTags() {
  let noDuplicate = [...new Set(dataCadeaux.map((cadeau) => cadeau.tag))];
  tagContainer.innerHTML = noDuplicate
    .map(
      (tag) => `
  <li id="${tag}">${tag}</li>
  `,
    )
    .join("");
}

displayTags();

function targetTagID() {
  tagContainer.addEventListener("click", (e) => {
    tagID = e.target.id;
    filterNameContainer.innerHTML = tagID;
    selectedFilterContainer.style.display = "flex";

    filteredCadeaux = dataCadeaux.filter((cadeau) => {
      return cadeau.tag.includes(tagID);
    });
    displayCadeaux(filteredCadeaux);

    if (filteredCadeaux.length <= 1) {
      tiffany.innerHTML = `${filteredCadeaux.length} objet`;
    }
    if (filteredCadeaux.length > 1) {
      tiffany.innerHTML = `${filteredCadeaux.length} objets`;
    }
    giftslistContainer.innerHTML = filteredCadeaux
      .map(
        (cadeau) => `
         <article>
           <a href="${cadeau.lien}" target="_blank">
            <img src="${cadeau.image}"/>
            <h3>${cadeau.titre}</h3>
            <h4 class="marque">${cadeau.marque}</h4>
            <span class="tag">${cadeau.tag}</span>
            <div class="stars">${cadeau.etoiles}</div>
            <h4 class="prix">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
  
          <path
            d="M192 160L192 144C192 99.8 278 64 384 64C490 64 576 99.8 576 144L576 160C576 190.6 534.7 217.2 474 230.7C471.6 227.9 469.1 225.2 466.6 222.7C451.1 207.4 431.1 195.8 410.2 187.2C368.3 169.7 313.7 160.1 256 160.1C234.1 160.1 212.7 161.5 192.2 164.2C192 162.9 192 161.5 192 160.1zM496 417L496 370.8C511.1 366.9 525.3 362.3 538.2 356.9C551.4 351.4 564.3 344.7 576 336.6L576 352C576 378.8 544.5 402.5 496 417zM496 321L496 288C496 283.5 495.6 279.2 495 275C510.5 271.1 525 266.4 538.2 260.8C551.4 255.2 564.3 248.6 576 240.5L576 255.9C576 282.7 544.5 306.4 496 320.9zM64 304L64 288C64 243.8 150 208 256 208C362 208 448 243.8 448 288L448 304C448 348.2 362 384 256 384C150 384 64 348.2 64 304zM448 400C448 444.2 362 480 256 480C150 480 64 444.2 64 400L64 384.6C75.6 392.7 88.5 399.3 101.8 404.9C143.7 422.4 198.3 432 256 432C313.7 432 368.3 422.3 410.2 404.9C423.4 399.4 436.3 392.7 448 384.6L448 400zM448 480.6L448 496C448 540.2 362 576 256 576C150 576 64 540.2 64 496L64 480.6C75.6 488.7 88.5 495.3 101.8 500.9C143.7 518.4 198.3 528 256 528C313.7 528 368.3 518.3 410.2 500.9C423.4 495.4 436.3 488.7 448 480.6z"
          />
        </svg>
            ${cadeau.prix}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
  
          <path
            d="M192 160L192 144C192 99.8 278 64 384 64C490 64 576 99.8 576 144L576 160C576 190.6 534.7 217.2 474 230.7C471.6 227.9 469.1 225.2 466.6 222.7C451.1 207.4 431.1 195.8 410.2 187.2C368.3 169.7 313.7 160.1 256 160.1C234.1 160.1 212.7 161.5 192.2 164.2C192 162.9 192 161.5 192 160.1zM496 417L496 370.8C511.1 366.9 525.3 362.3 538.2 356.9C551.4 351.4 564.3 344.7 576 336.6L576 352C576 378.8 544.5 402.5 496 417zM496 321L496 288C496 283.5 495.6 279.2 495 275C510.5 271.1 525 266.4 538.2 260.8C551.4 255.2 564.3 248.6 576 240.5L576 255.9C576 282.7 544.5 306.4 496 320.9zM64 304L64 288C64 243.8 150 208 256 208C362 208 448 243.8 448 288L448 304C448 348.2 362 384 256 384C150 384 64 348.2 64 304zM448 400C448 444.2 362 480 256 480C150 480 64 444.2 64 400L64 384.6C75.6 392.7 88.5 399.3 101.8 404.9C143.7 422.4 198.3 432 256 432C313.7 432 368.3 422.3 410.2 404.9C423.4 399.4 436.3 392.7 448 384.6L448 400zM448 480.6L448 496C448 540.2 362 576 256 576C150 576 64 540.2 64 496L64 480.6C75.6 488.7 88.5 495.3 101.8 500.9C143.7 518.4 198.3 528 256 528C313.7 528 368.3 518.3 410.2 500.9C423.4 495.4 436.3 488.7 448 480.6z"
          />
        </svg>
            </h4>
            <h5>${cadeau.boutique}</h5>
          </a>
        </article>
    `,
      )
      .join("");
  });
  closeButton.addEventListener("click", () => {
    displayCadeaux();
    selectedFilterContainer.style.display = "none";
  });
}

targetTagID();

function targetEtoilesID() {
  etoilesContainer.addEventListener("click", (e) => {
    etoilesID = e.target.id;
    if (etoilesID === "uneetoile") {
      filterNameContainer.innerHTML = ` <img src="assets/1etoile.jpg"/>`;
    }
    if (etoilesID === "quatreetoiles") {
      filterNameContainer.innerHTML = ` <img src="assets/4etoiles.jpg"/>`;
    }
    if (etoilesID === "troisetoiles") {
      filterNameContainer.innerHTML = ` <img src="assets/3etoiles.jpg"/>`;
    }
    if (etoilesID === "deuxetoiles") {
      filterNameContainer.innerHTML = ` <img src="assets/2etoiles.jpg"/>`;
    }
    if (etoilesID === "cinqetoiles") {
      filterNameContainer.innerHTML = ` <img src="assets/5etoiles.jpg"/>`;
    }

    selectedFilterContainer.style.display = "flex";

    filteredCadeaux = dataCadeaux.filter((cadeau) => {
      return cadeau.notation.includes(etoilesID);
    });
    displayCadeaux(filteredCadeaux);

    if (filteredCadeaux.length <= 1) {
      tiffany.innerHTML = `${filteredCadeaux.length} objet`;
    }
    if (filteredCadeaux.length > 1) {
      tiffany.innerHTML = `${filteredCadeaux.length} objets`;
    }
    giftslistContainer.innerHTML = filteredCadeaux
      .map(
        (cadeau) => `
         <article>
           <a href="${cadeau.lien}" target="_blank">
            <img src="${cadeau.image}"/>
            <h3>${cadeau.titre}</h3>
            <h4 class="marque">${cadeau.marque}</h4>
            <span class="tag">${cadeau.tag}</span>
            <div class="stars">${cadeau.etoiles}</div>
            <h4 class="prix">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
  
          <path
            d="M192 160L192 144C192 99.8 278 64 384 64C490 64 576 99.8 576 144L576 160C576 190.6 534.7 217.2 474 230.7C471.6 227.9 469.1 225.2 466.6 222.7C451.1 207.4 431.1 195.8 410.2 187.2C368.3 169.7 313.7 160.1 256 160.1C234.1 160.1 212.7 161.5 192.2 164.2C192 162.9 192 161.5 192 160.1zM496 417L496 370.8C511.1 366.9 525.3 362.3 538.2 356.9C551.4 351.4 564.3 344.7 576 336.6L576 352C576 378.8 544.5 402.5 496 417zM496 321L496 288C496 283.5 495.6 279.2 495 275C510.5 271.1 525 266.4 538.2 260.8C551.4 255.2 564.3 248.6 576 240.5L576 255.9C576 282.7 544.5 306.4 496 320.9zM64 304L64 288C64 243.8 150 208 256 208C362 208 448 243.8 448 288L448 304C448 348.2 362 384 256 384C150 384 64 348.2 64 304zM448 400C448 444.2 362 480 256 480C150 480 64 444.2 64 400L64 384.6C75.6 392.7 88.5 399.3 101.8 404.9C143.7 422.4 198.3 432 256 432C313.7 432 368.3 422.3 410.2 404.9C423.4 399.4 436.3 392.7 448 384.6L448 400zM448 480.6L448 496C448 540.2 362 576 256 576C150 576 64 540.2 64 496L64 480.6C75.6 488.7 88.5 495.3 101.8 500.9C143.7 518.4 198.3 528 256 528C313.7 528 368.3 518.3 410.2 500.9C423.4 495.4 436.3 488.7 448 480.6z"
          />
        </svg>
            ${cadeau.prix}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
  
          <path
            d="M192 160L192 144C192 99.8 278 64 384 64C490 64 576 99.8 576 144L576 160C576 190.6 534.7 217.2 474 230.7C471.6 227.9 469.1 225.2 466.6 222.7C451.1 207.4 431.1 195.8 410.2 187.2C368.3 169.7 313.7 160.1 256 160.1C234.1 160.1 212.7 161.5 192.2 164.2C192 162.9 192 161.5 192 160.1zM496 417L496 370.8C511.1 366.9 525.3 362.3 538.2 356.9C551.4 351.4 564.3 344.7 576 336.6L576 352C576 378.8 544.5 402.5 496 417zM496 321L496 288C496 283.5 495.6 279.2 495 275C510.5 271.1 525 266.4 538.2 260.8C551.4 255.2 564.3 248.6 576 240.5L576 255.9C576 282.7 544.5 306.4 496 320.9zM64 304L64 288C64 243.8 150 208 256 208C362 208 448 243.8 448 288L448 304C448 348.2 362 384 256 384C150 384 64 348.2 64 304zM448 400C448 444.2 362 480 256 480C150 480 64 444.2 64 400L64 384.6C75.6 392.7 88.5 399.3 101.8 404.9C143.7 422.4 198.3 432 256 432C313.7 432 368.3 422.3 410.2 404.9C423.4 399.4 436.3 392.7 448 384.6L448 400zM448 480.6L448 496C448 540.2 362 576 256 576C150 576 64 540.2 64 496L64 480.6C75.6 488.7 88.5 495.3 101.8 500.9C143.7 518.4 198.3 528 256 528C313.7 528 368.3 518.3 410.2 500.9C423.4 495.4 436.3 488.7 448 480.6z"
          />
        </svg>
            </h4>
            <h5>${cadeau.boutique}</h5>
          </a>
        </article>
    `,
      )
      .join("");
  });
  closeButton.addEventListener("click", () => {
    displayCadeaux();
    selectedFilterContainer.style.display = "none";
  });
}

targetEtoilesID();

function filterByPrice() {
  prixCroissant.addEventListener("click", () => {
    selectedFilterContainer.style.display = "flex";
    filterNameContainer.innerHTML = "Prix Croissant";
    dataCadeaux.sort((a, b) => Number(a.prix) - Number(b.prix));
    displayCadeaux();
    closeButton.addEventListener("click", () => {
      displayCadeaux();
      selectedFilterContainer.style.display = "none";
    });
  });

  prixDecroissant.addEventListener("click", () => {
    selectedFilterContainer.style.display = "flex";
    filterNameContainer.innerHTML = "Prix Décroissant";
    dataCadeaux.sort((a, b) => Number(b.prix) - Number(a.prix));
    displayCadeaux();
    closeButton.addEventListener("click", () => {
      displayCadeaux();
      selectedFilterContainer.style.display = "none";
    });
  });
}

filterByPrice();
