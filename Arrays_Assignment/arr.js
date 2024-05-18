//Qn1.How do you create an empty array in Javascript
const  emptyList=[];
//To create an empty array i need to declare a variable with empty square brackets

//Qn2.How do you access the first and last elements of an array
const marks=[23,45,56,89,35,25]
//to access the first element of the array 
console.log(marks[0])
//to access the last element of the array
console.log(marks[marks.length-1])

//Q3.How to add an element at the end of an array
//use push() function to add the element
marks.push(50)
console.log(marks)

//Q4.How to remove an element at the end of an array
marks.pop()
console.log(marks)

//Q5.How do you loop in an array in java script
//use for loop

for(let m=0; m< marks.length; m++){
    console.log(marks[m])
}
//Q6.Checking whether an element exists in array
//use the indexOf() method 

if(marks.indexOf(55) !== -1){
    console.log("Element Exists")
}else{
    console.log("Element doesn't Exist")
}

//Q7.How to remove an element of an array at a particular index
//using the splice() method you can remove an element using the 
//index of the element ie:splice(2,1),remove and replace that 
//element ie:splice(3,1, 60) or add an element in an array without 
//removing that element ie: splice(3,0,60) 
marks.splice(3,1)//will remove the element at index 3
console.log(marks)

//Q8.How to concatenate two arrays 
let arr1= [1,2,3,4]
let arr2= [5,6,7,8,9]
let newArr = arr1.concat(arr2)//to add arr2 in arr1
console.log(newArr)

//Flatten Arrays In java script
//Qn1.Write a function to flatten a nested array in java script
let nestedArray =[1,[2,3],[4,5,6],7]
//to flatten the above array we can use methods like; flat(), reduce() and concat(),
//and using recursion with reduce() and concat()methods
function flattenArray(arr){
    let flatArray=arr.reduce((accumulator,value) => accumulator.concat(value), [])
    console.log(flatArray)
}
flattenArray(nestedArray)
//Qn2.What is the function of the reduce() method in the above function

// reduce() method is used to apply function to array elements adding them up into a single
//value.In the above function is used to concatinate the current element iinto the flattened 
//array


//Qn3.Can you give an example of a nested array that the function can be able to flatten?
//Yes, here is an example of a nested array that my function above can flatten.
//let nestedArray =[1,[2,3],[4,,5,6],7]
// flattenArray(nestedArray)//the function will return flatArray=[1,2,3,4,5,6,7]

//Qn4.Explain how the flat() method can be used to flatten an array in java script.
// The flat is a build in method in java script used to flatten arrays, It creates a new array
//with all sub-array elements concatenated  into it recursively up to the specified depth.

// Qn5.What are some potential issues to watch out when flattening an array in javascript?
//One potential issue to watch out is the risk of creating a very large flattened array, which
//could lead to performance issues or memory errors.Also the issue of circular references
//in nested arrays , which could cause infinite recursion if not handled properly



//Qn1.What is the difference between a map() and foreach()
//ans: the map() and foreach() are bothe array methods that differ in what  they return.
// --The map() returns a new array with same length as the original array.
// --The Foreach() does not return anything but simply it executes a callback function on
//each element of the array.
//Example: const arr=[123]
//map() const newarr=arr.map("array" => array*2)// newarr=[2,4,6]
//foreach()  const newarr.foreach(num => console.log(num*2))//2,4,6


//Qn2. How do you remove an element from an array in javascript?
//ans: To remove an element from an array you need to use the splice()method.
//The method modifies the original array by either replacing or removing an element
//of the array.

//Qn3. What is the difference between a .filter() and .find() method?
//ans:Both filter() and find() methods are used to search for elements in an array that
//meet certain standards.
//filter() returns all the elements that passes a certain  test provided by a callback function
//find() returns the first element that passes a test provided by a callback function
let numbers=[2,4,6,7]
const evenNums=numbers.filter((num) => num%2===0)
console.log(evenNums)

const firstEvenNum=numbers.find((num) => num%2 ===0)
console.log(firstEvenNum)

//Qn4.How do you sort an array in javascript?
//ans: To sort an array u can use the sort() method which modifies the original array by 
//sorting its elements in place.
//example:
const fruits= ['bananas','apple','pineapple','mango']
fruits.sort()
console.groupCollapsed(fruits)


//Qn5.How do you flatten a nested array in javascript?
//ans:To flatten an array in javascript you can use the reduce() and concate() methods.
const integers=[1,2,[3,5],7]

const flattenIntegers=integers.reduce((accumulator,value) => accumulator.concat(value),[])
console.log(flattenIntegers)


