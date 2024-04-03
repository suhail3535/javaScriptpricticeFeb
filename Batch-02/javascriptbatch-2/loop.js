// Question-1 print 1 to 100
// output like:-1 2 3 4
// Question-2 print 1 to 100
// output like:1
// output like:2
// output like:3
// Question 3 print sum of all number from 1 to 50




// let string = "jaipur";

// let i = 3; // starting point//1

// while (i < string.length) {

//     if (string[i] == "i") {
//         console.log(true)
//     } else {
//     console.log(false)//false//false//true//false//false//false
//     }

//     i++;
// }



// let a = "mohit"
// if (a == "mohit") {
//     console.log(true);
// } else {
//     console.log(false);
// }


// let sum = 0;
// let i = 1;
// while (i<=5) {
//     // console.log(i,"i value");
//     sum = sum + i//
//     i++
// }
// console.log(sum,"sum value");


// Count tha value of a
// a char kitne baar aya hai upar jo string diya hai


// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++
// }
// let j = 1;
// while (j <= 10) {
//     console.log(j);
//     j=j+2;
// }

let value = "jaipur police"
let count1 = 0;
let count2 = 0;
let i = 0;
while (i<=value.length - 1) {
    // console.log(value[i]);
    if (value[i] == "i") {
        count1++
    } else if (value[i] == "p"){
        count2++
    }
    i++
}
console.log(`value of i is ${count1}, value of p is ${count2}`);

"jaipur police"
// count of i
// count of p
// console.log("count of p"conut);
// console.log("count of i"conut);