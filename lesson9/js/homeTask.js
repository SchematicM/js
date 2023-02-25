// - створити блок,
let div = document.createElement('div');
//     - додати йому класи wrap, collapse, alpha, beta
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, nemo!';
div.style.background = 'silver';
div.style.color = 'red';
div.style.fontSize = '38px'
div.style.margin = '10px';
// - додати цей блок в body.
document.body.appendChild(div);
// - клонувати його повністю, та додати клон в body.
let divCopy = div.cloneNode(true);
document.body.appendChild(divCopy);


//
// - Є масив:
const arr = ['Main', 'Products', 'About us', 'Contacts']
let ul = document.createElement('ul');
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
for (const item of arr) {
    let li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
}
document.body.appendChild(ul);

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let mainDiv = document.createElement('div');
mainDiv.classList.add('courses');
document.body.appendChild(mainDiv);
for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.classList.add('course');
    let h4 = document.createElement('h4');
    h4.innerText = coursesAndDurationArrayElement.title + ' : ' + coursesAndDurationArrayElement.monthDuration + ' months';
    div.appendChild(h4);
    mainDiv.appendChild(div);
}
// =========================
//
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'>
// ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
let generalDiv = document.createElement('div');
generalDiv.classList.add('courses');
for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.classList.add('item');
    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = coursesAndDurationArrayElement.title;
    let p = document.createElement('p');
    p.classList.add('description')
    p.innerText = 'Duration: ' + coursesAndDurationArrayElement.monthDuration;
    div.append(h1, p);
    generalDiv.appendChild(div);
}
document.body.appendChild(generalDiv);

//
// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Проітерувати його, створиши для кожного об'єкту  масиву
// <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
for (const simpson of simpsons) {
    let div = document.createElement('div');
    div.classList.add('member');
    let h1 = document.createElement('h1');
    h1.innerText = `${simpson.name}  ${simpson.surname}(age: ${simpson.age}) `;
    let contentDiv = document.createElement('div');
    contentDiv.classList.add('simson-content');
    let p = document.createElement('p');
    p.innerText = simpson.info;
    let img = document.createElement('img');
    img.setAttribute('src', simpson.photo);
    contentDiv.append(img,p);
    div.append(h1, contentDiv);
    document.body.appendChild(div);
}

// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
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
// Створити для кожного елементу масиву свій блок, блок розділити блоками,
//в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі img.png який лежить в папці з поточним фйлом
let coursesDiv = document.createElement('div');
coursesDiv.classList.add('courses');
for (const course of coursesArray) {
    let mainDiv = document.createElement('div');
    mainDiv.classList.add('course');
    let h1 = document.createElement('h1');
    h1.innerText = course.title;
    let durationDiv = document.createElement('div');
    durationDiv.classList.add('course-duration');
    let h3Month = document.createElement('h3');
    h3Month.innerText = `Duration: ${course.monthDuration} month`;
    let h3Hour = document.createElement('h3');
    h3Hour.innerText = `Duration: ${course.hourDuration} hours`;
    durationDiv.append(h3Month, h3Hour);
    let ul = document.createElement('ul');
    ul.innerHTML = `<h4>Modules:</h4> `;
    for (const module of course.modules) {
        let li = document.createElement('li');
        li.innerText = module;
        ul.appendChild(li);
    }
    mainDiv.append(h1, durationDiv, ul);
    coursesDiv.appendChild(mainDiv);
}
document.body.appendChild(coursesDiv);

// ------------------
//
//     - Створити довільний елемент з id = text та створити кнопку.
//     Використовуючи JavaScript, зробіть так,
//     щоб при натисканні на кнопку зникав елемент з id="text".
let showHideBlock = document.createElement('div');
showHideBlock.classList.add('show-hide-block');
let p = document.createElement('p');
p.setAttribute('id', 'text');
p.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, reprehenderit!';
let button = document.createElement('button');
button.setAttribute('onclick', 'showHideText()');
button.innerText = 'Hide text';
showHideBlock.append(button, p);
document.body.appendChild(showHideBlock)

function showHideText() {
    let text = document.getElementById("text");
    let button = document.getElementsByTagName("button")[0];
    if (text.style.display === "none") {
        text.style.display = "block";
        button.innerText = 'Hide text';
    } else {
        text.style.display = "none";
        button.innerText = 'Show text';
    }
}


//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
//     та повідомити про це користувача
let inputDiv = document.createElement('div');
inputDiv.classList.add('age-input');

let input = document.createElement('input');
input.setAttribute('id', 'age-input')
input.setAttribute('placeholder', 'Enter your age');

let submitDiv = document.createElement('div');
submitDiv.classList.add('submit-age-conteiner');

let submit = document.createElement('button');
submit.setAttribute('id', 'submit-age');
submit.setAttribute('onclick', 'validateAge()');
submit.innerText = 'Submit';

let result = document.createElement('p');
result.setAttribute('id', 'result');
submitDiv.append(input,submit);
inputDiv.append( submitDiv,result);
document.body.appendChild(inputDiv);

function validateAge() {
    let x = +document.getElementById("age-input").value;
    let text;
    if (x < 18 && x > 0) {
        text = "Sorry, you are younger than 18 years old";
    } else if (x > 18 && x < 121) {
        text = "Welcome! Your age is bigger then 18)";
    } else {
        text = "Sorry! Your input was incorrect)";
    }
    document.getElementById("result").innerText = text;
}

// *** Створити 3 інпута та кнопку.
// Один визначає кількість рядків,
// другий - кількість ячеєк,
// третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let tableDiv = document.createElement('div');
tableDiv.setAttribute('id', 'table-creator-container');
let parametersDiv = document.createElement('div');
parametersDiv.classList.add('table-parameters');
let inputRows = document.createElement('input');
inputRows.setAttribute('placeholder', 'Enter rows count');
inputRows.setAttribute('type', 'number');
inputRows.setAttribute('min','1');

let inputCells = document.createElement('input');
inputCells.setAttribute('placeholder', 'Enter cells count');
inputCells.setAttribute('type', 'number');
inputCells.setAttribute('min','1');

let inputContent = document.createElement('input');
inputContent.setAttribute('placeholder', 'Enter content');
inputContent.setAttribute('type', 'text');

let createTable = document.createElement('button');
createTable.setAttribute('id', 'build-table');
createTable.setAttribute('onclick', 'buildTable()');
createTable.innerText = 'Build Table';

parametersDiv.append(inputRows, inputCells, inputContent, createTable);



tableDiv.append(parametersDiv);
document.body.appendChild(tableDiv);
//buildTable();

function buildTable() {
    let parameters = document.querySelectorAll(".table-parameters>input");
    const paramsObj = {
        rows: parameters[0].value,
        cells: parameters[1].value,
        content:parameters[2].value
    }
    try{
        document.getElementsByTagName('table')[0].remove();
    }catch (TypeError){}finally {
    let table = document.createElement('table');
    for (let i = 0; i < paramsObj.rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < paramsObj.cells; j++) {
            let td = document.createElement('td');
            td.innerText = paramsObj.content;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.getElementById('table-creator-container').appendChild(table);
}}