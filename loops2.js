let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for(let i=0; i<3; i++){
    if(teas[i] === "chai"){
        break;
    }
    selectedTeas.push(teas[i]);
}
// console.log(selectedTeas);

let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];
for(let i=0; i<cities.length; i++){
    if(cities[i] === "Paris"){
        continue;
    }
    visitedCities.push(cities[i]);
}
// console.log(visitedCities);

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];
for (const num of numbers) {
    if(num === 4){
        break;
    }
    smallNumbers.push(num);
}
// console.log(smallNumbers);

let teas2 = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];
for (const tea of teas2) {
    if(tea === "herbal tea"){
        continue;
    }
    preferredTeas.push(tea);
}
// console.log(preferredTeas);

let worldCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let travelledCities = [];
worldCities.forEach(function(city) {
    if(city === "Sydney"){
        return;
    }
    travelledCities.push(city);
});
// console.log(travelledCities);