//1.
const student={
    name:"Joel Muya",
    class:"Y4",
    rollno:"N11/3/0000/020",
    phone:746783765
}

let studentKeys = Object.keys(student)

for(let i=0;i< studentKeys.length; i++){
    console.log(studentKeys[i])
}

//2.deleting a property
console.log(student)
console.log(delete student["rollno"])
console.log(student)

//3.To get the length of an object
const objLength= Object.keys(student).length

console.log(objLength);

//4. Write a JavaScript program to display the reading status 
//(i.e. display book name, author name and reading status) of the following books.

var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    }
   
];

    const readingstatus = Object.keys(library[1])

    for(let i=0; i < readingstatus.length;i++){
        console.log(library[0][readingstatus[i]])
    }

    //7. Write a JavaScript program that returns a subset of a string.
// Sample Data: dog

var data ="dog"
let dataSubset = data.substr(1) 
console.log(dataSubset)

//10. Write a JavaScript program to sort an array of JavaScript objects.
var lib = [ 
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }]
const order={
    id:"libraryID"
}

const orderList = lib.sort((a,b) =>{
    if(a[order.id]>b[order.id]){
        return 1
    }else if(a[order.id]< b[order.id]){
        return -1
    }else{
        return 0
    }
})

console.log(orderList)

//11. Write a JavaScript function to print all the methods in a JavaScript object.
function findMethods(arg){
    return Object.getOwnPropertyNames(arg)
}
console.log(findMethods(Array))

//13. Write a JavaScript function to retrieve all the names of an object's own and inherited properties.

var object={
    inheritedProperty:"Inherite"
    
}
const parentObject={
    novel:"Pearl",
    title:"Kino",
    date:"2011"

}
Object.setPrototypeOf(object, parentObject)

function allPropertyNames(object){
    const propertyNames=[]
    let currentObj = object
    while(currentObj){
        propertyNames.push(...Object.getOwnPropertyNames(currentObj))
        currentObj=Object.getPrototypeOf(currentObj)
    }

    return propertyNames
}
console.log(allPropertyNames(object))

//14. Write a JavaScript function to retrieve all the values of an object's properties.

function values(obj){
    const value = Object.values(obj)
    for(let i=0; i< value.length; i++){
        console.log(value[i])
    }

}
values(object)

//15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.
function convertFun(obj){
    const list =Object.entries(obj)
    list.forEach((key,value) => console.log([`${key},${value}`]))
}

convertFun(object)

//16. Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.
const inFo={
    brand:"Hp",
    model:"Elitebook",
    yearOfManufacture:[2017,2018,2019,2020]
}
function reverseInfo(obj){
    const revInfo ={}
    for( const key in obj){
        if(obj.hasOwnProperty(key)){
            // console.log(obj[key])
            revInfo[obj[key]]=key
        }
    }
    console.log(revInfo)

}

reverseInfo(inFo)




//17. Write a JavaScript function to check whether an object contains a given property.

function checkProperty(obj,property){
    return obj != null && hasOwnProperty.call(obj,property)

}
console.log(checkProperty(inFo,"brand"))
