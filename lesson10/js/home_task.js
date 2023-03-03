// Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

const personForm = document.forms.namedItem('person');
personForm.onsubmit = function (event) {
    event.preventDefault();
    const personDiv = document.getElementById("person");
    let divFormValues = document.createElement('div');
    divFormValues.classList.add('onsubmit-form-results');
    try {
        document.body.getElementsByClassName('onsubmit-form-results')[0].remove();
    } catch (TypeError) {
    } finally {

        if (personForm.username.value && personForm.surname.value && personForm.age.value) {
            divFormValues.innerHTML = `<p>Name: ${personForm.username.value}<br> 
                        Surname: ${personForm.surname.value}<br>
                        Age: ${personForm.age.value}</p>`
        } else {
            divFormValues.innerHTML = `<h4>Some fields were empty!</h4>`
            divFormValues.style.color = 'red';
        }
        personDiv.appendChild(divFormValues);
    }
}
// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра.
// написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

const numbDiv = document.getElementsByClassName('increase-number')[0];
if (!localStorage.getItem('number')) {
    localStorage.setItem('number', '1');
}
numbDiv.innerText = localStorage.getItem('number');

window.onload = function () {
    numbDiv.innerText = localStorage.getItem('number');
    let numb = parseInt(localStorage.getItem('number')) + 1;
    localStorage.setItem('number', numb.toString());
}

const clearButton = document.querySelector(".change-number-task>button");
clearButton.onclick = function () {
    localStorage.clear();
    location.reload()
}

//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів


