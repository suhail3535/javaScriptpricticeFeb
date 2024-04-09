// // // Question-1 print 1 to 100
// // // output like:-1 2 3 4
// // // Question-2 print 1 to 100
// // // output like:1
// // // output like:2
// // // output like:3
// // // Question 3 print sum of all number from 1 to 50




// // // let string = "jaipur";

// // // let i = 3; // starting point//1

// // // while (i < string.length) {

// // //     if (string[i] == "i") {
// // //         console.log(true)
// // //     } else {
// // //     console.log(false)//false//false//true//false//false//false
// // //     }

// // //     i++;
// // // }



// // // let a = "mohit"
// // // if (a == "mohit") {
// // //     console.log(true);
// // // } else {
// // //     console.log(false);
// // // }


// // // let sum = 0;
// // // let i = 1;
// // // while (i<=5) {
// // //     // console.log(i,"i value");
// // //     sum = sum + i//
// // //     i++
// // // }
// // // console.log(sum,"sum value");


// // // Count tha value of a
// // // a char kitne baar aya hai upar jo string diya hai


// // // let i = 1;
// // // while (i <= 10) {
// // //     console.log(i);
// // //     i++
// // // }
// // // let j = 1;
// // // while (j <= 10) {
// // //     console.log(j);
// // //     j=j+2;
// // // }

// // let value = "jaipur police"
// // let count1 = 0;
// // let count2 = 0;
// // let count=0
// // let i = 0;
// // while (i<=value.length - 1) {
// //     // console.log(value[i]);
// //     if (value[i] == "i") {
// //         count1++
// //     } else if (value[i] == "p"){
// //         count2++
// //     } else if (value[i] == "i" || value[i] == "p") {
// //         count++
// //     }
// //     i++
// // }
// // // console.log(` total count is ${count} value of i is ${count1}, value of p is ${count2}`);



// // // count of i
// // // count of p
// // // console.log("count of p",conut);
// // // console.log("count of i",conut);

// // let num = 1;
// // let oddsum = 0
// // // let evensum=0
// // while (num <=6) {
// //     if (num % 2 == 0) {

// //         evensum=evensum+num
// //         console.log("number is even",num);
// //     } else {

// //         oddsum=oddsum+num
// //         console.log("number is odd",num);
// //     }
// //     num++
// // }
// // console.log("oddsum is", oddsum, "evensum is", evensum);

// // let end = 5
// // let sum = 0;
// // let start = 1;
// // while (start <= num) {
// //     // console.log(start);
// //     sum=sum+start
// //     start++
// // }
// // console.log("sum of all number from 1 to 5 is",sum);

// // let end = 5
// // let sum = 0;
// // let start = 1;
// // while (start <= end) {
// //     if (start % 2 == 0) {
// //         // console.log("number is even**", start);
// //     } else {
// //         // console.log("number is odd", start);

// //     }
// //     start++
// // }
// // console.log(start);

// let num = 2
// function value () {
//     // if (num <= 3) {
//     //     num = 5
//     //     console.log(num);
//     // }
//     num = 10
//     console.log(num);


// }
// console.log(num,"outside");

// value()

let arr = [1, 2, 3];
let sum = 0;
let i = 0;
while (i < arr.length) {
    sum = sum + arr[i]
    i++

}

console.log(sum)
const average = sum / arr.length;
console.log("The average is: " + Math.floor(average));



