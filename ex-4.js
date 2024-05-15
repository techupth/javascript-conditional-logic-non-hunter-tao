//Exercise 4
// Switch Statement
let lightBulbStatus = "On";

switch(lightBulbStatus) {
    case "On": 
        lightBulbStatus = "Light bulb is On.";
        break;
    case "Off": 
        lightBulbStatus = "Light bulb is Off.";
        break;
    default: 
        lightBulbStatus = "Please choose the correct input (On/Off)";
}

console.log(lightBulbStatus);