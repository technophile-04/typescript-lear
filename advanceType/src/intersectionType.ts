type Admin = {
	name: string;
	privileges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
	name: 'Max',
	privileges: ['create-server'],
	startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// Overloading the function
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
	// This is a type guard using typeof
	if (typeof a === 'string' || typeof b === 'string') {
		return a.toString() + b.toString();
	}
	return a + b;
}

function printEmployeeInformation(employee: Employee | Admin) {
	console.log('Name: ' + employee.name);
	// in keyword is used to check if that property is present in the object
	// type guard using in keyword
	if ('privileges' in employee) {
		console.log('Privileges: ' + employee.privileges);
	}
}

// Discriminated Unions

interface Bird {
	type: 'bird';
	flyingSpeed: number;
}

interface Horse {
	type: 'horse';
	runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
	let speed: number;
	switch (animal.type) {
		case 'bird':
			speed = animal.flyingSpeed;
			break;
		case 'horse':
			speed = animal.runningSpeed;
			break;
	}
	console.log('Moving at speed: ' + speed);
}

// Type Casting
// Here we are saying that it will be of input type
// ! -> are used if you know that it will never yield null
const userInputElement = document.querySelector(
	'#user-input'
) as HTMLInputElement;

userInputElement.value = 'Hello World';

// Index Properties
interface ErrorContainer {
	// index signature
	[prop: string]: string;
}

const errorBag: ErrorContainer = {
	email: 'Not a valid email',
	username: 'Must start with a character',
};

console.log(errorBag);

// Optional Chaining
const fetchUserData = {
	id: 'u1',
	name: 'Max',
	job: { title: 'CEO', description: 'My own company' },
};

console.log(fetchUserData?.job?.title);

// Null Coalescing
const userInput = null;
// Will go to next only if the value of userInput is null or undefined
// even if its empty string will go to next
const storedData = userInput ?? 'Default';
