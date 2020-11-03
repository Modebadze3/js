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
// Task4

let numbers = [3, 13, 23, 30, 31, 32, 33];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2==0) {
        console.log(numbers[i])
    }
};
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2!=0) {
        console.log(numbers[i])
    }
}; 
// Task5

let user2 = ['name', 'age', 25, 50, 'surname', [100, 500]];{
    console.log(user2[5][1])
};
// Task6

var person = {
    firstname: 'john',
    lastname: 'doe',
    age: 50,
    eyecolour: 'blue'
}; console.log(person.eyecolour)
// Task7

let m = ['karma', 'zed', 'luli', 'jhin', 'kidevinme']
for (let i = 0; i < m.length; i++) {
    console.log(m[i])
}