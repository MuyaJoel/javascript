// const books={
//     name:"Things we did",
//     author:"Joel Muya",
//     yearOfPublish:2010,
//     pages:300
// }

// // console.log(delete books["name"])
// console.log(books)

// const library ={
//     Institution:"Laikipia University"
// }

// //Inherit properties
// Object.setPrototypeOf(books,library)

// function allPropertyNames(book){
//     const propertyNames=[]
//     let currentObj=book
//     while(currentObj){
//         propertyNames.push(...Object.getOwnPropertyNames(currentObj))
//         currentObj=Object.getPrototypeOf(currentObj)
//     }
//     return propertyNames

// }
// console.log(allPropertyNames(books))


// function rerveseBooksInfo(book){
//     const revInformation={}
//     for(const key in book){
//         if(book.hasOwnProperty(key))
//             revInformation[book[key]] = key
//     }
//     return revInformation
// }
// console.log(rerveseBooksInfo(books))


// myName='Joel Muya'
// // myName.String
// console.log(myName)
// const revStr=[...myName].reverse().join()
// console.log(revStr)

// console.log(myName.at(0))