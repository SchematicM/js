// 1. Створити пустий масив та :
let evenOddArray = [];
//     a. заповнити його 50 парними числами за допомоги циклу.
let even = 0;
for (let i = 0; i < 50; i++) {
    evenOddArray[i] = even;
    even += 2;
}

//     b. заповнити його 50 непарними числами за допомоги циклу.
let odd = 1;
for (let i = 50; i < 100; i++) {
    evenOddArray[i] = odd;
    odd += 2;
}
document.write(`<p>Array filled with even and odd numbers: ${evenOddArray}</p>`);


//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
randomArray = []
for (let i = 0; i < 20; i++) {
    randomArray[i] = Math.floor(Math.random() * 10);
}
document.write(`<p>Array filled with random numbers: ${randomArray}</p>`);


// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
randomArrayInInterval = []
min = Math.ceil(8);
max = Math.floor(732);
for (let i = 0; i < 20; i++) {
    randomArrayInInterval[i] = Math.floor(Math.random() * (max - min + 1) + min);
}
document.write(`<p>Array filled with random numbers in interval [${min} ${max}]: ${randomArrayInInterval}</p>`);


// 2. Вивести за допомогою console.log кожен третій елемент
console.log('Every 3rd element of evenOddArray: ');
console.log(evenOddArray);
for (let i = 0; i < evenOddArray.length; i += 3) {
    console.log(evenOddArray[i]);
}
console.log('Every 3rd element of  randomArray: ')
console.log(randomArray);
for (let i = 0; i < randomArray.length; i += 3) {
    console.log(randomArray[i]);
}

console.log('Every 3rd element of randomArrayInInterval: ');
console.log(randomArrayInInterval);
for (let i = 0; i < randomArrayInInterval.length; i += 3) {
    console.log(randomArrayInInterval[i]);
}

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
console.log('Every 3rd element of evenOddArray if it is even: ');
console.log(evenOddArray);
for (let i = 0; i < evenOddArray.length; i += 3) {
    if(evenOddArray[i]%2===0) {
        console.log(evenOddArray[i]);
    }
}
console.log('Every 3rd element of  randomArray if it is even: ')
console.log(randomArray);
for (let i = 0; i < randomArray.length; i += 3) {
    if (randomArray[i] % 2 === 0) {
        console.log(randomArray[i]);
    }
}

console.log('Every 3rd element of randomArrayInInterval if it is even: ');
console.log(randomArrayInInterval);
for (let i = 0; i < randomArrayInInterval.length; i += 3) {
    if(randomArrayInInterval[i]%2===0) {
        console.log(randomArrayInInterval[i]);
    }
}
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
console.log('Every 3rd element of evenOddArray if it is even and write into new array: ');
console.log(evenOddArray);
let evenOddArrayNew = [];
let index = 0;
for (let i = 0; i < evenOddArray.length; i += 3) {
    if(evenOddArray[i]%2===0) {
        console.log(evenOddArray[i]);
        evenOddArrayNew[index]=evenOddArray[i];
        index++;
        
    }
}
console.log(evenOddArrayNew);

console.log('Every 3rd element of  randomArray if it is even and write into new array: ')
console.log(randomArray);
let randomArrayNew = [];
index = 0;
for (let i = 0; i < randomArray.length; i += 3) {
    if (randomArray[i] % 2 === 0) {
        console.log(randomArray[i]);
        randomArrayNew[index]=randomArray[i];
        index++;
    }
}
console.log(randomArrayNew);

console.log('Every 3rd element of randomArrayInInterval if it is even and write into new array: ');
console.log(randomArrayInInterval);
let randomArrayInIntervalNew = [];
index = 0;
for (let i = 0; i < randomArrayInInterval.length; i += 3) {
    if(randomArrayInInterval[i]%2===0) {
        console.log(randomArrayInInterval[i]);
        randomArrayInIntervalNew[index]=randomArrayInInterval[i];
        index++;
    }
}
console.log(randomArrayInIntervalNew);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
console.log('Every  element of evenOddArray if its right neighbor  is even: ');
console.log(evenOddArray);
for (let i = 0; i < evenOddArray.length-1; i++) {
    if(evenOddArray[i+1]%2===0) {
        console.log(evenOddArray[i]);
    }
}

