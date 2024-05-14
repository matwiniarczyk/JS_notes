const data = [
    {
        name: 'pawel',
        city: 'krakow',
        age: 39,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'mati',
        city: 'gdansk',
        age: 23,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'mateusz',
        city: 'gdansk',
        age: 32,
        hobbies: ['fantasy', 'games', 'football']
    },
    {
        name: 'denys',
        city: 'warsaw',
        age: 27,
        hobbies: ['js', 'python', 'not drugs']
    },
    {
        name: 'adas',
        city: 'szczecin',
        age: 29,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'mikolaj',
        city: 'rozwady',
        age: 23,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'bartek',
        city: 'bielsko',
        age: 25,
        hobbies: ['js', 'python', 'code']
    },
    {
        name: 'maciej',
        city: 'lublin',
        age: 27,
        hobbies: ['dziwki', 'dragi', 'lasery']
    },
    {
        name: 'filip',
        city: 'torun',
        age: 26,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'karol',
        city: 'lidzba',
        age: 32,
        hobbies: ['music', 'martial arts', 'drugs']
    },
    {
        name: 'filip',
        city: 'gdansk',
        age: 28,
        hobbies: ['binge-watching', 'rpg games', 'definitely drugs']
    },
    {
        name: 'agnieszka',
        city: 'warsaw',
        age: 38,
        hobbies: ['music', 'books', 'python']
    },
    {
        name: 'vlad',
        city: 'warszawa',
        age: 19,
        hobbies: ['it', 'games', 'python']
    },
    {
        name: 'kuba',
        city: 'lodz',
        age: 21,
        hobbies: ['js', 'python', 'guitar']
    },
    {
        name: 'karol',
        city: 'krakow',
        age: 39,
        hobbies: ['js', 'piłka', 'ping-pong']
    },
    {
        name: 'maciej',
        city: 'Zielonka',
        age: 23,
        hobbies: ['drugs']
    },
    {
        name: 'mateusz',
        city: 'Warszawa',
        age: 21,
        hobbies: ['coding', 'Ai', 'python']
    }
]

// console.log(data.length);

// policz średnią wieku

function calcAvgAge(people) {
    let totalAge = 0;

    for (let i = 0; i < people.length; i++) {
        totalAge += people[i].age;
    }
    for (const person of people){
    totalAge += person.age
}

    return Math.round(totalAge / people.length)
}

function calcAvAge2(people) {
    return people
        .map((person) => person.age)
        .reduce((acc, ce) => acc + ce) / people.length;
}

const calcAvAge3 = (people) => people
    .map((person) => person.age)
    .reduce((acc, ce) => acc + ce) / people.length;

const calcAvAge4 = (people) => people
    .reduce((acc, ce) => acc + ce.age, 0) / people.length;

const wynik = calcAvgAge(data);
// console.log(wynik)

// policzyć średnią wieku dla osób spoza Warszawy

function avgAgeNoWarsaw(people) {
    let totalAge = 0;
    let counter = 0;

    for (let i = 0; i < people.length; i++) {
        if (!(people[i].city.toLowerCase() === 'warsaw' || people[i].city.toLowerCase() === 'warszawa')) {
            totalAge += people[i].age;
            counter++;
        }
    }

    for (const person of people) {
        if (!(person.city.toLowerCase() === 'warsaw' || person.city.toLowerCase() === 'warszawa')) {
            totalAge += person.age;
            counter++;
        }
    }

    return totalAge / counter;
}

const avgAgeNoWarsaw2 = function (people) {
    const ageOfPeople =
        people
            .filter((person) => !(person.city.toLowerCase() === 'warsaw' || person.city.toLowerCase() === 'warszawa'))
            .map((person) => person.age);

    return ageOfPeople.reduce((acc, ce) => acc + ce) / ageOfPeople.length
}

const result2 = avgAgeNoWarsaw(data);
// console.log(result2)

// Czy jest ktoś z krakow?

function anyoneFromKrakow(people) {

    for (const person of people) {
        if (person.city.toLowerCase() === 'krakow') {
            return true
        }
    }
    return false
}

const anyoneFromKrakow2 = (items) => items.some((item) => item.city.toLowerCase() === 'krakow')

const result = anyoneFromKrakow(data)
// // console.log(result)


// czy wszyscy kochają js

function loveJS(items) {

    for (const item of items) {
        console.log(item)
        if (!item.hobbies.includes('js')){
            return false;
        }
    }
    return true;
}

const isEveryoneLovesJS = (items) => items.every((item) => !item.hobbies.includes('js'));

const result3 = loveJS(data)
// console.log(result3)

//ile jest hobbies bez powtórzenia

function howManyUniqueHobbies(people){
    let counter = 0;
    const hobbies = [];

    for (const person of people){
        for (const hobby of person.hobbies)
        if (!hobbies.includes(hobby)){
            hobbies.push(hobby)
        }
    }
    return hobbies.length
}

const UniqueHobbies = (people) => new Set(people.flatMap((person) => person.hobbies)).size;

const result4 = howManyUniqueHobbies(data)
// console.log(result4)

