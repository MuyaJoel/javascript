//User Input
const string= prompt("Enter a String")

const splitStr=string.split("")
const revStr=splitStr.reverse()
let reverseString=""
revStr.map(char => {
    reverseString=reverseString.concat(char)
}
)
console.log(reverseString)

function revString(string,reverseString){
    if(reverseString==string){
        return `${reverseString} is a Palindrome`
    }else{
        return `${reverseString} is not a palindrome`
    }

}

console.log(revString(string,reverseString))
