//devo contare da 1 a 100 ---> uso il for
for (var i = 1; i <= 100; i++) {

//prima condizione che si deve verificare è che se un numero è multiplo si di 3 che di 5 deve scrivere FizzBuzz
  if (i % 3 == 0 && i % 5 == 0) {
    console.log( 'FizzBuzz');

  } else if (i % 5 == 0) { // seconda condizione è che se un numero è multiplo solo di 5 deve scrivere Buzz
    console.log('Buzz');

  } else if (i % 3 == 0) {// Terza condizione è che  se un numero è multiplo di 3 deve scrivere Fizz
    console.log('Fizz');

  } else { // ultima condizione è scrivere i numeri rimanenti in numero
    console.log(i);
  }

}
