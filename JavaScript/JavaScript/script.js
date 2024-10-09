/*console.log("Chandani");
console.log(23);

let fname = "Chandani";
console.log(fname);

//not use like Fname instead of fname
let Fname = "Chandani";
console.log(Fname);

let $function = 56;
console.log($function);

true;
console.log(true);

let javascript = true;
console.log(javascript);

console.log(typeof javascript);
console.log(typeof 30);
console.log(typeof 30.12);
console.log(typeof 'chandani');

javascript = "Fun";
console.log(typeof javascript);

let java;
console.log(typeof java);

java=15;
console.log(typeof null);

const birthYear = 2001;
//birthYear = 2002;

lastname = "Singh";
console.log(lastname);

const now = 2024;
const chandani_age = now - 2002;
const roshan_age = now - 2002;
console.log(chandani_age, roshan_age);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

//const BMIMark = massMark / heightMark ** 2;
//const BMIJohn = massJohn / (heightJohn * heightJohn);

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn **2 );

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIJohn, BMIMark, markHigherBMI);


const fname = "Chandani";
const job = "teacher";
const birthYear = 1991;
const year = 2035;

const chandani = "I'm " + fname + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(chandani);

const chandani_new = `I'm ${fname}' a ${year
    - birthYear} year old ${job} !`;
console.log(chandani_new);

console.log(`just a normal string....`);
console.log('string with \n\ multiple \n\ lines');
console.log(`string with 
multiple
lines`);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

//const BMIMark = massMark / heightMark ** 2;
//const BMIJohn = massJohn / (heightJohn * heightJohn);

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn ** 2);
console.log(BMIJohn, BMIMark);

/*if (BMIMark > BMIJohn) {
    console.log("Mark's BMI is higher than John's!")
} else {
    console.log("John's BMI is higher than Mark's!")
}*/

/*if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
} else {
    console.log(`John's BMI  ${BMIJohn} is higher than Mark's ${BMIMark}!`);
}
*/

// Type Conversion
/* const inputYear = '1998';
console.log(inputYear + 18);
console.log(Number(inputYear), inputYear);
console.log(typeof inputYear);

console.log(Number(inputYear) + 18);
console.log(typeof inputYear);

console.log(Number('chandani'));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coercian

console.log('i am ' + 22 + ' year old');
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '10' * 3);

let n = '1' + 1;
n = n - 1;
console.log(n); */

// Falsy values - 0, '', undefined, null, NaN;
/*console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('chandani'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("Spend it");
}

//const can't be an undefined
let height;
if (money) {
    console.log("Height Defined");
} else {
    console.log("Height Undefined");
}*/

////////////////////////////////////
// Logical Operators
/*const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}


let hasDriverLicence = false;
const passTest = true;

if (passTest) hasDriverLicence = true;
if (hasDriverLicence) console.log("i can Dreive"); */


// Array in javaScript
/*const friends = ['Nandu', 'Roshan', 'Kajal'];
console.log(friends);

const year = new Array(1991, 2001, 2005);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = 'Jay';
console.log(friends);

const fname = 'chandani';
const chandani = [fname, 'Singh', 2034 - 2002, 'teacher', friends];
console.log(chandani);

console.log(chandani.length); */

//Excercise
/*const calcAge = function (bithYear) {
    return 2034 - bithYear;
}
const year = [1999, 2001, 2002, 2012, 2034];
const age1 = calcAge[year[0]];
const age2 = calcAge[year[1]];
const age3 = calcAge[year[year.length - 1]];

console.log(age1, age2, age3);

const ages = [calcAge(year[0]), calcAge(year[1]),
    calcAge(year[year.length - 1])];
console.log(ages);*/

