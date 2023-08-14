//Exercise 8
const firstName1 = "Casey";
const lastName2 = "Crumb";
const fullName = firstName1 + " " + lastName2;
console.log("The full name is", fullName);
const patientName = "Billy Bob";
let apptTime = "6:30pm";
let apptDay = "Monday";

let reminderMessage = `Hi ${patientName}! This is a reminder that you have an appointment at ${apptTime} on ${apptDay}. See you then!`;

console.log(reminderMessage);

const firstName = "Casey"; //add your first name
const lastName = "Crumb"; //add your last name
const fullNameConcat = firstName + " " + lastName; //create your full name from the first two variables using concatenation 
const fullNameInterp = ` ${firstName} ${lastName}` //create your full name from the first two variables using interpolation

//don't change the following line, checks to see that concatenation and interpolation gave results
console.log("Are your fullNameConcat and fullNameInterp variables equal?")
console.log(fullNameConcat == fullNameInterp); 

let myAge = "30"; //add your age
let faveFood = "Mexican"; //add your favorite food
let faveColor = "Green"; //add your favorite color
let miniBio =`Hello! My name is ${fullNameInterp}. I am ${myAge} years old, my favorite food is ${faveFood}, and my favorite color is ${faveColor}.` //use string interpolation to create summary that includes your full name, age, favorite food, and favorite color
console.log("Your mini bio is:");
console.log(miniBio);