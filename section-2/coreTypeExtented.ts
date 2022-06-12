// OBJECT TYPES
// Object type are written almost like js object but instead of have key-value pairs, they kye type pairs.

/* const person = {
	name: 'Shiv Bhonde',
	age: 19,
};
// Object Type : 
// const person: {
//     name: string,
//     age: number,
// } 
// This is done by typscript itself


const person2: {
	name: string;
	age: number;
} = {
	name: 'Jhon Doe',
	age: 20,
};

console.log(person.name);
console.log('Person 2', person2.name); */

/* Of course object types can also be created for nested objects.

Let's say you have this JavaScript object:

const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}
This would be the type of such an object:

{
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  }
}
So you have an object type in an object type so to say. */

// --------------------------------
// ARRAY TYPES
// --------------------------------
const person1 = {
	name: 'Shiv Bhonde',
	age: 19,
	hobbies: ['Sports', 'Cooking'],
};

for (const hobby of person1.hobbies) {
	console.log(hobby.toLowerCase());
}

// --------------------------------
// TUPLE TYPES
// --------------------------------
// A tuple is a data structure that is an array with a fixed number of elements.
// It is used to represent a fixed number of arguments passed to a function.
// The elements in a tuple can be of any type.
// The number of elements in a tuple is fixed at compile time.

const person2: {
	name: string;
	age: number;
	hobbies: string[];
	role: [number, string];
} = {
	name: 'Shiv Bhonde',
	age: 19,
	hobbies: ['Sports', 'Cooking'],
	role: [2, 'author'],
};

// person1.role[0] = 'admin';This will work if dont explicitly define the type of the role but now it will give error as the role is a tuple of 2 elements and the first element is a number and the second element is a string.

// NOTE : we can push an element in tuple using .push() method.
// person2.role.push('admin'); No error

// But this does not works :
// person1.role = [2, 'author', 'admin'];Error

// --------------------------------
// ENUM TYPES
// --------------------------------
// Enum types are a way to define a set of named constants.
// Enum types are useful for defining a set of named integers that might not be a contiguous set of numbers.

enum Role {
	ADMIN = 100,
	READ_ONLY,
	AUTHOR,
}
const person3 = {
	name: 'Shiv Bhonde',
	age: 19,
	hobbies: ['Sports', 'Cooking'],
	role: Role.ADMIN,
};

if (person3.role === Role.READ_ONLY) {
	console.log('Read Only');
}

// --------------------------------
// ANY TYPE
// --------------------------------
let favoriteActivities: any[];
favoriteActivities = ['Sports', 5];