//Array Functions
/*const friends = ['Nandu', 'Roshan', 'Kajal', 50];
const new_length = friends.push('Rohan');
console.log(friends);
console.log(new_length);

friends.unshift('Mohan');
console.log(friends);

const popped = friends.pop([0]);
console.log(popped);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Nandu'));
console.log(friends.indexOf('Kajal'));

console.log(friends.includes('Nandu'));
console.log(friends.includes('Kajal'));
console.log(friends.includes(50));

if (friends.includes('Kajal')) {
    console.log('You have a friend called Kajal');
}

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 232, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]),
    calcTip(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1],
    bills[2] + tips[2]];
console.log(bills, tips, total);*/

//Objects in JavaScript
/*const chandaniArray = [
    'chandani',
    'Singh',
    2036 - 2002,
    'teacher',
    ['Nandu', 'Roshan', 'Kajal']
];

const chandani = {
    fname:'chandani',
    lname:'Singh',
    age:2036 - 2002,
    job:'teacher',
    friends:['Nandu', 'Roshan', 'Kajal']
};*/

// Dot vs. Bracket Notation
/*const chandani = {
    fname: 'chandani',
    lname: 'Singh',
    age: 2036 - 2002,
    job: 'teacher',
    friends: ['Nandu', 'Roshan', 'Kajal']
};

console.log(chandani);
console.log(chandani.fname);
console.log(chandani.lname);
console.log(chandani.friends);

const nameKey = 'Name';
console.log(chandani['first' + nameKey]);
console.log(chandani['last' + nameKey]);

// console.log(jonas.'last' + nameKey)

const interestedIn = prompt('What do you want to know about chandani? Choose between firstName, lastName, age, job, and friends');
if (chandani[interestedIn]) {
    console.log(chandani[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

chandani.address = 'Surat';
chandani['twitter'] = '@chandani';
console.log(chandani);

console.log(`${chandani.fname} has ${chandani.friends.length} friends, and his best friend is called ${chandani.friends[0]}`);
*/

//Object Method

/*const chandani = {
    fname: 'chandani',
    lname: 'Singh',
    birthYear: 2002,
    job: 'teacher',
    friends: ['Nandu', 'Roshan', 'Kajal'],
    hasDriveLicense: true,

    //calcAge: function () {
    // console.log(this);
    // return 2037 - this.birthYear;
    //}
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.fname} is a ${this.calcAge()}-year old ${chandani.job}, and she has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};

console.log(chandani.calcAge());
console.log(chandani.calcAge());

console.log(chandani.age);
console.log(chandani.age);
console.log(chandani.age);

console.log(chandani.getSummary());
//console.log(chandani.calcAge(2002));
//console.log(chandani['calcAge'](2002));
*/

/*const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}
*/
// Iteration: The for Loop

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// for loop keeps running while condition is TRUE
//for (let rep = 1; rep <= 10; rep++) {
 //   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
//}

/*const chandaniArray = [
    'chandani',
    'Singh',
    2036 - 2002,
    'teacher',
    ['Nandu', 'Roshan', 'Kajal'],
    true
];
const types = [];

for (let i = 0; i < chandaniArray.length; i++) {
    console.log(chandaniArray[i], typeof chandaniArray[i]);
    // types[i] = typeof chandaniArray[i];

    types.push(typeof chandaniArray[i]);
}
console.log(types);

const year = [1991, 2002, 2001, 2003, 2023];
const ages = [];

for (let i = 0; i < year.length; i++) {
    ages.push(2036 - year[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < chandaniArray.length; i++) {
    if (typeof chandaniArray[i] !== 'string') continue;

    console.log(chandaniArray[i], typeof chandaniArray[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < chandaniArray.length; i++) {
    if (typeof chandaniArray[i] === 'number') break;

    console.log(chandaniArray[i], typeof chandaniArray[i]);
}*/

// Looping Backwards and Loops in Loops
/*const chandaniArray = [
    'chandani',
    'Singh',
    2036 - 2002,
    'teacher',
    ['Nandu', 'Roshan', 'Kajal'],
    true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = chandaniArray.length - 1; i >= 0; i--) {
    console.log(i, chandaniArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
    }
}*/

// The while Loop
/*for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 10) {
    // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}*/

/*const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));*/