// Interface are used only to define the structure of the object
// Class can adhere to the interface, we can many interfaces to one class(implements keyword)
interface Person {
	name: string;
	age: number;

	greet(phrase: string): void;
}

let user1: Person;

user1 = {
	name: 'Shiv Bhonde',
	age: 19,
	greet(phrase: string) {
		console.log(phrase + ' ' + this.name);
	},
};

user1.greet(`Hello, I'm `);

// type AddFn = (a: number, b: number) => number;
// typescript understands that its anonymous function and you want to use it as a function
interface AddFn {
	(a: number, b: number): number;
}

let AddFn = (a: number, b: number): number => {
	return a + b;
};
