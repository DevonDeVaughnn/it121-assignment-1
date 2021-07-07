const div = document.createElement("div")
let p = document.createElement("p")
let w = document.createElement("p")
p.id="welcome"
w.id="sum"
div.append(p,w)
document.body.appendChild(div)

let welcome = document.querySelector("#welcome")
welcome.append("Welcome to my calculator")

let sum = document.querySelector("#sum")
const num1 = 5
const num2 = 7
result = num1 + num2
sum.append("The sum of "+ num1 + " + " + num2 + " is: " + result )