let locations = [
    {
        id: 1,
        title: "м. Київ",
        type: "city"
    },
    {
        id: 2,
        title: "Житомирська область",
        type: "oblast"
    },
    {
        id: 3,
        title: "Харківська область",
        type: "oblast"
    },
    {
        id: 4,
        title: "Чернігівська область",
        type: "oblast"
    },
    {
        id: 5,
        title: "Дніпропетровська область",
        type: "oblast"
    },
    {
        id: 6,
        title: "Черкаська область",
        type: "oblast"
    },
    {
        id: 7,
        title: "Волинська область",
        type: "oblast"
    },
    {
        id: 8,
        title: "Київська область",
        type: "oblast"
    },
    {
        id: 9,
        title: "Миколаївська область",
        type: "oblast"
    },
    {
        id: 10,
        title: "Рівненська область",
        type: "oblast"
    },
    {
        id: 11,
        title: "Сумська область",
        type: "oblast"
    },
    {
        id: 12,
        title: "Тернопільська область",
        type: "oblast"
    },
    {
        id: 13,
        title: "Краматорський район",
        type: "raion"
    },
    {
        id: 14,
        title: "Кіровоградська область",
        type: "oblast"
    },
    {
        id: 15,
        title: "Хмельницька область",
        type: "oblast"
    },
    {
        id: 16,
        title: "Запорізька область",
        type: "oblast"
    },
    {
        id: 17,
        title: "Одеська область",
        type: "oblast"
    },
    {
        id: 18,
        title: "Полтавська область",
        type: "oblast"
    },
    {
        id: 19,
        title: "Львівська область",
        type: "oblast"
    },
    {
        id: 20,
        title: "м. Кривий Ріг",
        type: "city"
    },
    {
        id: 21,
        title: "Криворізька територіальна громада",
        type: "hromada"
    },
    {
        id: 22,
        title: "Івано-Франківська область",
        type: "oblast"
    },
    {
        id: 23,
        title: "Чернівецька область",
        type: "oblast"
    },
    {
        id: 24,
        title: "Ізюмський район",
        type: "raion"
    },
    {
        id: 25,
        title: "Бахмутська територіальна громада",
        type: "hromada"
    },
    {
        id: 26,
        title: "м. Васильків",
        type: "city"
    },
    {
        id: 27,
        title: "Васильківська територіальна громада",
        type: "hromada"
    },
    {
        id: 28,
        title: "Білоцерківська територіальна громада",
        type: "hromada"
    },
    {
        id: 29,
        title: "м. Біла Церква",
        type: "city"
    },
    {
        id: 30,
        title: "Донецька область",
        type: "oblast"
    },
    {
        id: 31,
        title: "Покровський район",
        type: "raion"
    },
    {
        id: 32,
        title: "Уманська територіальна громада",
        type: "hromada"
    },
    {
        id: 33,
        title: "Бахмутський район",
        type: "raion"
    },
    {
        id: 34,
        title: "Закарпатська область",
        type: "oblast"
    },
    {
        id: 35,
        title: "Лубенська територіальна громада",
        type: "hromada"
    },
    {
        id: 36,
        title: "м. Лубни",
        type: "city"
    },
    {
        id: 37,
        title: "Полтавська територіальна громада",
        type: "hromada"
    },
    {
        id: 38,
        title: "м. Полтава",
        type: "city"
    },
    {
        id: 39,
        title: "м. Старокостянтинів",
        type: "city"
    },
    {
        id: 40,
        title: "Старокостянтинівська територіальна громада",
        type: "hromada"
    },
    {
        id: 41,
        title: "м. Миколаїв",
        type: "city"
    },
    {
        id: 42,
        title: "Миколаївська територіальна громада",
        type: "hromada"
    },
    {
        id: 43,
        title: "Торецька територіальна громада",
        type: "hromada"
    },
    {
        id: 44,
        title: "Кропивницький район",
        type: "raion"
    },
    {
        id: 45,
        title: "Першотравенська територіальна громада",
        type: "hromada"
    },
    {
        id: 46,
        title: "Нікопольська територіальна громада",
        type: "hromada"
    },
    {
        id: 47,
        title: "м. Нікополь",
        type: "city"
    },
    {
        id: 48,
        title: "м. Першотравенськ",
        type: "city"
    },
    {
        id: 49,
        title: "Одеський район",
        type: "raion"
    },
    {
        id: 50,
        title: "м. Черкаси",
        type: "city"
    },
    {
        id: 51,
        title: "Черкаська територіальна громада",
        type: "hromada"
    },
    {
        id: 52,
        title: "Добропільська територіальна громада",
        type: "hromada"
    },
    {
        id: 53,
        title: "Херсонська область",
        type: "oblast"
    },
    {
        id: 54,
        title: "Сумська територіальна громада",
        type: "hromada"
    },
    {
        id: 55,
        title: "м. Суми",
        type: "city"
    },
    {
        id: 56,
        title: "Первомайська територіальна громада",
        type: "hromada"
    },
    {
        id: 57,
        title: "Краматорська територіальна громада",
        type: "hromada"
    },
    {
        id: 58,
        title: "Макарівська територіальна громада",
        type: "hromada"
    },
    {
        id: 59,
        title: "м. Краматорськ",
        type: "city"
    },
    {
        id: 60,
        title: "Миргородська територіальна громада",
        type: "hromada"
    },
    {
        id: 61,
        title: "м. Бориспіль",
        type: "city"
    },
    {
        id: 62,
        title: "Броварська територіальна громада",
        type: "hromada"
    },
    {
        id: 63,
        title: "м. Миргород",
        type: "city"
    },
    {
        id: 64,
        title: "Бориспільська територіальна громада",
        type: "hromada"
    },
    {
        id: 65,
        title: "м. Бровари",
        type: "city"
    },
    {
        id: 66,
        title: "м. Вознесенськ",
        type: "city"
    },
    {
        id: 67,
        title: "Коростенський район",
        type: "raion"
    },
    {
        id: 68,
        title: "м. Первомайськ",
        type: "city"
    },
    {
        id: 69,
        title: "Миронівська територіальна громада",
        type: "hromada"
    },
    {
        id: 70,
        title: "Вознесенський район",
        type: "raion"
    },
    {
        id: 71,
        title: "Синельниківський район",
        type: "raion"
    },
    {
        id: 72,
        title: "Фастівська територіальна громада",
        type: "hromada"
    },
    {
        id: 73,
        title: "Вознесенська територіальна громада",
        type: "hromada"
    },
    {
        id: 74,
        title: "Житомирський район",
        type: "raion"
    },
    {
        id: 75,
        title: "Дружківська територіальна громада",
        type: "hromada"
    },
    {
        id: 76,
        title: "м. Фастів",
        type: "city"
    },
    {
        id: 77,
        title: "Слов'янська територіальна громада",
        type: "hromada"
    },
    {
        id: 78,
        title: "Запорізький район",
        type: "raion"
    },
    {
        id: 79,
        title: "м. Слов'янськ",
        type: "city"
    },
    {
        id: 80,
        title: "м. Кременчук",
        type: "city"
    },
    {
        id: 81,
        title: "Ніжинський район",
        type: "raion"
    },
    {
        id: 82,
        title: "м. Ватутіне",
        type: "city"
    },
    {
        id: 83,
        title: "Ватутінська територіальна громада",
        type: "hromada"
    },
    {
        id: 84,
        title: "Кременчуцька територіальна громада",
        type: "hromada"
    },
    {
        id: 85,
        title: "Пологівський район",
        type: "raion"
    },
    {
        id: 86,
        title: "Дніпровська територіальна громада",
        type: "hromada"
    },
    {
        id: 87,
        title: "м. Дніпро",
        type: "city"
    },
    {
        id: 88,
        title: "Лозівський район",
        type: "raion"
    },
    {
        id: 89,
        title: "Покровська територіальна громада",
        type: "hromada"
    },
    {
        id: 90,
        title: "м. Обухів",
        type: "city"
    },
    {
        id: 91,
        title: "Узинська територіальна громада",
        type: "hromada"
    },
    {
        id: 92,
        title: "Шепетівський район",
        type: "raion"
    },
    {
        id: 93,
        title: "Пирятинська територіальна громада",
        type: "hromada"
    },
    {
        id: 94,
        title: "Сумський район",
        type: "raion"
    },
    {
        id: 95,
        title: "Харківський район",
        type: "raion"
    },
    {
        id: 96,
        title: "Жашківська територіальна громада",
        type: "hromada"
    },
    {
        id: 97,
        title: "м. Пирятин",
        type: "city"
    },
    {
        id: 98,
        title: "Павлоградський район",
        type: "raion"
    },
    {
        id: 99,
        title: "Голованівський район",
        type: "raion"
    },
    {
        id: 100,
        title: "Вінницька область",
        type: "oblast"
    }
];

