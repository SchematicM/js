// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
const minNumber = (num1, num2, num3) => {
    let min = num1;
    if (min > num2) {
        min = num2;
    }
    if (min > num3) {
        min = num3;
    }
    return min;
}
console.log("minNumber(1, 2, 0): " + minNumber(1, 2, 0));
console.log("minNumber(-78, 10, 23): " + minNumber(-78, 10, 23));
console.log("minNumber(127, 103,815 ): " + minNumber(127, 103, 815));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
const maxNumber = (num1, num2, num3) => {
    let max = num1;
    if (max < num2) {
        max = num2;
    }
    if (max < num3) {
        max = num3;
    }
    return max;
}
console.log("maxNumber(3, 7, 9): " + maxNumber(3, 7, 9));
console.log("maxNumber(3, 17, 9): " + maxNumber(3, 17, 9));
console.log("maxNumber(83, 7, 9): " + maxNumber(83, 7, 9));


// - створити функцію яка повертає найбільше число з масиву
const maxElement = (array) => {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
};
console.log('maxElement([1,5,-12,45,7,-9]): ', maxElement([1, 5, -12, 45, 7, -9]))
// - створити функцію яка повертає найменьше число з масиву
//the same implementation is in NotForCheck.js from home tasks

// const minElement = (array) => {
//     let min = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] < min) {
//             min = array[i];
//         }
//     }
//     return min;
// };
// console.log('minElement([1,5,-12,45,7,-9]): ', minElement([1, 5, -12, 45, 7, -9]))
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//the same implementation is in NotForCheck.js from home tasks

// - Дано натуральное число n. Выведите все числа от 1 до n.
const printNumbers = (n) => {
    for (let i = 1; i < n; i++) {
        console.log(i);
    }
}
printNumbers(8);
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
const interval = (a, b) => {
    if (a < b) {
        for (let i = a; i <= b; i++) {
            console.log(i);
        }
    } else {
        for (let i = a; i >= b; i--) {
            console.log(i);
        }
    }
}

interval(17, 26);
interval(10, 0);


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//

const foo = (arr, index) => {
    let temp = arr[index];
    arr[index] = arr[index + 1];
    arr[index + 1] = temp;
    return arr;
}
console.log(foo([9, 8, 0, 4], 0));
console.log(foo([9, 8, 0, 4], 1));
console.log(foo([9, 8, 0, 4], 2));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

const moveZerosToTheEnd = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[count++] = arr[i];
        }
    }
    for (let i = count; i < arr.length; i++) {
        arr[i] = 0;
    }

    return arr;
}

console.log(moveZerosToTheEnd([1, 0, 6, 0, 3]));
console.log(moveZerosToTheEnd([0, 1, 2, 3, 4]));
console.log(moveZerosToTheEnd([0, 0, 1, 0]));