// var name = prompt("Кто пришел?", "");
// var pass = prompt("Пароль?", "");

// var num1 = prompt('Input number1: ', 0);
// var num2 = prompt('Input number2: ', 0);

// var res = +num1 + +num2;


// alert('Result = ' + res);



// var bone1 = Math.floor(Math.random() * 6 + 1);
// var bone2 = Math.floor(Math.random() * 6 + 1);

// alert(bone1);
// alert(bone2);


//******************* */

// var randomNumber = Math.floor(Math.random() * 2);

// if (randomNumber) {
//     alert('Eagle');
//  } else {
//         alert('Tails');
//     }

// randomNumber?alert('Eagle'):alert('Tails');

// (Math.random() > 0.5)?alert('Eagle'):alert('Tails');

//*********** */

// var humanNumber
// do {
//     humanNumber     = +prompt('PLease, provide number greater than 1');
// } while (humanNumber <= 1);

// while ( ( humanNumber     = +prompt('PLease, provide number greater than 1') ) <= 1) {}

// var randomNumber    = Math.ceil(Math.random() * humanNumber);

// alert(randomNumber);

//********** */

// var number1, number2;


// do {
//     number1 = +prompt("Please, provide number1");
//     number2 = +prompt("Please, provide number2");
// } while (!((number1 < number2) && (number1 >= 0)));

// var randomNumber;


// var i;
// for (i = 0; i < 10; i++) {
//     randomNumber = Math.ceil(Math.random() * (number2 - number1) + number1);
//     console.log(randomNumber);
// }

//*********** */

// var requestStr = prompt('Каково «официальное» название JavaScript?');

// if (requestStr == "ECMAScript") {
//     alert('Верно!');
// }  else {
//     alert('Не знаете?  «ECMAScript»!');
// }


//********* */

// var result = (a + b < 4)?'Мало':'Много';

//alert(result);


//********* */

var nameAdmin = prompt('Кто пришел?');

if (nameAdmin == 'Админ') {
    var pass = prompt('Пароль?');

    if (pass == 'Черный Властелин') {
        alert('Добро пожаловать!');
    } else if (pass == null ) {
        alert('Вход отменён');
    } else {
        alert('Пароль неверен');
    }

} else if (nameAdmin == null) {
    alert('Вход отменен');
} else {
    alert('Я вас не знаю');
}













