//Exercise 4
// Switch Statement
let lightBulbStatus = "Broken";
let message;
//Start coding here
switch(lightBulbStatus){
    case "On":
    message = "Light bulb is On."
    break;
    case "Off":
    message ="Light bulb is Off."
    break;
    case "Broken":
    message= "Light bulb is Broken."
    break;
    default:
        message="Please choose the correct input (On/Off/Broken)"
}
console.log(message)