console.log('Every  element of randomArray if its right neighbor  is even: ');
console.log(randomArray);
for (let i = 0; i < randomArray.length-1; i++) {
    if(randomArray[i+1]%2===0) {
        console.log(randomArray[i]);
    }
}

console.log('Every  element of randomArrayInInterval if its right neighbor  is even: ');
console.log(randomArrayInInterval);
for (let i = 0; i < randomArrayInInterval.length-1; i++) {
    if(randomArrayInInterval[i+1]%2===0) {
        console.log(randomArrayInInterval[i]);
    }
}
//6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

console.log('6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.');
let prices = [100, 250, 50, 168, 120, 345, 188];
let sum = 0;
for (const price of prices) {
    sum += price;
}
console.log(sum / prices.length);
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let randomArr = [];
let multipliedArr = [];
for (let i = 0; i < 10; i++) {
    randomArr[i] = Math.floor(Math.random() * 10);
}
document.write(`<p>Random generated array : ${randomArr}</p>`);
for (let i = 0; i < randomArr.length; i++) {
    multipliedArr[i] = randomArr[i] * 5;
}
document.write(`<p>Multiplied on 5 array : ${multipliedArr}</p>`);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let mixedArr = [1, 45, 76.987, true, false, 'hi', 'okten', 'js', 657, false, 43.9, 'bee', 'cat'];
let stringArr = [];
let iter = 0;

for (const el of mixedArr) {
    if (typeof (el) === 'string') {
        stringArr[iter] = el;
        iter++;
    }
}
document.write(`<p>Start array: ${mixedArr}</p>`);
document.write(`<p>Only strings array: ${stringArr}</p>`);


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

console.log(usersWithId[3].id);

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]

let usersWithCities = [];
for (let i = 0; i < usersWithId.length; i++) {
    console.log(usersWithId[i].id);
    usersWithCities[i] = {
        id: usersWithId[i].id,
        name: usersWithId[i].name,
        age: usersWithId[i].age,
        status: usersWithId[i].status,
        address: ''
    };
    for (let j = 0; j < citiesWithId.length; j++) {
        if (usersWithId[i].id === citiesWithId[j].user_id) {
            usersWithCities[i].address =
                {

                    user_id: citiesWithId[j].user_id,
                    country: citiesWithId[j].country,
                    city: citiesWithId[j].city

                }
        }
    }
}
for (const usersWithCity of usersWithCities) {
    console.log(usersWithCity);
}




//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let numbersArr = [1, 3, 5, 4, 6, 8, 12, 34, 55, 0];
for (const number of numbersArr) {
    if (number % 2 === 0) {
        console.log(number);
    }
}


//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let secondNumbers = [];
for (let i = 0; i < numbersArr.length; i++) {
    secondNumbers[i] = numbersArr[i];
}
document.write(`<p>First array: ${numbersArr}</p>`);
document.write(`<p>Second  array: ${secondNumbers}</p>`);

//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let letters = ['a', 'b', 'c'];
{
    let word = '';
    for (let i = 0; i < letters.length; i++) {
        word += letters[i];
    }
    document.write(`<p>word(for) : ${word}</p>`);
}

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
{
    let word = '';
    let i = 0;
    while (i < letters.length) {
        word += letters[i];
        i++;
    }
    document.write(`<p>word(while) : ${word}</p>`);
}
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
{
    let word = '';
    for (const letter of letters) {
        word += letter;
    }
    document.write(`<p>word(for of) : ${word}</p>`);
}
