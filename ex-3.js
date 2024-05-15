//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";
let message;
//Start coding here
message = lightBulbStatus === "On" || lightBulbStatus === "Off"? "Light bulb is "+ lightBulbStatus :"Please choose the correct input (On/Off)"
console.log(message)