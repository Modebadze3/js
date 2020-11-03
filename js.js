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

let cars = ['audi', 'bmw', 'lexus', 'volkswagen', 'ferrary', 'porsche'];
for (let i = 1; i < cars.length; i++) {
    console.log(cars[i])
};
// Task3

let names = ['rezo', 'beso', 'kenzo', 'giorgi']
for (let i = 0; i < names.length; i++) {
    if (names[i].length > 4) {
        console.log(names[i])
    }
}