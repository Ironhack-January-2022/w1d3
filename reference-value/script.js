// primitives are passed by value, objects are passed by reference
// console.log(['z'] === ['z']) // -> false
const numbers = [1, 2, 3, 4, 5]
function double(input) {
	// create a copy of input
	const arr = input
	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i] * 2
	}
	return arr
}
// console.log('before: ', numbers)
// const doubled = double(numbers) // -> [2, 4, 6, 8, 10]
// console.log(doubled)
// console.log('after: ', numbers)

// using a primitive data type
const str = 'abc'
// make a copy
// let copy = str
// change the copy
// copy = 'xyz'

console.log(str)

// using an object
const arr = [1, 2, 3]
// make a copy - use slice() / use [...originalArray] -> spread operator 
// ☝️ creates a shallow copy
// if we have nested objects then we need JSON.stringify() and then JSON.parse() 

const nestedObjects = [{ name: 'bob' }]
const objStr = JSON.stringify(nestedObjects)
const objCopy = JSON.parse(objStr)
// in one line
const copyOneLine = JSON.parse(JSON.stringify(nestedObjects))
console.log(copyOneLine)


const copy = [...arr]
// change the copy 
copy.push(7)
console.log(arr, copy)

const arr1 = ['a']
const arr2 = ['a']
// we change the array to a string -> JSON.stringify(<object>)
console.log(JSON.stringify(arr1) === JSON.stringify(arr2))




