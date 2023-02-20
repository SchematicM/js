// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
const greeting = 'hello world';
const fish = 'lorem ipsum';
const js = 'javascript is cool';
console.log(greeting.length);
console.log(fish.length);
console.log(js.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(greeting.toUpperCase());
console.log(fish.toUpperCase());
console.log(js.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
const greetingUpperCase = 'HELLO WORLD';
const fishUpperCase = 'LOREM IPSUM';
const jsUpperCase = 'JAVASCRIPT IS COOL';
console.log(greetingUpperCase.toLowerCase());
console.log(fishUpperCase.toLowerCase());
console.log(jsUpperCase.toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
const cleanStr = str.trim();
console.log(cleanStr);
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let st = 'Ревуть воли як ясла повні';
const stringToarray = str => str.split(' ');
console.log(stringToarray(st));
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
const numToString = numbers.map(value => value.toString())
console.log(numToString);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];
const sortNums = (nums, direction) => {
    if (direction === 'ascending') {
        console.log(nums.sort((a, b) => a - b));
    } else if (direction === 'descending') {
        console.log(nums.sort((a, b) => b - a));
    } else {
        console.log("WTF???")
    }
}
sortNums(nums, 'ascending') // [3,11,21]
sortNums(nums, 'descending') // [21,11,3]

// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
const sortedDescDurations = coursesAndDurationArray.sort((a, b) =>
    b.monthDuration - a.monthDuration)
console.log(sortedDescDurations);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
const filteredDurations = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filteredDurations);
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
const coursesAndDurationArrayWithId = coursesAndDurationArray.map((value, index = 0) => {
    return {...value, id: ++index}
});
console.log(coursesAndDurationArrayWithId);
// =========================
//     описати колоду карт (від 6 до туза без джокерів)

const cards = [
    {
        cardSuit: 'spade',
        value: 6,
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 7,
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 8,
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 9,
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 10,
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'jack',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'queen',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'king',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'ace',
        color: 'black'
    },
    {
        cardSuit: 'diamond',
        value: 6,
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 7,
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 8,
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 9,
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 10,
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'jack',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'queen',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'king',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'ace',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 6,
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 7,
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 8,
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 9,
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 10,
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 'jack',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 'queen',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 'king',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 'ace',
        color: 'red'
    },


    {
        cardSuit: 'clubs',
        value: 6,
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 7,
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 8,
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 9,
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 10,
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 'jack',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 'queen',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 'king',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 'ace',
        color: 'black'
    }
];
console.log(cards.length);
// - знайти піковий туз
console.log(cards.find(value => value.cardSuit === 'spade' && value.value === 'ace'));
// - всі шістки
console.log(cards.filter(value => value.value === 6));
// - всі червоні карти
console.log(cards.filter(value => value.color === 'red'));

// - всі буби
console.log(cards.filter(value => value.cardSuit === 'diamond'));

// - всі трефи від 9 та більше
console.log(cards.filter(value => {
    if ((typeof value.value === "number" && value.value > 8 || typeof value.value === "string")
        && value.cardSuit === 'clubs')
        return value;
}));

//
// {
//     cardSuit: '', // 'spade'(піка), 'diamond'(буба),'heart'(Черва), 'clubs'(Хреста)
//         value: '', // '6'-'10', 'ace'(туз),'jack'(валет) ,'queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

const reducedCards = cards.reduce((accumulator, card) => {
    if (card.cardSuit === 'spade') {
        accumulator.spades.push(card);
    } else if (card.cardSuit === 'diamond') {
        accumulator.diamonds.push(card);
    } else if (card.cardSuit === 'heart') {
        accumulator.hearts.push(card);
    } else {
        accumulator.clubs.push(card);
    }
    return accumulator;
}, {spades: [], diamonds: [], hearts: [], clubs: []});
console.log(reducedCards);
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
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
// --написати пошук всіх об'єктів, в який в modules є sass
console.log(coursesArray.filter(value => {
    if (value.modules.some(item => item === 'sass'))
        return value;
}));
// --написати пошук всіх об'єктів, в який в modules є docker
console.log(coursesArray.filter(value => {
    if (value.modules.some(item => item === 'docker'))
        return value;
}));