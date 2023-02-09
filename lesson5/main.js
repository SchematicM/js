// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const squareRectangle = (a, b) => a * b;
console.log('squareRectangle(3, 7): ', squareRectangle(3, 7));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
const PI = 3.14159265359;
const squareCircle = (r) => PI * r * r;
console.log('squareCircle(8): ', squareCircle(8));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const squareCylinder = (h, r) => 2 * PI * r * h + 2 * PI * Math.pow(r, 2);
console.log('squareCylinder(2, 4): ', squareCylinder(2, 4));

// - створити функцію яка приймає масив та виводить кожен його елемент
const printArrayElements = (array) => {
    console.log('Array: ');
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}
let arr = [1, 5.9, 65, 'hi', 'okten', true];
printArrayElements(arr);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const writeParagraph = (text) => document.write(`<p> ${text}</p>`);
writeParagraph('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, autem?')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const createUlElement = (text, count) => {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li> ${text}</li>`);
    }
    document.write(`</ul>`);
}

createUlElement('lorem ipsum', 7);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const buildList = (array) => {
    document.write(`<h1>List from array</h1><ul>`)
    for (const arrayElement of array) {
        document.write(`<li> ${arrayElement}</li>`);
    }
    document.write(`</ul>`)
}

buildList(arr);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {
        id: 1,
        name: 'vasyl',
        age: 22
    },
    {
        id: 2,
        name: 'olia',
        age: 23
    },
    {
        id: 1,
        name: 'anna',
        age: 32
    }
];
const printUserBlock = (user) => {
    document.write(`<div>`);
    document.write(`<h4>${user.id} : ${user.name}  ${user.age} </h4>`)
    document.write(`</div>`)
}

const printUsers = (users) => {
    for (const user of users) {
        printUserBlock(user);
    }
}

printUsers(users);

// - створити функцію яка повертає найменьше число з масиву
const minElement = (array) => {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
};
console.log('minElement([1,5,-12,45,7,-9]): ', minElement([1, 5, -12, 45, 7, -9]))

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const sumArray = (array) => {
    let sum = 0;
    for (const item of array) {
        sum += item;
    }
    return sum;
};

console.log('sumArray([1, 2, 10]): ', sumArray([1, 2, 10]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
const swap = (arr, index1, index2) => {
    console.log(arr);
    if (index1 < arr.length && index2 < arr.length) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
        console.log('Swapped: ', arr);
    } else {
        console.log('IndexOutOfBoundsException');
    }
}

swap(arr, 2, 5);
swap(arr, 2, 8);
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
//
let currencyValues = [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}];

const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let exchanged = 0;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            exchanged = sumUAH / item.value;
        }
    }
    return exchanged;
}

console.log('exchange(10000,[{currency:\'USD\',value:40},{currency:\'EUR\',value:42}],\'USD\'):',
    exchange(10000, currencyValues, 'USD'));