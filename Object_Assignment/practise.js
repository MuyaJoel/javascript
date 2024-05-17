const books={
    name:"Things we did",
    author:"Joel Muya",
    yearOfPublish:2010,
    pages:300
}

// console.log(delete books["name"])
console.log(books)

const library ={
    Institution:"Laikipia University"
}

//Inherit properties

Object.setPrototypeOf(books, library)

function allProperty(obj){
    const newList =[]
    let crtObj =obj
    while(crtObj){
        newList.push(...Object.getOwnPropertyNames(crtObj))
        crtObj = Object.getPrototypeOf(crtObj)
    }
    return newList
}

console.log(allProperty(books))

marks=[
    {Joel:90},
    {Eliud:89},
    {John:78}
]
marks.map((mark) =>{
    console.log(mark.Eliud)
})

