/* 
Create a new file called password.js. Write a program that does the following:
Create a variable called password and set it’s value to a string of your choice.
Write a conditional statement that checks if the password meets the following constraints:
At least 10 characters long
Contains at least one letter and one number
If the password meets the constraint, console log a success message.
If the password fails the constraint, console log a failure message.
Test out your conditional by changing the value of your password variable and running your file!
*/

// let password = "Drogon&Nugget123"
// let splitPassword = password.split("")
// let conditionsMet = 0
// if (password.length >= 10) conditionsMet++;
// if (password.match(/[a-z]/) || password.match(/[A-Z]/)) conditionsMet++;
// if (password.match(/\d+/)) conditionsMet++;
// console.log(`Number of conditions met: ${conditionsMet}/3`)
// if (conditionsMet === 3) {
//     console.log("Password creation was a success.")
// } else {
//     console.log("Password creation failed.")
// }

/*
There are many other constraints you might want to check for the password.
Add more constraints and checks to your program.
*/

//The three extra constraints I added were:
// -to make sure that there are no more than 20 characters
// -to make sure that there are no spaces
// -to make sure that the password doesn't contain the word 'password'

let password = "Nugget&Drogon123"
let splitPassword = password.split("")
let conditionsMet = 0
//Checks that password contains atleast 10 characters and no more than 20 characters. 
if (password.length >= 10 && password.length <= 20) conditionsMet++;
//Checks that password contains atleast one letter.
if (password.match(/[a-z]/) || password.match(/[A-Z]/)) conditionsMet++;
//Checks that password contains atleast one number.
if (password.match(/\d+/)) conditionsMet++;
//Checks that passwords contains are no spaces.
if (!password.match(" ")) conditionsMet++;
//Checks that password doesn't contain the string 'password'.
if (!password.match("password")) conditionsMet++;
console.log(`Number of conditions met: ${conditionsMet}/5`)
if (conditionsMet === 5) {
    console.log("Password creation was a success.")
    console.log(`    ╔═╗╦ ╦╔═╗╔═╗╔═╗╔═╗╔═╗
    ╚═╗║ ║║  ║  ║╣ ╚═╗╚═╗
    ╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝`)
} else {
    console.log("Password creation failed.")
    console.log(`
    ╔═╗╔═╗╦╦  ╦ ╦╦═╗╔═╗
    ╠╣ ╠═╣║║  ║ ║╠╦╝║╣ 
    ╚  ╩ ╩╩╩═╝╚═╝╩╚═╚═╝
    `)
}
            
    




