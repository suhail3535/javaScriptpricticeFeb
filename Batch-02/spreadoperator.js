// let arr1 = [1, 2, 3]
// let arr2 = [11, 22, 32]
// let arr3 = [...arr1, ...arr2, 10, 20, 50, "mohan", "suresh"]
// // console.log(arr3);

// let data = ""
// let result;
// let c = data.length
// if (c>0&&c<=5 ) {
//     result = "week pass"
// } else if (c >= 6 && c <= 10) {
//     result = "strong pass"

// } else {

//     result = "not satisfied"
// }
// console.log(result);


// <---------Functions-------->
// What is a function in JavaScript ?
// A JavaScript function is a block of code designed to perform a particular task.
// A function is executed when "something" invokes it(calls it).




let details = [
    { name: "sohan", age: 24,city:"rajasthan" },
    { name: "sohan", age: 14, city: "mp" },
    { name: "suresh", age: 40, city: "delhi" },
    { name: "aman", age: 30, city: "U.P" }
]
let data = details.filter(function (costItem) {
    return costItem.city=="mp" || costItem.city=="U.P"
});
console.log(data);
