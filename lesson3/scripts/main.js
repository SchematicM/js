// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
document.write(`<h2> За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині </h2>`);
for(let i = 0; i<10; i++){
    document.write(`
    <div>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, id?
</div>`)
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
document.write(`<h2> За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині </h2>`);
for(let i = 0; i<10; i++){
    document.write(`
    <div>
    index : ${i} - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, id?
</div>`)
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
document.write(`<h2> За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині. </h2>`);
let iter =0;
while (iter<20){
    document.write(`
    <h1>
    Lorem ipsum dolor sit amet.
</h1>`)
    iter++;
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
document.write(`<h2> За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.</h2>`);
let index = 0;
while (index<20){
    document.write(`
    <h1>
    index : ${index} - Lorem ipsum dolor sit amet.
</h1>`)
    index++;
}
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
    let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
document.write(`<h2> Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону</h2>`);
document.write('<ul>');
for (let skill of listOfItems){
        document.write(`<li>${skill}</li>`);
}
document.write('</ul>');
// -----------------------------------------------
//
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
//
// implemented in products.html, products.cs/products_media.css & products.js
// --------------------
//     є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

document.write(`<h2>за допомоги циклу вивести: користувачів зі статусом true</h2>`);

document.write('<ul>');
for (let user of users){
    if(user.status){
        document.write(`<li>name: ${user.name}  age: ${user.age}  status: ${user.status}</li>`);
    }
}
document.write('</ul>');

document.write(`<h2>за допомоги циклу вивести: користувачів зі статусом false</h2>`);
document.write('<ul>');
for (let user of users){
    if(!user.status){
        document.write(`<li>name: ${user.name}  age: ${user.age}  status: ${user.status}</li>`);
    }
}
document.write('</ul>');

document.write(`<h2>за допомоги циклу вивести: користувачів які старші за 30 років</h2>`);
document.write('<ul>');
for (let user of users){
    if(user.age>30){
        document.write(`<li>name: ${user.name}  age: ${user.age}  status: ${user.status}</li>`);
    }
}
document.write('</ul>');

