// Реалізувати друкарську машинку.
//     У вас є текст "Hello World".
//     Ваша функція має друкувати цей текст по 1 симоволу в браузері.
//     КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
//     Цим самим ви маєте симулювати написання даного тексту юзером.
//     Приклад: "Hello"
// Затримки:
//     H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)


// Треба реалізувати свій розпорядок дня.
//     Колбеками, промісами та асинк авейт.
//
//     В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
//     Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.
//
//     Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають.
//     Якщо ж все ок, то ви маєте прожити свій звичайний день.
//     Кожна подія має бути з рандомною (не по зростанню) затримкою.

//колбек
// let num = 0.3;
//
// function myDay(callback) {
//     console.log('wake up');
//     const random = Math.random()
//     setTimeout(() => {
//         console.log(random);
//         if (random < num) {
//             callback('close eyes for a moment')
//         } else {
//             callback(null, 'get up')
//         }
//     }, Math.random() * 1000)
// }
//
// function wash(callback) {
//     console.log('time to poop and wash');
//     const random = Math.random()
//     setTimeout(() => {
//         console.log(random);
//         if (random < num) {
//             callback('no toothpaste, ooops')
//         } else {
//             callback(null,'white tooth is the best')
//         }
//     }, Math.random() * 1000)
// }
//
// function breakfast(callback) {
//     console.log('need a lot of coffee');
//     const random = Math.random()
//     setTimeout(() => {
//         console.log(random);
//         if (random < num) {
//             callback('no coffee')
//         } else {
//             callback(null,'coffee return to life')
//         }
//     }, Math.random() * 1000)
// }
//
// myDay((err, result) => {
//     if (err) {
//         console.log(err, ' ________ Not today. FINISH')
//     } else {
//         console.log(result);
//         wash((err, result) => {
//             if (err) {
//                 console.log(err,' ________ Not today. FINISH')
//             } else {
//                 console.log(result);
//                 breakfast((err, result) => {
//                         if (err) {
//                             console.log(err, ' ________ Not today. FINISH')
//                         } else {
//                             console.log(result);
//                             console.log('That is all')
//                         }
//                     }
//                 )
//             }
//         })
//     }
// })

//промис
// let num = 0.3;
// function myDay() {
//     return new Promise((resolve, reject) => {
//         console.log('wake up');
//         const random = Math.random()
//         setTimeout(() => {
//             console.log(random);
//             if (random < num) {
//                 reject('close eyes for a moment')
//             } else {
//                 resolve('get up')
//             }
//         }, Math.random() * 1000)
//     })
// }
//
// function wash() {
//     return new Promise((resolve, reject) => {
//         console.log('time to poop and wash');
//         const random = Math.random()
//         setTimeout(() => {
//             console.log(random);
//             if (random < num) {
//                 reject('no toothpaste, ooops')
//             } else {
//                 resolve('white tooth is the best')
//             }
//         }, Math.random() * 1000)
//     })
// }
//
// function breakfast() {
//     return new Promise((resolve, reject) => {
//         console.log('need a lot of coffee');
//         const random = Math.random()
//         setTimeout(() => {
//             console.log(random);
//             if (random < num) {
//                 reject('no coffee')
//             } else {
//                 resolve('coffee return to life')
//             }
//         }, Math.random() * 1000)
//     })
// }
//
// myDay('Hello new day!')
//     .then((result) => {
//         console.log(result);
//         return wash();
//     })
//     .then((result) => {
//         console.log(result);
//         return breakfast();
//     })
//     .then((result) => {
//         console.log(result);
//         return breakfast();
//     })
//     .then((result) => {
//         console.log(result);
//     })
//     .catch(error =>{
//         console.log(error, 'DAY IS OVER');
//     })

//асинк
// let num = 0.3;
//
// function myDay() {
//     return new Promise((resolve, reject) => {
//         console.log('wake up');
//         const random = Math.random()
//         setTimeout(() => {
//             console.log(random);
//             if (random < num) {
//                 reject('close eyes for a moment')
//             } else {
//                 resolve('get up')
//             }
//         }, Math.random() * 1000)
//     })
// }
//
// function washMyDingDingDong() {
//     return new Promise((resolve, reject) => {
//         console.log('time to poop and wash');
//         const random = Math.random()
//         setTimeout(() => {
//             console.log(random);
//             if (random < num) {
//                 reject('no toothpaste, ooops')
//             } else {
//                 resolve('white tooth is the best')
//             }
//         }, Math.random() * 1000)
//     })
// }
//
// function breakfast() {
//     return new Promise((resolve, reject) => {
//         console.log('need a lot of coffee');
//         const random = Math.random()
//         setTimeout(() => {
//             console.log(random);
//             if (random < num) {
//                 reject('no coffee')
//             } else {
//                 resolve('coffee return to life')
//             }
//         }, Math.random() * 1000)
//     })
// }
//
// async function madeMyDay() {
//     try {
//         const day = await myDay()
//         console.log('next step..');
//
//         const wash = await washMyDingDingDong()
//         console.log('next step..');
//
//         const brkf = await breakfast()
//         console.log('next step..');
//     } catch (error) {
//         console.log(error);
//     }
// }
//
// madeMyDay()


// Реалізувати друкарську машинку.
//     У вас є текст "Hello World".
//     Ваша функція має друкувати цей текст по 1 симоволу в браузері.
//     КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
//     Цим самим ви маєте симулювати написання даного тексту юзером.
//     Приклад: "Hello"
// Затримки:
//     H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)

let str = 'Hello world';
let arrSplit = str.split('');
console.log(arrSplit);

function typeMachine() {

    setTimeout(() => {
        if (arrSplit.length) {
            let typeLetter = arrSplit.shift();
            console.log(typeLetter);
            document.write(typeLetter);
            typeMachine();
        }
    }, Math.random() * 1000)

}

typeMachine()




