// - Сворити масив не цензцрних слів.

let restrictedWords = ['arse', 'bloody Hell', 'bugger', 'crap', 'damn', 'goddamn', 'git', 'minger', 'Sod-off', 'shit',
    'son of a bitch', 'arsehole', 'asshole', 'balls', 'bint', 'bitch', 'bollocks', 'bullshit', 'feck', 'fuck', 'munter',
    'pissed', 'pissed off', 'bastard', 'dickhead', 'bloodclaat', 'cock', 'dick', 'bellend', 'knob', 'prick', 'dickhead',
    'twat', 'beaver', 'beef', 'curtains', 'clunge', 'pussy', 'snatch', 'punani', 'gash', 'minge']
//https://www.englishdom.com/blog/pochemu-vazhno-znat-anglijskie-rugatelstva/
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

const wordForm = document.forms.namedItem('wordCheck');
wordForm.onsubmit = function (e) {
    e.preventDefault();
    if (restrictedWords.includes(wordForm.word.value)) {
        alert("Restricted word detected!!!");
    }
}

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
const sentenceForm = document.forms.namedItem('sentenceCheck');
sentenceForm.onsubmit = function (e) {
    e.preventDefault();
    console.log(sentenceForm.sentence.value);
    let sentence = sentenceForm.sentence.value.split(' ');
    sentence.forEach(word => {
        if (restrictedWords.includes(word)) {
            alert("Restricted word detected!!!");
        }
    });
}

// - Создайте меню, которое раскрывается/сворачивается при клике
const burgerMenu = document.querySelector(".burger>i");
const menu = document.querySelector(".menu");
const liList = document.querySelectorAll('li>a');
burgerMenu.addEventListener("click", () => {
    menu.classList.toggle("show");
});
liList.forEach(li => li.addEventListener('click', function () {
    menu.classList.toggle("show");
}));

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
let comments = [
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'}
]
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
const commentsDiv = document.getElementById('comments');
for (const comment of comments) {
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('comment-title');
    const h4 = document.createElement('h3');
    h4.innerText = comment.title;
    const button = document.createElement('button');
    button.innerText = 'Hide body';
    titleDiv.append(h4, button);
    const bodyDiv = document.createElement('div');
    bodyDiv.classList.add('comment-body');
    bodyDiv.innerText = comment.body;
    commentDiv.append(titleDiv, bodyDiv);
    commentsDiv.appendChild(commentDiv);
}
const buttons = document.querySelectorAll('.comment-title>button');
const bodies = document.getElementsByClassName('comment-body');
for (let i = 0; i < comments.length; i++) {
    const button = buttons[i];
    button.addEventListener('click', function () {
        bodies[i].classList.toggle('hide');
        if (button.outerText === 'Hide body') {
            button.innerText = 'Show body'
        } else {
            button.innerText = 'Hide body'

        }
    });
}
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
const magicButton = document.querySelector('#magic-button>button');
const magicButtonDiv = document.getElementById('magic-button');

magicButton.addEventListener('click', function () {
    magicButtonDiv.classList.toggle('hide')
})


// -- взять массив пользователей
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
const usersDiv = document.getElementsByClassName('users')[0];
const getObj = (obj) => {
    let info = '';
    for (const key in obj) {
        if (typeof obj[key] !== 'object') {
            info += `${key.toUpperCase()} : ${obj[key]}   `;
        }
    }
    return info;
}

function printUsers(usersWithAddress, usersDiv) {
    usersWithAddress.forEach(user => {
        let userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `<p>${getObj(user)} </p><p>Address:${getObj(user.address)}</p>`
        usersDiv.appendChild(userDiv);
    });
}

printUsers(usersWithAddress, usersDiv);
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
const filteredDiv = document.createElement('div');
filteredDiv.classList.add('filtered-users');
const taskDiv = document.getElementById('filter-users');
taskDiv.appendChild(filteredDiv);
const filterCheckboxes = document.querySelectorAll('input[name="filter"]');
filterCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
        let filteredUsers = JSON.parse(JSON.stringify(usersWithAddress));
        const checkedCheckboxes = Array.from(filterCheckboxes).filter(
            (checkbox) => checkbox.checked);
        for (const checkbox of checkedCheckboxes) {
            if (checkbox.value === 'false') {
                filteredUsers = filteredUsers.filter(user => user.status === false);
            }
            if (checkbox.value === '29') {
                filteredUsers = filteredUsers.filter(user => user.age > 28);
            }
            if (checkbox.value === 'Kyiv') {
                filteredUsers = filteredUsers.filter(user => user.address.city === 'Kyiv');
            }
        }
        filteredDiv.innerHTML = '';
        printUsers(filteredUsers, filteredDiv);
    });
});


// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
const navigationButtonDiv = document.querySelector('.navigation-buttons');
const resultDiv = document.querySelector('.result');

function navigateDOM(element) {
    const body = document.body;
    const backButton = document.createElement("button");
    backButton.innerText = "Back";
    const forwardButton = document.createElement("button");
    forwardButton.innerText = "Forward";
    navigationButtonDiv.append(forwardButton, backButton)
    let currentElement = element;
    resultDiv.innerText = element.outerHTML;
    let children = null;
    let index = 0;


    function navigateForward() {
        children = currentElement.children;
        if (children.length > 0) {
            currentElement = children[0];
            index = 0;
        } else {
            let nextSibling = currentElement.nextElementSibling;
            while (nextSibling === null && currentElement.parentElement !== body) {
                currentElement = currentElement.parentElement;
                nextSibling = currentElement.nextElementSibling;
                index = 0;
            }
            if (nextSibling !== null) {
                currentElement = nextSibling;
                index = 0;
            }
        }
        // console.log(currentElement);
        resultDiv.innerText = '';
        resultDiv.innerText = currentElement.outerHTML.toString();
    }

    function navigateBack() {
        if (currentElement.parentElement !== body) {
            currentElement = currentElement.parentElement;
            index = Array.from(currentElement.children).indexOf(currentElement);
            // console.log(currentElement);
            resultDiv.innerText = '';
            resultDiv.innerText = currentElement.outerHTML.toString();
        }
    }

    forwardButton.addEventListener("click", navigateForward);
    backButton.addEventListener("click", navigateBack);
}

navigateDOM(document.body)

//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
// Получаем текущий объект выделения
const contentDiv = document.querySelector('.main-content');

contentDiv.addEventListener("mouseup", function () {
    let selectedText = window.getSelection().toString();
    if (selectedText.length > 0) {
        document.execCommand("bold", false, null);
    }
});
contentDiv.addEventListener("mousedown", function() {
    document.execCommand("bold", false, null);
});




