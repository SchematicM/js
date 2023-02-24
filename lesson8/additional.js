// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
function Geo (  lat, lng ){
    this.lat = lat;
    this.lng = lng;
}
function Address(street, suite, city, zipcode, geo){
    this.street = street;
    this.suite = suite;
    this.city = city;
    this.zipcode = zipcode;
    this.geo = geo;
}
function  Company (name, catchPhrase, bs){
    this.name = name;
    this.catchPhrase = catchPhrase;
    this.bs = bs;
}
function Person(id, name, username, email,street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs) {

    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = new Address(street, suite, city, zipcode, new Geo(lat,lng));
    this.phone = phone;
    this.website = website;
    this.company = new Company(companyName, catchPhrase, bs);

}

const person = new Person(1, 'Marta', 'Khoma', 'mkhoma@test.com',
'Liberty Street', 'apt.54', 'Lviv', '79000', '-37.3159', '81.1496',
    '+380990000000', 'owu.edu.ua', 'Okten', 'You learn, we happy',
    'harness real-time education');
console.log(person);

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
class TagObj {
    constructor(name, actionDescription, ...atr) {
        this.titleOfTag = name;
        this.action = actionDescription;
        this.attrs = TagObj.makeAttributes(atr)

    }
    static makeAttributes(arr) {
        let attr = [];
        for (let i = 0; i < arr.length; i += 2) {
            attr.push({titleOfAttr: arr[i], actionOfAttrarr: arr[i + 1]});
        }
        return attr;
    }
}

// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

let tags = [
    new TagObj('a','тег <a> устанавливает ссылку или якорь.',
    'accesskey','Активация ссылки с помощью комбинации клавиш.',
    'href', 'Задает адрес документа, на который следует перейти.',
    'title','Добавляет всплывающую подсказку к тексту ссылки.'),
    new TagObj('div','Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
        'align','Задает выравнивание содержимого тега <div>.',
        'title', 'Добавляет всплывающую подсказку к содержимому.'),
    new TagObj('h1','тег <h1> представляет собой наиболее важный заголовок первого уровня',
        'align', 'Определяет выравнивание заголовка.'),
    new TagObj('span','Тег <span> предназначен для определения строчных элементов документа'),
    new TagObj('input','<input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков',
        'accept','Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.',
        'list', 'Указывает на список вариантов, которые можно выбирать при вводе текста.',
        'placeholder', 'Выводит подсказывающий текст.'),
    new TagObj('form','Тег <form> устанавливает форму на веб-странице. ',
        'autocomplete','Включает автозаполнение полей формы',
        'accept-charset','Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.',
        'target', 'Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат.'),
    new TagObj('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.',
        'disabled', 'Заблокировать для доступа элемент списка.',
        'label','Указание метки пункта списка.',
        'value','Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'),
    new TagObj('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.',
        'autofocus','Устанавливает, что список получает фокус после загрузки страницы.',
        'disabled','Блокирует доступ и изменение элемента.',
        'form','Связывает список с формой.')
];
console.log(tags);