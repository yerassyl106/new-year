const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    header.classList.add("red");
  } else {
    header.classList.remove("red");
  }
});

const products = {
  new: [
    {
      name: "Wine Bottle",
      price: 125,
      oldPrice: 140,
      image:
        "https://cdn.pixabay.com/photo/2013/07/12/16/28/wine-150955_1280.png",
      soldout: false,
    },
    {
      name: "Santa Bag",
      price: 155,
      oldPrice: 168,
      image:
        "https://i.pinimg.com/originals/b2/a8/eb/b2a8eb5d9dacb9003d90805811697bab.png",
      soldout: true,
    },
    {
      name: "Santa Cap",
      price: 230,
      oldPrice: 235,
      image: "https://pngimg.com/d/santa_hat_PNG61.png",
      soldout: false,
    },
    {
      name: "Foot Gloves",
      price: 60,
      oldPrice: null,
      image:
        "https://png.pngtree.com/png-vector/20241121/ourmid/pngtree-red-santa-gloves-bringing-warmth-and-joy-to-the-season-png-image_14503490.png",
      soldout: false,
    },
  ],
  featured: [
    {
      name: "Featured Item 1",
      price: 300,
      oldPrice: 350,
      image: "featured1.jpg",
      soldout: false,
    },
    {
      name: "Featured Item 2",
      price: 450,
      oldPrice: null,
      image: "featured2.jpg",
      soldout: false,
    },
  ],
  bestseller: [
    {
      name: "Bestseller 1",
      price: 500,
      oldPrice: 550,
      image: "bestseller1.jpg",
      soldout: true,
    },
    {
      name: "Bestseller 2",
      price: 600,
      oldPrice: 700,
      image: "bestseller2.jpg",
      soldout: false,
    },
  ],
};

function showTab(category) {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => tab.classList.remove("active"));
  document
    .querySelector(
      `.tab:nth-child(${Object.keys(products).indexOf(category) + 1})`
    )
    .classList.add("active");

  const container = document.getElementById("product-container");
  container.innerHTML = "";

  products[category].forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
          ${product.soldout ? '<div class="soldout">Soldout</div>' : ""}
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p class="price">£${product.price}.00 GBP</p>
          ${
            product.oldPrice
              ? `<p class="price-strike">£${product.oldPrice}.00 GBP</p>`
              : ""
          }
      `;
    container.appendChild(productDiv);
  });
}

// Show initial tab
showTab("new");
