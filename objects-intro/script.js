// console.log('intro to objects')

// objects - unordered collection of any (keyed) values

const emptyObj = {}

// property: key: value
const dog = {
	'name': 'Rufus',
	age: 4,
	hobbies: ['running', 'eating'],
	'key with spaces': 'hello',
	address: {
		city: 'Berlin',
		location: 'Friedrichshain'
	}
}

// console.log(dog)

// accessing values
console.log(dog.name)

// accesing a value using a variable
// const key = 'age'
// i want to use the variable key to access this property
// for this we use the bracket notation
// console.log(dog[key])
// also if we access a key that contains spaces
console.log(dog['key with spaces'])

// access a nested object
console.log(dog.address.city)

// you cannot reassign another obj if you used const
// dog = {} -> ❌

dog.secondName = 'Elvis'
dog.age = 5
console.log(dog)



// const key = prompt('which property of the dog do you want to to see?')
// console.log(key)
// alert('the prop you requested is: ' + dog[key])


// deleting a property
delete dog.age
console.log(dog)

// checking if a property exists

// this would work:
// if (dog.x === undefined) {
// 	console.log('not existing')
// }
// 'key' in <name of the obj>
if ('name' in dog) {
	console.log('the key exists')
}
console.clear()

const person = {
	name: 'Alice',
	age: 33
}

// for in loop
for (let key in person) {
	console.log(person[key])
}

const keys = Object.keys(person)
console.log(keys)

for (let i = 0; i < keys.length; i++) {
	console.log(keys[i])
}

Object.keys(person).forEach(function (element) {
	console.log(person[element])
})


const values = Object.values(person)
console.log(values)

// this returns an array containg arrays for every 
// key value pair with key and value
// const entries = Object.entries(person)
// console.log(entries)

const persons = [
	{
		name: 'Alice',
		age: 33
	},
	{
		name: 'Bob',
		age: 36
	}
]

// iterate over persons and log every name
for (let person of persons) {
	// console.log(person)
	console.log(person.name)

}