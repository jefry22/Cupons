const containerCardProduct = document.querySelector(".container-card-product");
const btnCupons = document.querySelector(".btnCupons");
btnCupons.addEventListener("click", cuoponsDiscount);

const product = [
  {
    id: "A1",
    nameproduct: "MSI Titan GT77 12UHS-02ES",
    img: "https://oechsle.vteximg.com.br/arquivos/ids/8995338-1000-1000/2033816.jpg?v=637899012031130000",
    price: 4000,
  },
  {
    id: "A2",
    nameproduct:
      'Laptop ASUS Zenbook 13 OLED 13.3" UM325UA-KG150W Ryzen 7 16GB RAM 512GB SSD Grey',
    img: "https://oechsle.vteximg.com.br/arquivos/ids/9660533-1000-1000/2091554--1-.jpg?v=637933512305200000",
    price: 4499,
  },
  {
    id: "A3",
    nameproduct:
      'Laptop Gamer ROG Strix G15 G513RC 15.6" R7-6800H 16GB RAM 512GB SSD 4GB Video RTX3050',
    img: "https://oechsle.vteximg.com.br/arquivos/ids/8965100-1500-1500/2070372.jpg?v=637897332985100000",
    price: 5999,
  },
  {
    id: "A4",
    nameproduct:
      'Laptop Acer Aspire 3 15.6" Intel Core i7 8GB RAM 512GB SSD 2GB Video',
    img: "https://oechsle.vteximg.com.br/arquivos/ids/10623419-1000-1000/1877487_1.jpg?v=637962952382800000",
    price: 2899,
  },
];
// CREACION DE CARD CONTAINER 
function viewProduct() {
  const priceProduct = document.querySelector(".price-product");
  const prices = [];
  for (const key of product) {
    const cardProduct = document.createElement("div");
    cardProduct.classList.add("card-product");
    const img = document.createElement("img");
    img.setAttribute("src", key.img);
    cardProduct.append(img);
    prices.push(key.price);
    containerCardProduct.append(cardProduct);
  }
  priceProduct.innerText = `$ ${prices[0]}`;
}
viewProduct();

// Ticket de Cuopons
const cuopons = [
  { nickCupons: "JuanDc_es_batman", discount: 30 },
  { nickCupons: "Jefry_10", discount: 25 },
  { nickCupons: "Alianza_lima", discount: 35 },
  { nickCupons: "Furia", discount: 40 },
];
const nameCupons = cuopons.map((ticket) => ticket.nickCupons).flat();
// console.log(nameCupons);
const valueCupons = cuopons.flatMap(
  (discountProduct) => discountProduct.discount
);
// console.log(valueCupons);
const pricesProduct = product.flatMap((prices) => prices.price);

// DISCOUNT CUOPONS
function cuoponsDiscount() {
  const searchCupons = document.querySelector("#cuopons");
  const precieProduct = document.querySelector(".price-product");
  let discount;

  if (nameCupons.includes(searchCupons.value)) {
    for (i = 0; i < nameCupons.length; i++) {
      // console.log(nameCupons[i]);
      // console.log(valueCupons[i]);
      if (nameCupons[i] == searchCupons.value) {
        discount = valueCupons[i];
      }
    }
  } else {
    precieProduct.innerText = `El cupon no es valido gracias`;
    precieProduct.style.color = "red";
    return;
  }

  const discountCupons = (pricesProduct[0] * (100 - discount)) / 100;
  precieProduct.innerText = `El nuevo valor con descuento es: $${discountCupons}`;
  precieProduct.style.color = "green";
}
