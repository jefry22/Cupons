const containerCardProduct = document.querySelector(".container-card-product");
const btnCupons = document.querySelector('.btnCupons');
btnCupons.addEventListener('click',cuoponsDiscount);


const product = [
  {
    id:'A1',
    nameproduct: "MSI Titan GT77 12UHS-02ES",
    img: "https://oechsle.vteximg.com.br/arquivos/ids/8995338-1000-1000/2033816.jpg?v=637899012031130000",
    price: 4000,
  },
  {
    id:'A2',
    nameproduct:
      'Laptop ASUS Zenbook 13 OLED 13.3" UM325UA-KG150W Ryzen 7 16GB RAM 512GB SSD Grey',
    img: "https://oechsle.vteximg.com.br/arquivos/ids/9660533-1000-1000/2091554--1-.jpg?v=637933512305200000",
    price: 4499,
  },
  {
    id:'A3',
    nameproduct:
      'Laptop Gamer ROG Strix G15 G513RC 15.6" R7-6800H 16GB RAM 512GB SSD 4GB Video RTX3050',
    img: "https://oechsle.vteximg.com.br/arquivos/ids/8965100-1500-1500/2070372.jpg?v=637897332985100000",
    price: 5999,
  },
  {
    id:'A4',
    nameproduct:
      'Laptop Acer Aspire 3 15.6" Intel Core i7 8GB RAM 512GB SSD 2GB Video',
    img: "https://oechsle.vteximg.com.br/arquivos/ids/10623419-1000-1000/1877487_1.jpg?v=637962952382800000",
    price: 2899,
  },
];

const cuopons = [
    {nickCupons:'JuanDc_es_batman',discount:30},
    {nickCupons:'Jefry_10',discount:25},
    {nickCupons:'Alianza_lima',discount:35},
    {nickCupons:'Furia',discount:40}
];


function viewProduct() {
  for (const key of product) {
    const cardProduct = document.createElement("div");
    cardProduct.classList.add("card-product");
    const img = document.createElement('img');
    img.setAttribute('src',key.img);
    cardProduct.append(img);
    containerCardProduct.append(cardProduct);
  }
}
viewProduct()

function cuoponsDiscount(){
    const searchCupons = document.querySelector('#cuopons');
    const precieProduct = document.querySelector('.price-product');
    let productDiscount;
    let newPrice=[];
    const priceProduct = product.map(function(productPrice){
        return productPrice.price;
    });
   
    for (let i = 0; i < cuopons.length; i++) {
        if(cuopons[i].nickCupons == searchCupons.value){
            productDiscount = cuopons[i].discount;
            break;
        }
    }
    
    for(let c=0 ; c<priceProduct.length;c++){
            const discount = (priceProduct[c]*(100-productDiscount))/100;
            newPrice.push(discount);
    }

    precieProduct.innerText = ` El nuevo costo con descuento $ ${newPrice[0]}`;
    precieProduct.style.color='red';
    
}

