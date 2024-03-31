// ASSIGNMENT # 17-20
// QUESTION #1
// var multiArray =[[],[],[]]

// ASSIGNMENT # 17-20
// QUESTION #2
// var multiArray = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]]
// for (var i = 0; i <= 2; i++) {
//     document.write(`${multiArray[i].join(" ")} <br>`)
// }


// ASSIGNMENT # 17-20
// QUESTION #3
// var i;
// for(i=1; i<=10; i++){
//     document.write(`${i} <br>`)
// }


// ASSIGNMENT # 17-20
// QUESTION #4
// var table = +prompt("Enter a number to show its multiplication table");
// var length = +prompt("Enter length of multiplication table");
// var i;
// document.write(`Multiplication table of ${table} <br> Length ${length} <br><br> `)
// for (i = 1; i <= length; i++) {
//     document.write(`${table} x ${i} = ${table * i} <br> `)
// }


// ASSIGNMENT # 17-20
// QUESTION #5
// fruits = ["apple", "banana", "mango", "orange", "strawberry"]

// for (var i = 0; i < fruits.length; i++) {
//     document.write(`${fruits[i]}<br>`)
// }

// document.write(`<br>`)

// for (var i = 0; i < fruits.length; i++) {
//     document.write(`Element at index ${i} is ${fruits[i]}<br>`)
// }

// ASSIGNMENT # 17-20
// QUESTION #6
// (a)
// var counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,]
// document.write(`<h3>Counting :</h3>`)
// for (var i = 0; i < counting.length; i++) {
//     document.write(`${counting[i]},`)
// }

// ASSIGNMENT # 17-20
// QUESTION #6
// (b)
// var reverse = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1,]
// document.write(`<h3>Reverse :</h3>`)
// for (var i = 0; i < reverse.length; i++) {
//     document.write(`${reverse[i]},`)
// }

// ASSIGNMENT # 17-20
// QUESTION #6
// (c)
// document.write(`<h3>Even :</h3>`)
// for (var i = 0; i <= 20; i = i + 2) {
//     document.write(`${i},`)
// }

// ASSIGNMENT # 17-20
// QUESTION #6
// (d)
// document.write(`<h3>Odd :</h3>`)
// for (var i = 1; i < 20; i = i + 2) {
//     document.write(`${i},`)
// }

// ASSIGNMENT # 17-20
// QUESTION #6
// (e)
// document.write(`<h3>Series :</h3>`)
// var series = ['2k', '4k', '6k', '8k', '10k', '12k', '14k', '16k', '18k', '20k']
// for(var i=0; i<series.length; i++){
//     document.write(`${series[i]},`)
// }

// ASSIGNMENT # 17-20
// QUESTION #7
// var user = prompt("Enter Your Dish")
// dish = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
// match = false
// for (var i = 0; i < dish.length; i++) {
//     if (user == dish[i]) {
//         match = true
//         document.write(`${user} is <b>available</b> at index ${i} in our bakery`)
//         break;
//     }
// } if (match === false) {
//     document.write(`We are sorry ${user} is  <b> not available</b> in our bakery`)
// }

// ASSIGNMENT # 17-20
// // QUESTION #8
// largest = [24, 53, 78, 91, 12]
// largestNumber = largest[0];
// for (var i = 1; i < largest.length; i++) {
//     if (largest[i] > largestNumber) {
//         largestNumber = largest[i]
//     }
// }
// document.write(`Array items : 24, 53, 78, 91, 12 <br>`)
// document.write(`The Largest Number is ${largestNumber}`)


// ASSIGNMENT # 17-20
// QUESTION #9
// smallest = [24, 53, 78, 91, 12,];
// smallestNumber = smallest[0];
// for (var i = 1; i < smallest.length; i++) {
//     if (smallest[i] < smallestNumber) {
//         smallestNumber = smallest[i]
//     }
// }
// document.write(`Array items : 24, 53, 78, 91, 12 <br>`)
// document.write(`The smallest Number is ${smallestNumber}`)

// ASSIGNMENT # 17-20
// QUESTION #10
// document.write(`<h3>Multiple of 5 from 1 to 100</h3>`)
// for (var i = 1; i <= 100 ; i++){
//     if(i % 5 == 0){
//         document.write(`${i}<br>`)
//     }
// }