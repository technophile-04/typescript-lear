// its same as name:string[] or we can do any[]
// Array is an build in generic type
const names: Array<string> = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('This is done');
	}, 2000);
});

promise.then((data) => {
	data.split(''); //here it knows you are returning string
});

function merge<T, U>(obj1: T, obj2: U) {
	return Object.assign(obj1, obj2);
}

// Typescript will dynamically know that T will be {name : string} and U will {age : number}
// we gonna take intersection of both
const obj3 = merge({ name: 'Shiv' }, { age: 19 });
console.log(obj3.age);

// Here we are adding constraints to Generic that T will be of object for sure it may be of any structure but it will be object
function merge2<T extends object, U extends object>(obj1: T, obj2: U) {
	return Object.assign(obj1, obj2);
}

interface Lengthy {
	length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
	let description = 'Got no value';

	if (element.length > 0) {
		description = 'Got' + element.length + 'elements';
	}

	return [element, description];
}

console.log(countAndDescribe('hello'));

function extractAndConvert<T extends object, U extends keyof T>(
	obj: T,
	key: U
) {
	return 'The value' + obj[key];
}

console.log(extractAndConvert({ name: 'Shiv' }, 'name'));

class DataStorage<T extends number | string | boolean> {
	private data: T[] = [];

	addItem(item: T) {
		this.data.push(item);
	}

	removeItem(item: T) {
		if (this.data.indexOf(item) === -1) {
			return;
		}
		this.data.splice(this.data.indexOf(item), 1);
	}

	getItems() {
		return [...this.data];
	}
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Shiv');

interface CourseGoal {
	title: string;
	description: string;
	completeUntil: Date;
}

// What does partial do is its says that currently CourseGoal optional but soon gonna assign it
function createCourseGoal(
	title: string,
	description: string,
	date: Date
): CourseGoal {
	let courseGoal: Partial<CourseGoal> = {};
	courseGoal.title = title;
	courseGoal.description = description;
	courseGoal.completeUntil = date;
	return courseGoal as CourseGoal; //Typecasting partial to CourseGoal
}

const names2: Readonly<string[]> = ['Shiv', 'Shankar'];
// names2.push('Shiv');Error because names2 is readonly
// names2.pop();Error because names2 is readonly
