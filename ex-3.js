//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";

const status = (lightBulbStatus === "Off" || lightBulbStatus === "On" ? "Light bulb is "+lightBulbStatus : "Please choose the correct input (On/Off)");
console.log(status);