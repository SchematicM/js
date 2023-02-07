{
    // --створити масив з:
//     - з 5 числових значень
    let numbers = [1, 5, 8, 99, 100500];
    for (const number of numbers) {
        console.log(number);
    }
    console.log('reverse');
    for (let i = numbers.length - 1; i >= 0; i--) {
        console.log(numbers[i]);
    }
// - з 5 стічкових значень
    let str = ['hi', 'my', 'name', 'is', 'Marta'];
    for (const string of str) {
        console.log(string);
    }
    console.log('reverse');
    for (let i = str.length - 1; i >= 0; i--) {
        console.log(str[i]);
    }
    // - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

    let mixed = ['Okten', 100500, '% super', true, 1]
    for (const mixedElement of mixed) {
        console.log(mixedElement);
    }
    console.log('reverse');
    for (let i = mixed.length - 1; i >= 0; i--) {
        console.log(mixed[i]);
    }

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
    let arr = [];
    arr[0] = 'Hello';
    arr[1] = 8;
    arr[2] = true;
    arr[3] = 'mama';
    arr[4] = false;

    for (const arrElement of arr) {
        console.log(arrElement);
    }
    console.log('reverse');
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }

// // - є масив [2,17,13,6,22,31,45,66,100,-18] :
    let numb = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
    console.log('1. перебрати його циклом while');
    let index = 0;
    while (index < numb.length) {
        console.log(numb[index]);
        index++;
    }
    console.log('reverse');
    index--;
    while (index >= 0) {
        console.log(numb[index]);
        index--;
    }
    console.log(' 2. перебрати його циклом for');
//
    for (const number of numb) {
        console.log(number);
    }
    console.log('reverse');
    for (let i = numb.length - 1; i >= 0; i--) {
        console.log(numb[i]);
    }
//
    console.log('3. перебрати циклом while та вивести  числа тільки з непарним індексом');
    let iter = 0;
    while (iter < numb.length) {
        if (iter % 2 === 1) {
            console.log(numb[iter]);
        }
        iter++;
    }
    console.log('reverse');
    iter--;
    while (iter >= 0) {
        if (iter % 2 === 1) {
            console.log(numb[iter]);
        }
        iter--;
    }


    console.log('4. перебрати циклом for та вивести  числа тільки з непарним індексом');
    for (let i = 0; i < numb.length; i++) {
        if (i % 2 === 1) {
            console.log(numb[i]);
        }
    }
    console.log('reverse');

    for (let i = numb.length - 1; i >= 0; i--) {
        if (i % 2 === 1) {
            console.log(numb[i]);
        }
    }
    console.log('5. перебрати циклом while та вивести  числа тільки парні  значення');
    let it = 0;
    while (it < numb.length) {
        if (it % 2 === 0) {
            console.log(numb[it]);
        }
        it++;
    }
    console.log('reverse');
    it--;
    while (it >= 0) {
        if (it % 2 === 1) {
            console.log(numb[it]);
        }
        it--;
    }
    console.log(' 6. перебрати циклом for та вивести  числа тільки парні  значення');
    for (let i = 0; i < numb.length; i++) {
        if (i % 2 === 0) {
            console.log(numb[i]);
        }
    }
    console.log('reverse');
    for (let i = numb.length - 1; i >= 0; i--) {
        if (i % 2 === 0) {
            console.log(numb[i]);
        }
    }
    console.log('7. замінити кожне число кратне 3 на слово "okten"');
    let mutation1 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
    for (let i = 0; i < mutation1.length; i++) {
        if (mutation1[i] % 3 === 0) {
            mutation1[i] = "okten";
        }
    }
    for (const number of mutation1) {
        console.log(number);
    }
    console.log('reverse');

// 8. вивести масив в зворотньому порядку.
    for (let i = mutation1.length - 1; i >= 0; i--) {
        console.log(mutation1[i]);
    }
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//implemented right after each task
}

