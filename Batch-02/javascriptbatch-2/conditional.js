let a = 1000;
let b = 100;

// if (a > b) {
//     console.log("a is greater ");
// } else {
//     console.log("a is smaller");
// }

//  a > b ? console.log("a is greater ") : console.log("a is smaller");//for two condition

// a < b ? "a is smaller ": a>b ?"a is greater":console.log("not valid");//for three condition






// question:-check if a>b, if it is true then print "you are right" in console otherwise print "you are wrong"le
// BMI=?
// let BMI;
// let height = 2;
// let weight = 180;
// BMI = weight / (height * height)///80/16=5
// console.log(BMI, "BMI");

// if (BMI < 40) {
// console.log("mota");
// } else if (BMI >= 40 && BMI <= 60) {
// console.log("healthy");
// } else {
//     console.log("Suresh");
// }


// var purchaseAmount = 120;
// let discount;

// if (purchaseAmount >= 100) {
//     discount = 20;
// } else if (purchaseAmount >= 50) {
//     discount = 10;
// } else {
//     discount = 0;
// }
// console.log("Discount: " + discount + "%");



// ##Ticket Pricing
// Scenario: Write a program that calculates the ticket price based on age.

// let age = 54;
// var price;
// if (age < 9) {
//     price = 0
// } else if (age >= 9 && age <= 50) {
//     price = 60

// } else if (age >= 51 && age <= 60) {
//     price = 40

// } else {
//     price = 10;
// }
// // console.log("price value Rs",price)
// console.log(`ticket price is $${price}`)


// let price = 580;
// let discount;
// if (price < 50) {

//     discount=price-price*(0/100)

// } else if (price >= 50 && price <= 100) {
//     discount=price*(50/100)
// } else if(price>200) {
//     discount = price * (60 / 100)
//     price = price-price * (60 / 100)+10
// }
// console.log(`Discount price is ${discount}`);
// console.log(`updated price is ${price}`);



let day = 4;
let dayName;

switch (day) {
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break;
    case 3:
        dayName = "Tuesday";
        break;
    case 4:
        dayName = "Wednesday";
        break;
    case 5:
        dayName = "Thursday";
        break;
    case 6:
        dayName = "Friday";
        break;
    case 7:
        dayName = "Saturday";
        break;
    default:
        dayName = "Invalid day";
}

console.log("The day is: " + dayName);
