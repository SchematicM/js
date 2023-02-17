//     - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
const cutString = (str, n) => {
    let arr = [];
    for (let i = 0; i < str.length; i += n) {
        arr.push(str.substring(i, i + n));
    }
    return arr;
}
console.log(cutString('наслаждение', 3));
//document.writeln(`<p>${cutString('наслаждение',3)}</p>`) ;// [нас,лаж,ден,ие]
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок,
// що складається із зазначеної кількості символів.
const delete_characters = (str, length) => str.substring(0, length);
let str = 'Каждый охотник желает знать';
console.log(delete_characters(str, 7));
//document.write(`<p>${delete_characters(str, 7)}</p>`); // Каждый
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
let str1 = 'HTML JavaScript PHP';
const insert_dash = (str) => str.split(' ').map(value => value.toUpperCase()).join('-');
console.log(insert_dash(str1));
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// - Напишіть функцію, яка приймає рядок як аргумент
// і перетворює регістр першого символу рядка з нижнього регістру у верхній.
const firstLetterUp = (str) => str.replace(str[0], str[0].toUpperCase());
console.log(firstLetterUp('i am Marta'));
// - Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
const decreaseSpaces = (name) => {
    return name.trim()
        .substring(0, name.indexOf(' ')).concat(' ')
        .concat(name.substring(name.lastIndexOf(' ') + 1, name.length));
}
const normaliseNames = (name) => {
    for (const char of name) {
        if (!(char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91) &&
            !(char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123)) {
            name = name.replaceAll(char, ' ');
        }
    }
    return decreaseSpaces(name);
}

console.log(normaliseNames(n1));
console.log(normaliseNames(n2));
console.log(normaliseNames(n3));

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
const getRandomInt = (min = 0, max = 101) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
const ramdomFillArray = (size) => {
    let array = []
    for (let i = 0; i < size; i++) {
        array.push(getRandomInt());
    }
    return array;
}
let arr = ramdomFillArray(20);
console.log(arr);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
console.log(arr.sort((a, b) => a - b));
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
console.log(arr.filter(value => {
    if (value % 2 === 0 && value !== 0)
        return value;
}));
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
const capitalize = (str) => {
    return str.split(' ')
        .map(value => value.replace(value[0], value[0].toUpperCase()))
        .join(' ')
};
console.log(capitalize('i am from lviv, ukraine'));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :
//данні до знака равлика(@),
// наявність равлика,
// крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
const emailValidator = (email) => {
    // console.log(email.includes('@'));
    // console.log(email.indexOf('@') > 2);//9
    // console.log(email.lastIndexOf('.') - email.indexOf('@')<2);
    return email.includes('@')
        && email.indexOf('@') > 2
        && email.lastIndexOf('.') - email.indexOf('@') > 2
}
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
console.log('someemail@gmail.com: ', emailValidator('someemail@gmail.com'));
console.log('someeMAIL@gmail.com: ', emailValidator('someeMAIL@gmail.com'));
console.log('someeMAIL@i.ua: ', emailValidator('someeMAIL@i.ua'));
console.log('some.email@gmail.com: ', emailValidator('some.email@gmail.com'));

// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу 'ні'. Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
console.log(coursesArray.sort((a, b) => b.modules.length - a.modules.length));
//
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
const decreaseStr = (str, index) => str.substring(index, str.length);

const count = (str, stringsearch) => {
    let counter = 0;
    while (str.includes(stringsearch)) {
        counter++;
        stringsearch.length === 1 ? str = str.substring(str.indexOf(stringsearch) + stringsearch.length) :
            str = str.substring(str.indexOf(stringsearch) + stringsearch.length - 1);
    }

    return counter;
}
console.log(count('fabsabs anjshfh sabs', 'abs'));
let symb = 'о';
str5 = 'Астрономия это наука о небесных объектах';
console.log(count(str5, symb));

// document.writeln(count(str, symb)) // 5
//
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
let str4 = 'Сила тяжести приложена к центру масс тела';
const cutStringToNumbmer = (str, n) => str.split(' ').filter((value, index) => index < n).join(' ');
console.log(cutStringToNumbmer(str4, 5));
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
//
//
// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).

let books = [{
    title: 'Around the world in 350 days',
    pageCount: 538,
    genre: ['adventure', 'drama'],
    authors: ['Zhul Vern', 'Felisity Smoak']

}, {
    title: 'Harry Potter',
    pageCount: 1280,
    genre: ['fantasy', 'horror', 'detective'],
    authors: ['Joan Roalling']
}, {
    title: 'Angel Empire',
    pageCount: 340,
    genre: ['detective', 'scientific', 'comedy', 'thriller'],
    authors: ['Bernar Verber', 'Amanda Waller']
}]

// -знайти наібльшу книжку.
const maxPages = books.sort((a, b) => b.pageCount - a.pageCount)[0].pageCount;
console.log('Max pages : ', books.filter(book => book.pageCount === maxPages));
// - знайти книжку/ки з найбільшою кількістю жанрів
const maxGenres = books.sort((a, b) => b.genre.length - a.genre.length)[0].genre.length;
console.log('Max genres : ', books.filter(book => book.genre.length === maxGenres));

// - знайти книжку/ки з найдовшою назвою
let maxTitle = books.sort((a, b) => b.title.length - a.title.length)[0].title.length;
console.log('Max title : ', books.filter(book => book.title.length === maxTitle));


// - знайти книжку/ки які писали 2 автори
console.log('With 2 author: ', books.filter(book => book.authors.length === 2));
// - знайти книжку/ки які писав 1 автор
console.log('With 1 author: ', books.filter(book => book.authors.length === 1));

// - вісортувати книжки по кількості сторінок по зростанню
console.log('Sorted: ', books.sort((a, b) => a.pageCount - b.pageCount));