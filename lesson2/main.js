// Масиви та об"єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу,
// вивести кожен елемент в консоль
let arr = [1, 4, "Okten", true, false, "Welcome js!", 657.898, BigInt(475758867685849394857), "Lesson 1", 3.14]
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
{
// - Створити 3 об"єкти які описують книги.
// Поля об"єкту : title ,pageCount, genre.
    let book1 = {
        title: "Around the world in 350 days",
        pageCount: 538,
        genre: "adventure"
    };

    let book2 = {
        title: "Harry Potter",
        pageCount: 280,
        genre: "fantasy"
    };

    let book3 = {
        title: "Angel Empire",
        pageCount: 340,
        genre: "detective"
    }
}
{
// - Створити 3 об"єкти які описують книги. Поля об"єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом.
// Кожен автор має поля name та age.
    let book1 = {
        title: "Around the world in 350 days",
        pageCount: 538,
        genre: "adventure",
        authors: [{
            name: "Zhul Vern",
            age: 47
        }, {
            name: "Felisity Smoak",
            age: 22
        }, {
            name: "Frank Bartinelli",
            age: 22
        }]

    };

    let book2 = {
        title: "Harry Potter",
        pageCount: 280,
        genre: "fantasy",
        authors: [{
            name: "Joan Roalling",
            age: 38
        }, {
            name: "Oliver Queen",
            age: 33
        }, {
            name: "John Diggle",
            age: 40
        }]
    };

    let book3 = {
        title: "Angel Empire",
        pageCount: 340,
        genre: "detective",
        authors: [
            {
                name: "Bernar Verber",
                age: 60
            }, {
                name: "Amanda Waller",
                age: 60
            }
        ]
    }
}
// - Створити масив з 10 об"єктами які описують сутніть "користувач".
// Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

let users = [{
    name: "Oliver",
    username: "arrow",
    password: "vigilante_2022"
}, {
    name: "Felisity",
    username: "it_girl",
    password: "x-hacker"
}, {
    name: "Tea",
    username: "panda_tea",
    password: "new_Verdant"
}, {
    name: "Roy",
    username: "gladesBoy",
    password: "redBoy_Star"
}, {
    name: "Lorel",
    username: "lens",
    password: "best_lawyer"
}, {
    name: "Sare",
    username: "canary",
    password: "lia_new"
}, {
    name: "John",
    username: "diggle",
    password: "Afganistan_war"
}, {
    name: "Shado",
    username: "island_girl",
    password: "yaofey"
}, {
    name: "Walter",
    username: "CEO",
    password: "queen_consolidated"
}, {
    name: "Moira",
    username: "dark_lady",
    password: "undertaking"
}]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
// //     Якщо змінна x не дорівнює нулю, виведіть "Вірно", інакше виведіть "Невірно".
// //     Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = parseInt(prompt("Enter number: "));
if (x) {
    console.log("Correct!");
} else {
    console.log("Incorrect!");
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt("Enter time: ");

if (time < 15) {
    console.log("First");
} else if (time < 30) {
    console.log("Second");
} else if (time < 45) {
    console.log("Third");
} else if (time < 60) {
    console.log("Fourth");
} else {
    console.log("Incorrect time!");
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt("Enter day: ");

if (day < 11) {
    console.log("First");
} else if (day < 21) {
    console.log("Second");
} else if (day < 31) {
    console.log("Third");
} else {
    console.log("Incorrect day!");
}
// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).
let dayNumber = +prompt("Enter number of the day: ")

switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Sorry, I do not know this day (");
}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let a = parseInt(prompt("Enter First number: "));
let b = parseInt(prompt("Enter Second number: "));
if (a > b) {
    console.log(a);
} else if (b > a) {
    console.log(b);
} else {
    console.log("Numbers are equal! ");
}


//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//     Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"
//         якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
{
    let x =null;
    x = x||"default";
    console.log(x);
}


//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let coursesAndDurationArrayElement = coursesAndDurationArray[0];
if (coursesAndDurationArrayElement["monthDuration"] > 5) {
    console.log(coursesAndDurationArrayElement.title + " Super!");
}
let coursesAndDurationArrayElement1 = coursesAndDurationArray[1];
if (coursesAndDurationArrayElement1["monthDuration"] > 5) {
    console.log(coursesAndDurationArrayElement1.title + " Super!");
}
let coursesAndDurationArrayElement2 = coursesAndDurationArray[2];
if (coursesAndDurationArrayElement2["monthDuration"] > 5) {
    console.log(coursesAndDurationArrayElement2.title + " Super!");
}
let coursesAndDurationArrayElement3 = coursesAndDurationArray[3];
if (coursesAndDurationArrayElement3["monthDuration"] > 5) {
    console.log(coursesAndDurationArrayElement3.title + " Super!");
}
let coursesAndDurationArrayElement4 = coursesAndDurationArray[4];
if (coursesAndDurationArrayElement4["monthDuration"] > 5) {
    console.log(coursesAndDurationArrayElement4.title + " Super!");
}
let coursesAndDurationArrayElement5 = coursesAndDurationArray[5];
if (coursesAndDurationArrayElement5["monthDuration"] > 5) {
    console.log(coursesAndDurationArrayElement4.title + " Super!");
}