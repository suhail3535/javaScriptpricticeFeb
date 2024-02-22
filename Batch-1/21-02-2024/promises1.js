let bag = [];
let url = " https://restcountries.com/v3.1/all";
async function getUserData () {
    let res = await fetch(url);
    let data = await res.json();
    bag = data;
    console.log(data);
    displayData(bag);
}
getUserData();

function displayData (data) {
    document.querySelector("#all_countries").innerHTML = "";
    data.forEach(function (element) {
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.setAttribute("src", element.flags.png);
        let count = document.createElement("h3");
        count.innerText = element.name.common;
        let pop = document.createElement("p");
        pop.innerText = "Population" + " :" + element.population;
        let reg = document.createElement("p");
        reg.innerText = "region" + " :" + element.region;
        let cap = document.createElement("p");
        cap.innerText = "capital" + " :" + element.capital;
        div.append(image, count, pop, reg, cap);
        document.querySelector("#all_countries").append(div);
    });
}