{
    // - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    for (const number of numbers) {
        console.log(number);
    }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
    let strs = ['a', 'b', 'c', 'ASDFCA', 'asfads', 'Hello, Okten', 'I like coffee', 'abbagalamaga', 'abevegedeyka', 'Oliver Queen'];
    for (const str of strs) {
        console.log(str);
    }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
    let mixed = [true, 'a', 100500, 'gdgdgdg', false, true, 5588, 23.56, "jffjgjkd", 1999.99]
    for (const mixedElement of mixed) {
        console.log(mixedElement);
    }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
    console.log('За допомогою if та typeof вивести тільки булеві елементи');
    for (const mixedElement of mixed) {
        if (typeof mixedElement == "boolean") {
            console.log(mixedElement);
        }
    }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
    console.log('За допомогою if та typeof вивести тільки числові елементи');
    for (const mixedElement of mixed) {
        if (typeof mixedElement == "number") {
            console.log(mixedElement);
        }
    }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
    console.log('За допомогою if та typeof вивести тільки рядкові елементи');
    for (const mixedElement of mixed) {
        if (typeof mixedElement == "string") {
            console.log(mixedElement);
        }
    }
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
    let arr = [];
    arr[0] = 'kdjfhjdj';
    arr[1] = 1039848;
    arr[2] = true;
    arr[3] = 12.7;
    arr[4] = 'dkllf';
    arr[5] = false;
    arr[6] = 1837;
    arr[7] = 1;
    arr[8] = 13.8;
    arr[9] = 100500;
    for (const arrElement of arr) {
        console.log(arrElement);
    }
    document.write(`<h3>Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write</h3>`);
    console.log('    Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write');
    for (let i = 0; i < 10; i++) {
        console.log(i);
        document.write(`<p>${i}</p>`)
    }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
    document.write(`<h3>Створити цикл for на 100  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write</h3>`);
    console.log('    Створити цикл for на 100  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write');
    for (let i = 0; i < 100; i++) {
        console.log(i);
        document.write(`<p>${i}</p>`)
    }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
    document.write(`<h3>Створити цикл for на 100  ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write</h3>`);
    console.log('    Створити цикл for на 100  ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write');
    for (let i = 0; i < 100; i += 2) {
        console.log(i);
        document.write(`<p>${i}</p>`)
    }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
    document.write(`<h3>Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write</h3>`);
    console.log('    Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write');
    for (let i = 0; i < 100; i++) {
        if (i % 2 === 0) {
            console.log(i);
            document.write(`<p>${i}</p>`)
        }
    }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

    document.write(`<h3>Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write</h3>`);
    console.log('    Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write');
    for (let i = 0; i < 100; i++) {
        if (i % 2 === 1) {
            console.log(i);
            document.write(`<p>${i}</p>`)
        }
    }
//
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
    let books = [
        {
            title: "Around the world in 350 days",
            pageCount: 538,
            genres: ["adventure", "criminal"],
            authors: [{
                name: "Zhul Vern",
                age: 47
            }, {
                name: "Felisity Smoak",
                age: 22
            }]

        },
        {
            title: "Harry Potter",
            pageCount: 680,
            genres: ["fantasy", "horror"],
            authors: [{
                name: "Joan Roalling",
                age: 38
            }]
        },
        {
            title: "Angel Empire",
            pageCount:340,
            genres: ["detective", "romantic", "drama"],
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
    ]


// -знайти наібльшу книжку.
let maxPages = books[0].pageCount;
    let maxPageBook =books[0];
    for (const book of books) {
        if(book.pageCount>maxPages){
            maxPages = book.pageCount;
            maxPageBook = book;
        }
    }
    document.write(`<h2>The biggest book is : ${maxPageBook.title} -${maxPageBook.pageCount}</h2>`)
// - знайти книжку/ки з найбільшою кількістю жанрів
    let  maxGenresCount = books[0].genres.length;
    let maxGenresBook =books[0];
    for (const book of books) {
        if(book.genres.length>maxGenresCount){
            maxGenresCount = book.genres.length;
            maxGenresBook = book;
        }
    }
    document.write(`<h2>The biggest count of genres  has  the book : ${maxGenresBook.title} -${maxGenresBook.genres}</h2>`)

// - знайти книжку/ки з найдовшою назвою
    let  maxTitle = books[0].title.length;
    let maxTitleBook =books[0];
    for (const book of books) {
        if(book.title.length>maxTitleBook){
            maxTitleBook = book.title.length;
            maxTitleBook = book;
        }
    }
    document.write(`<h2>The biggest title  has the book : ${maxTitleBook.title} -${maxTitleBook.title.length}</h2>`)

// - знайти книжку/ки які писали 2 автори
    for (const book of books) {
        if(book.authors.length == 2){
            document.write(`<h5>Book with 2 authors:  ${book.title}</h5>`)
        }
    }
// - знайти книжку/ки які писав 1 автор
    for (const book of books) {
        if(book.authors.length == 1){
            document.write(`<h5>Book with 1 author:  ${book.title}</h5>`)
        }
    }
}