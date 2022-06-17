"use strict";
// its same as name:string[] or we can do any[]
// Array is an build in generic type
const names = [];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done');
    }, 2000);
});
promise.then((data) => {
    data.split(''); //here it knows you are returning string
});
function merge(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
// Typescript will dynamically know that T will be {name : string} and U will {age : number}
// we gonna take intersection of both
const obj3 = merge({ name: 'Shiv' }, { age: 19 });
console.log(obj3.age);
// Here we are adding constraints to Generic that T will be of object for sure it may be of any structure but it will be object
function merge2(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
function countAndDescribe(element) {
    let description = 'Got no value';
    if (element.length > 0) {
        description = 'Got' + element.length + 'elements';
    }
    return [element, description];
}
console.log(countAndDescribe('hello'));
function extractAndConvert(obj, key) {
    return 'The value' + obj[key];
}
console.log(extractAndConvert({ name: 'Shiv' }, 'name'));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Shiv');
// What does partial do is its says that currently CourseGoal optional but soon gonna assign it
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal; //Typecasting partial to CourseGoal
}
const names2 = ['Shiv', 'Shankar'];
// names2.push('Shiv');Error because names2 is readonly
// names2.pop();Error because names2 is readonly
