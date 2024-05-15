//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";
let lightBulbSelect;

lightBulbSelect =
  lightBulbStatus === "On" || lightBulbStatus === "Off"
    ? lightBulbStatus
    : "Please choose the correct input (On/Off)";

console.log(lightBulbSelect);
