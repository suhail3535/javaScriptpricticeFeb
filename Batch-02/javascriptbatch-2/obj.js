let ramu = {
    name: "chunnu",
    fname: "munnu",
    age: 30,
    mobile: 9498898980,
    city: "Delhi",
    state:{
        school: "dps",
        class:10
    }

}
console.log(ramu["state"]["class"]);//braket notation
console.log(ramu.state.class);//dot notation
// how to access value from object
//bracket Notation
console.log(ramu["fname"],ramu["age"])
console.log(ramu["mobile"], ramu["city"])

//Dot Notation
console.log(ramu.age,ramu.city)
console.log(ramu.name)