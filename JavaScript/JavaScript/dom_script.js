// JavaScript source code

//Destructing array
const programmming = ['js', 'c', 'c++', 'java'];

//in es5
/*var top1 = programmming[0];
var top2 = programmming[1];

console.log(top1);*/

//es6
//let [top1, top2, top3, top4] = programmming;
//console.log("My favourite programming language is " + top1);


/*console.log(programmming.length);
let [top1, , , top4] = programmming;
console.log(`My favourite programming language is ${top1} and least favourite ${top4}` )


let top1, top2;

[top1, top2] = programmming;
console.log(`My favourite programming language is ${top1} and least favourite ${top2}`)
*/

//Destructing object
const bioData = {
    name: 'chandani',
    age: 21,
    deg: 'be'
}

/*let { name:myname, age, deg } = bioData;
console.log(`my name is ${myname}. My age is ${age}. My highest qualification is ${deg} `);
console.log(`my name is ${bioData.name}`);
*/

/*let name, age, deg;
({name, age, deg} = bioData);
console.log(`my name is ${name}. My age is ${age}. My highest qualification is ${deg} `);
*/

//Rest with array
/*function addNumber(a, b, c, ...other) {
    console.log(other);
    return a + b + c;
}
const res = addNumber(3, 4, 5, 8, 9, 7, 7);
console.log(res);


//Spread with array
var arr = ['chandani', 'roshan', 'nandani'];

function getName(name1, name2, name3) {
    console.log(name1, name2, name3)
}
getName(arr[0], arr[1], arr[2])
getName(...arr)
getName(arr) */


//Rest with object
/*var student = {
    name: "chandani",
    age: 21,
    hobby: ["singing", "dancing"]
}

//const { age, ...rest } = student;
const { ...rest } = student;
console.log(rest)

var newstudent = {
    ...student,
    age:22
}
console.log(newstudent) */