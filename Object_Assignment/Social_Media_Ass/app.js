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

function analyseUsers(users){
  const activeUsers=[]
  const PostsArray=[]
  const Likes =[]
  let totaLikes = 0
  users.map((UserArr) => {
    PostsArray.push(UserArr.posts)
    UserArr.posts.map((information) =>{
      const today =new Date()
      const dayPosted =new Date(information.timestamp)
      const dayDiff =(today-dayPosted)/(24*60*60*1000)
      // console.log(dayDiff)
      if(dayDiff < 7){
        activeUsers.push(UserArr.name)
      }
    })
  })
  console.log(`${activeUsers}`)
  const filterUsers=activeUsers.filter((user,index) => activeUsers.indexOf(user) === index)
  console.log(`Active users: ${filterUsers.length}`)
  console.log(`Active Users are: ${filterUsers}`)

  // console.log(PostsArray)
  PostsArray.map((postarr) =>{
    postarr.map((popularPosts) =>{
      if(popularPosts.likes > 10){
        Likes.push(popularPosts.likes)
        console.log(popularPosts)
      }
    })
  })

  totaLikes=Likes.reduce((prev,next) => prev+next)
  const aveLikesPerUser =totaLikes/users.length
  console.log(`Average likes per user is: ${aveLikesPerUser}`)

}
analyseUsers(users)