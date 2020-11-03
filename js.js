var user = {
    name: 'Giorgi',
    age: 25,
    gender: 'male'
};
// Task1
if (user.age < 18) {
    console.log('არასრულწლოვანი')
}
else if (user.age >= 18 && user.gender == 'male') {
    console.log('სრულწლოვანი ბიჭი')
}else {
    console.log('დაფიქსირდა შეცდომა')
}
// Task2

let cars = ["audi", "bmw", "lexus", "volkswagen", "ferrary", "porsche"];
console.log(cars[0]);
