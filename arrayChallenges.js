let teaFlavours = ["green tea", "black tea", "oolong tea"];
const firstTea = teaFlavours[0];
// console.log(firstTea);

let cities = ["London", "Tokyo", "Paris", "New York"];
const favouriteCity = cities[2];
// console.log(favouriteCity);

let teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";
// console.log(teaTypes);

let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");
// console.log(citiesVisited);

let teaOrders = ["Chai", "Iced tea", "Matcha", "Earl grey"];
const lastOrder =  teaOrders.pop();
// console.log(teaOrders);
// console.log(lastOrder);

let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
popularTeas.pop();
// console.log(softCopyTeas);
// console.log(popularTeas);

let topCities = ["Berlin", "Singapore", "New York"]
let hardCopyCities = [...topCities];
topCities.pop();
// console.log(hardCopyCities);
// console.log(topCities);

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
// let worldCities = europeanCities.concat(asianCities);
// console.log(worldCities);