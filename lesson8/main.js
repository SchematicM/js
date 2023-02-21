// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = []
users.push(new User(8, 'Sofiya', 'Maksymiv', 's_maksymiv@mail.com', '+380660000008'));
users.push(new User(9, 'Oleg', 'Zhmykh', 'o_zhmykh@mail.com', '+380660000009'));
users.push(new User(10, 'Petro', 'Konyukh', 'p_konyukh@mail.com', '+380660000010'));
users.push(new User(5, 'Volodymyr', 'Kuspis', 'v_kuspis@mail.com', '+380660000005'));
users.push(new User(6, 'Andriy', 'Tereshchenko', 'a_tereshchenko@mail.com', '+380660000006'));
users.push(new User(1, 'Vasya', 'Pupkin', 'v_pupkin@mail.com', '+380660000001'));
users.push(new User(7, 'Mariya', 'Golyk', 'm_golyk@mail.com', '+380660000007'));
users.push(new User(2, 'Olya', 'Pupkina', 'o_pupkin@mail.com', '+380660000002'));
users.push(new User(3, 'Anna', 'Moroz', 'a_moroz@mail.com', '+380660000003'));
users.push(new User(4, 'Olena', 'Pchilka', 'o_pchilka@mail.com', '+380660000004'));

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log("Filtered by even id: ", users.filter(user => user.id % 2 === 0));
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log("Sorted by id  in ascending order: ", users.sort((user1, user2) =>
    user1.id - user2.id));


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {

    constructor(id, name, surname, email, phone, order) {
        new User(id, name, surname, email, phone);
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let clients = []
clients.push(new Client(8, 'Sofiya', 'Maksymiv', 's_maksymiv@mail.com', '+380660000008',
    ['cattle', 'cup']));
clients.push(new Client(9, 'Oleg', 'Zhmykh', 'o_zhmykh@mail.com', '+380660000009',
    ['cattle']));
clients.push(new Client(10, 'Petro', 'Konyukh', 'p_konyukh@mail.com', '+380660000010',
    ['cattle', 'cup', 'plate', 'frying pan', 'dish washer machine']));
clients.push(new Client(5, 'Volodymyr', 'Kuspis', 'v_kuspis@mail.com', '+380660000005',
    ['cattle', 'cup', 'fridge', 'plates']));
clients.push(new Client(6, 'Andriy', 'Tereshchenko', 'a_tereshchenko@mail.com', '+380660000006',
    ['cattle', 'cup']));
clients.push(new Client(1, 'Vasya', 'Pupkin', 'v_pupkin@mail.com', '+380660000001',
    ['cattle', 'cup', 'potato']));
clients.push(new Client(7, 'Mariya', 'Golyk', 'm_golyk@mail.com', '+380660000007',
    ['cattle', 'cup', 'coffee', 'tea']));
clients.push(new Client(2, 'Olya', 'Pupkina', 'o_pupkin@mail.com', '+380660000002',
    ['cattle', 'cup', 'carrot']));
clients.push(new Client(3, 'Anna', 'Moroz', 'a_moroz@mail.com', '+380660000003',
    ['cattle']));
clients.push(new Client(4, 'Olena', 'Pchilka', 'o_pchilka@mail.com', '+380660000004', []));


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log("Sorted by count of orders: ", clients.sort((client1, client2) =>
    client1.order.length - client2.order.length));
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна.
function Car(model, brand, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.brand = brand;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
}
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
Car.prototype.drive = function () {
    console.log(`Drive with the speed ${this.maxSpeed} per hour`);
}
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
Car.prototype.info = function () {
    console.log(`
    model : ${this.model};
    brand : ${this.brand};
    year : ${this.year};
    maxSpeed  : ${this.maxSpeed};
    engineCapacity : ${this.engineCapacity};`);
}
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
Car.prototype.increaseMaxSpeed = function (newSpeed) {
    try {
        return this.maxSpeed += newSpeed;
    } catch (e) {
        console.error(e)
    }
}
// -- changeYear (newValue) - змінює рік випуску на значення newValue //1886-2022

Car.prototype.changeYear = function (newYear) {
    if (newYear < 1886 && newYear > 2023) {
        throw new Error('There were no cars, produced this year! ')
    }
    return this.year = newYear;
}
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
Car.prototype.addDriver = function (driver) {
    this.driver = driver;
}


let bmw = new Car('M4 Competition', 'BMW', 2019, 258, 3.0);
console.log('First init : ', bmw);
// console.log(bmw.info());
bmw.drive();
bmw.info();
bmw.increaseMaxSpeed(20);
console.log('Increased Speed : ',bmw);
bmw.changeYear(2022);
console.log('Changed Year : ',bmw);
const driver = {
    name: 'Vasyl',
    surname: 'Pypkin',
    age: 33,
    experience: 14,
    licenceNumber: '000238746838'
}
bmw.addDriver(driver);
console.log('Added driver : ',bmw);



//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Auto {
    constructor(model, brand, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.brand = brand;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    drive() {
        console.log(`Drive with the speed ${this.maxSpeed} per hour`);
    }

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    info() {
        console.log(`
    model : ${this.model};
    brand : ${this.brand};
    year : ${this.year};
    maxSpeed  : ${this.maxSpeed};
    engineCapacity : ${this.engineCapacity};`);
    }

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    increaseMaxSpeed(newSpeed) {
        try {
            return this.maxSpeed += newSpeed;
        } catch (e) {
            console.error(e)
        }
    }

// -- changeYear (newValue) - змінює рік випуску на значення newValue //1886-2022

    changeYear(newYear) {
        if (newYear < 1886 && newYear > 2023) {
            throw new Error('There were no cars, produced this year! ')
        }
        return this.year = newYear;
    }

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    addDriver(driver) {
        this.driver = driver;
    }
}
let audi = new Auto('Q5', 'Audi', 2018, 190, 2.0);
console.log('First init : ', audi);
// console.log(bmw.info());
audi.drive();
audi.info();
audi.increaseMaxSpeed(20);
console.log('Increased Speed : ',audi);
audi.changeYear(2019);
console.log('Changed Year : ',audi);
const driver1 = {
    name: 'Anatoliy',
    surname: 'Mozgin',
    age: 23,
    experience: 5,
    licenceNumber: '000238746863'
}
audi.addDriver(driver1);
console.log('Added driver : ',audi);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Cinderella (name,age,footSize){
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}
let cinderellas = [
    new Cinderella('Ariel',16,36),
    new Cinderella('Tiana',18,35),
    new Cinderella('Moana',17,38),
    new Cinderella('Mulan',18,39),
    new Cinderella('Belle',15,40),
    new Cinderella('Cinderella',16,34),
    new Cinderella('Rapunzel',16,37),
    new Cinderella('Merida',15,41),
    new Cinderella('Jasmine',17,42),
    new Cinderella('Aurora',18,43),
]

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince{
    constructor(name, age, shoesSize) {
        this.name = name;
        this.age = age;
        this.shoesSize = shoesSize;
    }
}
const prince = new Prince('Charming',18, 34);
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const princess of cinderellas) {
    if (princess.footSize === prince.shoesSize) {
        console.log(princess);
    }
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(cinderellas.find(princess => princess.footSize === prince.shoesSize));
