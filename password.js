// code solution here

let pwLength = 0
let nPasswords = 0

const userInput = process.argv
userInput.shift()
userInput.shift()

// console.log(userInput)

pwLength = userInput[0]
nPasswords = userInput[1]

function makePw(pwLength)
{
var pw = "";
var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for(var i=0; i < pwLength; i++ )
{  
pw += char_list.charAt(Math.floor(Math.random() * char_list.length));
}
return pw;
}

for (let i=0; i < nPasswords; i++) {
    // makePw(pwLength)
    console.log(makePw(pwLength))
}

// console.log