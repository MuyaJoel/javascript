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


const users = [
    {
      id: 1,
      name: "John",
      location: "New York",
      friends: [2, 3, 4],
      posts: [
        { content: "Great day at Central Park!", timestamp: "2024-05-10T12:00:00", likes: 15 },
        { content: "Loving the vibes in NYC!", timestamp: "2024-05-15T08:30:00", likes: 8 },
        { content: "Visited the Statue of Liberty today!", timestamp: "2024-05-05T17:45:00", likes: 20 }
      ]
    },
    {
      id: 2,
      name: "Alice",
      location: "San Francisco",
      friends: [1, 3],
      posts: [
        { content: "Hiking in the Bay Area!", timestamp: "2024-05-12T14:20:00", likes: 12 },
        { content: "Enjoying the sunny weather!", timestamp: "2024-05-14T11:10:00", likes: 6 }
      ]
    },
    {
      id: 3,
      name: "Emily",
      location: "Los Angeles",
      friends: [1, 2, 4],
      posts: [
        { content: "Beach day in LA!", timestamp: "2024-05-08T09:45:00", likes: 25 },
        { content: "Exploring Hollywood!", timestamp: "2024-05-16T16:55:00", likes: 5 }
      ]
    },
    {
      id: 4,
      name: "David",
      location: "Chicago",
      friends: [2],
      posts: [
        { content: "Deep dish pizza is the best!", timestamp: "2024-05-11T10:30:00", likes: 18 },
        { content: "Trying out a new jazz club tonight!", timestamp: "2024-05-13T20:00:00", likes: 3 }
      ]
    },
    {
      id: 5,
      name: "Sarah",
      location: "Seattle",
      friends: [3, 1],
      posts: [
        { content: "Coffee time in the Pacific Northwest!", timestamp: "2024-05-09T15:15:00", likes: 9 },
        { content: "Exploring the Olympic National Park!", timestamp: "2024-05-14T07:00:00", likes: 11 }
      ]
    }
  ];




//Develop a single function using map, reduce, and filter to achieve the following:
//1.Filter Active Users: Identify users who have posted at least once in the past week (based on timestamp).
//2.Extract Popular Posts: From the active users' posts, filter out those with less than 10 likes.
//3.Calculate Average Likes per User: Reduce the remaining popular posts to a single value representing 
//the average number of likes per active user across all their popular posts.


function SocialMedia(users){
    let activeUsers=[]
    let post=[]
    let Likes=[]
    users.map((user) =>{
        post.push(user.posts)
        user.posts.map((userPost)=>{
            let today=new Date()
            let datePosted=new Date(userPost.timestamp)
            let diff=(today-datePosted)/(24*60*60*1000)

            if(diff>10){
                activeUsers.push(user.name)
                console.log(user.name)
            }
        })
    })
    console.log(activeUsers)
    const Active=activeUsers.filter((elem, index)=> {
        return activeUsers.indexOf(elem) === index
    })
    console.log(Active.length)
    console.log(Active)

    // console.log(post)

    post.map((popularPost)=>{
        popularPost.map((userPosts)=>{
            if(userPosts.likes>10){
                Likes.push(userPosts.likes)
                console.log(userPosts)
            }
        })

        
    })

    const postTotal=Likes.reduce((prev,next)=> prev+next)
    const aver=postTotal/users.length
    console.log(aver)

}

SocialMedia(users)