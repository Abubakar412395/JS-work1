
// CAPTER 17-20


// Q:1



// let multiArray = [];


// multiArray[0] = [1, 2, 3];
// multiArray[1] = [4, 5, 6];
// multiArray[2] = [7, 8, 9];

// console.log(multiArray);



// Q:2


// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];


// console.log(matrix);




// Q:3


// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }




// Q:4


// function printMultiplicationTable() {
 
//     const number = parseInt(prompt("Enter the number for the multiplication table:"));
//     const length = parseInt(prompt("Enter the length of the multiplication table:"));

 
//     for (let i = 1; i <= length; i++) {
//         console.log(`${number} x ${i} = ${number * i}`);
//     }
// }


// printMultiplicationTable();




// Q:5


// const fruits = ["apple", "banana", "mango", "orange", "strawberry"];


// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }




// Q:6

// function generateSeries() {
//     // a. 
//     let counting = [];
//     for (let i = 1; i <= 15; i++) {
//         counting.push(i);
//     }
//     console.log("Counting:", counting.join(", "));

//     // b.
//     let reverseCounting = [];
//     for (let i = 10; i >= 1; i--) {
//         reverseCounting.push(i);
//     }
//     console.log("Reverse counting:", reverseCounting.join(", "));

//     // c.
//     let even = [];
//     for (let i = 0; i <= 20; i += 2) {
//         even.push(i);
//     }
//     console.log("Even:", even.join(", "));

//     // d. 
//     let odd = [];
//     for (let i = 1; i < 20; i += 2) {
//         odd.push(i);
//     }
//     console.log("Odd:", odd.join(", "));

//     // e. 
//     let series = [];
//     for (let i = 1; i <= 10; i++) {
//         series.push(`${i * 2}k`);
//     }
//     console.log("Series:", series.join(", "));
// }


// generateSeries();





// Q:7


// const A = ["cake", "apple pie", "cookie", "chips", "patties"];


// function searchItem() {
 
//     const userInput = prompt("Enter an item to search for:");

    
//     if (A.includes(userInput)) {
//         alert(`"${userInput}" is found in the list.`);
//     } else {
//         alert(`"${userInput}" is not found in the list.`);
//     }
// }


// searchItem();





// Q:8


// const A = [24, 53, 78, 91, 12];


// function findLargestNumber(array) {
//     let largest = array[0]; 

//     for (let i = 1; i < array.length; i++) {
//         if (array[i] > largest) {
//             largest = array[i]; 
//         }
//     }
    
//     return largest;
// }


// const largestNumber = findLargestNumber(A);
// console.log("The largest number is:", largestNumber);





// Q:9


// const A = [24, 53, 78, 91, 12];


// function findSmallestNumber(array) {
//     let smallest = array[0]; 

//     for (let i = 1; i < array.length; i++) {
//         if (array[i] < smallest) {
//             smallest = array[i]; 
//         }
//     }
    
//     return smallest;
// }


// const smallestNumber = findSmallestNumber(A);
// console.log("The smallest number is:", smallestNumber);





// Q:10



// function printMultiplesOfFive() {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 5 === 0) {
//             console.log(i);
//         }
//     }
// }


// printMultiplesOfFive();
















