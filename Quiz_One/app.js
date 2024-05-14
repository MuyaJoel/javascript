const number=Math.floor(Math.random() * 11)

let UserInput = prompt("Input a Number between 1 and 10")

if(UserInput === number){
    console.info("Good Work")

}else{
    console.info(`Not Matched, Number is ${number}`)
}

