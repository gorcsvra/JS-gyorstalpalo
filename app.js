const vegburger=document.getElementById('vegburger')
const nav = document.getElementById('nav')

vegburger.addEventListener('click', function (){
    nav.classList.toggle('menu-active')
vegburger.classList.toggle('fi-align-justyfy')
vegburger.classList.toggle('fi-arrow-left')

})
/*
//adattípusok
//számok
//const=number1=5
//const=number2=7
//number1+number2
//number1*number2

//stringek
//const greeting ='Szöveg"

//boolen
//const inStock = true

//tömb 

//objektum
*/

//ez általában egy backendről jön
const products = [
{
name:'Málna',
picture:'malna.jpg',
description: "Kézzel termelt egészség",
price: 3800,
instock: true
},
{
name:'Áfonya',
picture:'áfonya.jpg',
description: "Kézzel termelt egészség",
price: 3250,
instock: true
},
{
name:'Szeder',
picture:'szeder.jpg',
description:"Kézzel termelt egészség",
price: 1700,
instock: true,
variations: ['fehér', 'fekete']
},
]


const productSection = document.getElementById('products');
//TODO: inStock, variations//
productSection.innerHTML = `<div>
    <h2>${products[0].name}</h2>
    <p>${products[0].description}</p>
    <img src="./img/${products[0].picture}">
    <h3>${products[0].price}Ft</h3>
    <a href="a">Kosárba</a>
</div>`//
