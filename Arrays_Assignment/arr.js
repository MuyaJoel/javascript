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


//still sir working on this .