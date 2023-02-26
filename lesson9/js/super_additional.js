let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
//- З масиву users за допомогою циклу витягнути адреси користувачів і
// записати (скопіювати) їх в інший порожній масив.
let address = [];
users.forEach(user => address.push(JSON.parse(JSON.stringify(user.address))));
console.log(address);
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці.
let singleBlockDiv = document.createElement('div');
singleBlockDiv.classList.add('users', 'in-one-block');
users.forEach(user => {
    let div = document.createElement('div');
    div.classList.add('user');
    for (const key in user) {
        if (typeof user[key] !== 'object') {
            div.innerText += ` ${key} : ${user[key]} `+'\n';
        }else {
            displayObjectText(div, user, key);
        }
    }
    singleBlockDiv.appendChild(div);
});
document.body.appendChild(singleBlockDiv);


// // розділивши всі властивості по своїм блокам (div>div*4)
function displayObjectText(div, user, userKey) {
    div.innerText += `${userKey} : `
    for (const key in user[userKey]) {
        div.innerText += ` ${key} : ${user[userKey][key]}`;
    }
}

function keyBlocksCreator(user) {
    let userDiv = document.createElement('div');
    userDiv.classList.add('user');
    for (const userKey in user) {
        let div = document.createElement('div');
        div.classList.add(userKey);
        if (typeof user[userKey] === 'object') {
            displayObjectText(div, user, userKey);
        } else {
            div.innerText = `${userKey} : ${user[userKey]}`
        }
        userDiv.appendChild(div);

    }
    return userDiv;
}

let keysBlocksDiv = document.createElement('div');
keysBlocksDiv.classList.add('users', 'key-in-block');
users.forEach(user => keysBlocksDiv.appendChild(keyBlocksCreator(user)));
document.body.appendChild(keysBlocksDiv);

// // - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// // розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
function createSeparateDiv(user, userDiv) {
    for (const userKey in user) {
        let div = document.createElement('div');
        div.classList.add(userKey);
        div.innerHTML = `<p>${userKey} :</p> `;
        if (typeof user[userKey] !== 'object') {
            div.innerHTML = `<p>${userKey} : ${user[userKey]}</p>`
        } else {
            createSeparateDiv(user[userKey], div);
        }
        userDiv.appendChild(div);
    }
}


let mainDiv = document.createElement('div');
mainDiv.classList.add('users', 'separated-each-block');
users.forEach(user => {
    let userDiv = document.createElement('div');
    userDiv.classList.add('user');
    createSeparateDiv(user, userDiv);
    mainDiv.appendChild(userDiv);
});
document.body.appendChild(mainDiv);

//
//
//
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    }

];
let wrapDiv = document.createElement('div');
wrapDiv.classList.add('wrap');
let iterator = 1;
for (const rule of rules) {
    let rulesDiv = document.createElement('div');
    rulesDiv.classList.add('rules', `rule${iterator++}`);
    let h2 = document.createElement('h2');
    h2.innerText = rule.title;
    let p = document.createElement('p');
    p.innerText = rule.body;
    rulesDiv.append(h2, p);
    wrapDiv.appendChild(rulesDiv);
}


document.body.append(wrapDiv);