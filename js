var user = {
    name: 'Giorgi',
    age: 25,
    gender: 'male'
};
if (user.age < 18) {
    console.log('არასრულწლოვანი')
}
else if (user.age >= 18 && user.gender == 'male') {
    console.log('სრულწლოვანი ბიჭი')
};