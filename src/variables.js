// // re-deklaracja
// var x = 42;
// let x1 = 42;
// const x2 = 42;
//
// var x = 10; // vara można re deklarować, ale tylko quirks mode
// let x1 = 10; //nie można
// const x2 = 10; // nie można

// re-inicjalizacja

// var x = 42;
// let x1 = 42;
// const x2 = 42;
//
// x = 10
// x1 = 10
// x2 = 10

// hoisting
// przenoszenie deklaracji zmiennych, funkcji, klas na górę aktualnie przetwarzanego zasięgu

// console.log(x);
// var x = 42;
//
// var x_;
// console.log(x_)
// x_= 42;

// (TDZ= temporary death zone)
// console.log(x);
// let x = 42;


// Scope
// widoczność, dostępność identyfikatorów
// block, function


// if (1){
//     var x = 42;
//     let x1 = 42;
//     const x2 = 42;
// }
//
// console.log(x);
// console.log(x1);
// console.log(x2);

// let x = 42;
//
// function magic(){
//     let x = x + 10;
//     console.log(x);
// }
//
// console.log(x);
// magic();
// console.log(x)

const x = [1, 2, 3];


function magic(collection, value){
    collection.push(value);
}

magic(x, 42)
console.log(x)











