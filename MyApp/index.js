const Car = require(`./models/Car`)
const { json } = require("express/lib/response");

function sum2Numbers(x, y) {
    return x + y
}

let sum = sum2Numbers(2, 4) //bien sum da dinh nghia o day roi
console.log('tong 2 so lamdksdmnfdk: '+sum)

//chua dinh nghia doi utong person
let person = {} //khai bao va cap phat bo nho cho doi tuong ten la person
person.name = "rejirhjer"; //ok

/*
person.age = 30 //doi tuong person co 2 thuoc tinh la name(ten) va age(tuoi)
person.name = "Linh" //property 
person.email = "linh@gmail.com"
*/
//khai bao luon ca thuoc tinh 
//coder : Linux && MacOS
var productA = {
    name: "iphone X",
    year: 2019,
    description: "This is a iphone, anyone likes it"
}
//JSON.stringify => convert an object to String(readable)
console.log('productA\'s detail: '+JSON.stringify(productA));
//variable is "case-sensitive"
// let x = 120;
// console.log('x = '+x);

var numberOfStudents = 30;
console.log('number of students in my class is: '+numberOfStudents);

console.log(`name = ${person.name}, age = ${person.age}`)
const personB = Object.freeze({
    name: "john",
    age: 30 
})
personB.name = "xxx"; 
console.log(`object's detall = ${JSON.stringify(personB)}`)
const sumOf2Numbers = (x, y) => x + y;
console.log(`moi cong hai bang = ${sumOf2Numbers(1,2)}`)
let numbers = [3, 5, 7, 8, 9, 12, 6, 7, -1]
let filteredNumbers = numbers.filter(eachNumber => {
    console.log('haha')
    return eachNumber > 4
})
//cach 2
let filteredNumbers2 = []
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 4) {
        filteredNumbers2.push(numbers[i])
    }
}
console.log(JSON.stringify(filteredNumbers))
console.log(JSON.stringify(filteredNumbers2))

//const add = (a, b) => a + b
function add(a, b = 10) {
    return a + b 
}
console.log(`tong1 va 2 la : ${add(1)}`)
const sumNumbers = (x, y, ...rest) => {
    let sum = x + y
    rest.forEach(eachParam => {
        
        sum += eachParam
    })
    return sum
}
debugger
sumNumbers(1,2,3,4,5,6)
// tao1 object bat ky
let email = "linh@gmail.com"
const mrLinh = {
    name: "Linh",
    age: 18,
    email: email 
}     
debugger        
console.log(`detail object = ${JSON.stringify(mrLinh)}`)    
//loi dung truyen tham so

//doi tuong chua ki tu dac biet o "key" => ok
let productC = {
    "tên sản phẩm": "iphone 13",
    year: 20220
}
debugger
console.log("haha")
const objectX = {
    x: 10,
    y: 123,
    z: 222,
    //object phuc tap
    rectangle: {
        width: 100,
        height: 200,
        draw: function(param1) {
            console.log(`ban ve cai gi - ${param1}`)
        }
    }
}
//destructuring an object
const {x, y, z} = objectX
const {rectangle} = objectX
const {width, height, draw} = objectX.rectangle
draw(112)
//desctruct an array
let iphoneA = {
    name: "iphone 15",
    year: 2023
}
let iphoneB = JSON.parse(JSON.stringify(iphoneA))
iphoneB.name = "iphone 1555"
//classical
let iphoneC = Object.assign({}, iphoneA)
// mlet iphoneC = {...iphoneA}
let iphoneD = iphoneC;
iphoneC.name = "2xxxx";
console.log(`iphone = ${JSON.stringify(iphoneA)}`)
console.log(`iphoneC = ${JSON.stringify(iphoneC)}`)
console.log(`iphoneD = ${JSON.stringify(iphoneD)}`)
let mazda = new Car({name: "mazda 10", year: 2020})

const makeOperatorObject = (param1) => {
    let i = 0;
    let result = {
        next: () => {
            if(i < 2) {
                i++;
                return {value: {name: "mazda", year:2019}, done: false}
            } else {
                return {value: {name: "meccc", year:2020}, done: true}
            }

        }
    }
    return result
}
let operatorObject = makeOperatorObject("xxx")
//duyet cac doi tuong
debugger
while(!operatorObject.next().done) {
    debugger
    console.log()
}
debugger










                                                                                                                                                                                                                                                                                                                                                                                  