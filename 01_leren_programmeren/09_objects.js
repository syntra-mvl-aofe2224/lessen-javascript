// Object

let newKey = 'keyOne';

function generateKey() {
    let randomKey = Math.floor(Math.random() * 10);

    return randomKey + '_key';
}

let name = 'Korneel';

let anObject = {
    key: 'value',
    1: 'test',
    'lange key': 'other',
    [newKey]: 'more',
    [generateKey()]: 'even more',
    name,
};

console.log(anObject['lange key']);
console.log(anObject[newKey]);
console.log(anObject.newKey);
// Methods

let person = {
    firstName: 'Julie',
    lastName: 'Boone',
    age: 27,
    dog: true,
    fullName() {
        return this.firstName + ' ' + this.lastName;
    },
    otherMethod: function () {},
};

console.log(person.fullName());

// Object.keys() en Object.values()

console.log(Object.keys(person));
console.log(Object.values(anObject));

// For ... in

for (let key in anObject) {
    console.log(key, anObject[key]);
}

let somePersons = [
    {
        name: 'Ben',
        age: 17,
    },
    {
        name: 'Lore',
        age: 20,
    },
    {
        name: 'Peter',
        age: 53,
    },
    {
        name: 'Koen',
        age: 16,
    },
];

function isOverAge(persons) {
    let overAgePersons = [];

    for (let i =0; i < persons.length; i++) {
        let person = persons[i];

        if (person.age >= 18) {
            overAgePersons.push(person);
        }
    }

    return overAgePersons
}


console.log(isOverAge(somePersons));
