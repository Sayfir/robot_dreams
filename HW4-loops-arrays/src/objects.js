const obj = {
    name: 'Andrii',
    lastName: 'Prokofiev',
    additionalInfo: {
        age: 36,
        gender: 'male',
        hobbies: ['bouldering', 'rock climbing', 'cycling'],
        func: function (age) {
            this.age = age;
        }
    },
    setName(name) {
        this.name = name;
    }
};

console.log(obj.lastName);

obj.setName('Jack');
console.log(obj.name);

obj.additionalInfo.func(45);
console.log(obj.additionalInfo.age);
