// Q1 Declare an empty array using JS literal notation to store
// student names in future. 

// let studentNames = [];

// studentNames.push("Abubakar");
// studentNames.push("Anas");
// studentNames.push("Asma");
// studentNames.push("Tayyaba");

// console.log(studentNames)


// Q2 Declare an empty array using JS object notation to store
// student names in future.

// let students = {
//     names: []
// };

// students.names.push("Abubakar");
// students.names.push("Anas");
// students.names.push("Asma");
// students.names.push("Tayyaba");
// console.log(students)

// Q3 Declare and initialize a strings array.

// let studentNames = ["Abubakar", "Asma", "Anas", "Tayyaba"];

// console.log(studentNames)

// // Q4 Declare and initialize a numbers array.

// let numbers = [10, 20, 30, 40, 50];

// console.log(numbers)

// // Q5 Declare and initialize a boolean array.

// let booleanArray = [true, false, true, false, true];

// console.log(booleanArray)

// // Q6 Declare and initialize a mixed array.

// let mixedArray = ["Alice", 25, true, null, { subject: "Math" }];

// console.log(mixedArray )

// Q7 Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// console.log(qualifications)

 // Q8 Display the qualifications in the browser

// document.write("<h3>Available Education Qualifications in Pakistan:</h3>");
// document.write("<ul>");
// qualifications.forEach(function(qualification) {
//     document.write("<li>" + qualification + "</li>");
// });
// document.write("</ul>");



// Q9 Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
// Declare and initialize arrays for student names and scores


// let studentNames = ["Alice", "Bob", "Charlie"];
// let scores = [450, 375, 480]; // Scores out of 500


// console.log(studentNames)
// console.log(scores)


// Q10 Calculate and display scores and percentages


// document.write("<h3>Student Scores and Percentages:</h3>");
// document.write("<ul>");

// for (let i = 0; i < studentNames.length; i++) {
//     let percentage = (scores[i] / 500) * 100; // Calculate percentage
//     document.write("<li>" + studentNames[i] + ": Score = " + scores[i] + ", Percentage = " + percentage.toFixed(2) + "%</li>");
// }

// document.write("</ul>");




// LUCTURE 2

// 1. Declare an empty array


// let emptyArray = [];

// emptyArray.push("Abubakar");
// emptyArray.push("Anas");
// emptyArray.push("Asma");
// emptyArray.push("Tayyaba");

// console.log(emptyArray)


// 2. Code an array with 1 string element

// let singleElementArray = ["Hello"];

// console.log(singleElementArray)

// 3. Print the letter “j” using array index

// var alphabet = ["h", "i", "j", "k"];
// alert(alphabet[2]); // This will alert "j"

// console.log( alphabet)


// 4. Find the total length of the array

// var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
// console.log(alphabet.length); // This will log the total length (8)



// 5. Declare an array with one element, add a second element, and alert the new element

// let myArray = ["First Element"]; // Declare an array with one element
// myArray[1] = "Second Element"; // Add a second element at index 1
// alert(myArray[1]); // This will alert "Second Element"







// 1. Code an array with 1 string element, add an element using push, and alert the last element.

// Step 1: Create an array with one string element

// var myArray = ["Hello"];

// alert( myArray);

// // Step 2: Add an additional element using push


// let student = {
//         names: []
//     };
//     student.push("usama");

// console.log(student);

// // Step 3: Alert the last element
// alert(myArray[myArray.length - 1]); // Alerts: "World"



// 2. Remove the last element from the array Alphabet.

var Alphabet = ["h", "i", "j", "k"];
Alphabet.pop(); // Removes "k"

console.log(Alphabet);



// 3. Add a new element, a number, to the end of an array Alphabet.


// var Alphabet = ["h", "i", "j", "k"];
// Alphabet.push(5); // Adds 5 to the end


// Chapter 16 (Array III)
// 1. Remove the first element of the array sizes.


// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.shift(); // Removes "S"



// 2. Add three number elements to the beginning of an array sizes.


// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.unshift(1, 2, 3); // Adds 1, 2, 3 to the beginning


// 3. Declare an array with one element, add a second element to the beginning, and alert the new first element.

// var myArray = ["First"];
// myArray.unshift("New First"); // Adds "New First" to the beginning
// alert(myArray[0]); // Alerts: "New First"

// 4. Insert "L" into the array sizes between "M" and "XL".

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.splice(2, 0, "L"); // Inserts "L" at index 2


// 5. Copy the first 3 sizes of the array into a new array regSizes.

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// var regSizes = sizes.slice(0, 3); // regSizes = ["S", "M", "XL"]


// 6. Add 2 elements after "dog" and remove "cat", "ox", and "duck".


// var pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(1, 3, "hamster", "rabbit"); // Removes "cat", "ox", "duck" and adds "hamster", "rabbit"



// 7. Remove "cat" and "ox".

// var pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(1, 2); // Removes "cat" and "ox"



// 8. Reduce it to "duck" and "frog" using slice.



// var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
// var reducedPets = pets.slice(3, 5); // reducedPets = ["duck", "frog"]