if (!localStorage.getItem('page')) {
    localStorage.setItem('page', '1');
}

let tr = document.querySelectorAll('tr>td');
fillTablePage(parseInt(localStorage.getItem('page')));
function fillTablePage(page) {
    let counter = 0;
    for (let i = (page - 1) * 10; i < page * 10; i++) {
        let location = locations[i];
        let tdArray = document.querySelectorAll('tr>td');
        for (const key in location) {
            tdArray[counter].innerText = location[key];
            counter++;
        }
    }
}
const nextButton = document.getElementById('next');
console.log(nextButton);
nextButton.onclick = function (e) {
    let page = parseInt(localStorage.getItem('page')) + 1;
    if(page<=Math.ceil(locations.length/10) ){
        localStorage.setItem('page', page.toString());
        fillTablePage(page);
    }
}
const previousButton = document.getElementById('previous');
previousButton.onclick = function (e){
    let page = parseInt(localStorage.getItem('page')) - 1;
    if(page>0) {
        localStorage.setItem('page', page.toString());
        fillTablePage(page);
    }
}

// Є сторінка homeTask.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати
// всю інформацію про відвідування сторінки homeTask.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
let sessions = [new Date()];
if (!localStorage.getItem('sessions')) {
    localStorage.setItem('sessions', JSON.stringify(sessions));
} else {
    sessions = JSON.parse(localStorage.getItem('sessions'));
    sessions.push(new Date());
    localStorage.setItem('sessions', JSON.stringify(sessions));
}

let sessionsDiv = document.getElementsByClassName('sessions-task')[0];
sessionsDiv.innerHTML = `<a href = "sessions.html" target = "_blank"> See my all sessions</a>`
document.body.appendChild(sessionsDiv);