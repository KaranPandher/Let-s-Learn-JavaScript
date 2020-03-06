// alert('Hello, World!'); // To see if its linked 

var myVariable = '38.9587';
console.log( myVariable + 5); // OOP, one of these is a string so plus is concatenating

myVariable = parseFloat(myVariable);
console.log(myVariable); //Floating point number, decimal maintained. Is now a numeric 

myVariable = parseInt(myVariable); // Converted to integer, decimal removed. 
console.log(myVariable); //38

myVariable = Number(myVariable); //Converted to any number type it can. 
console.log(myVariable);

myVariable = myVariable + 5; // Addition beware of + as it can add or concatenate depending on if any of the operands are strings
console.log(myVariable);

myVariable = myVariable.toString(); // Convert back to a string. 
console.log(myVariable);

var myArrayofDataTypes = [
    //Bolleans
    true,
    false,
    // Null
    null,
    // Number
    34,
    168.973,
    //String
    'Hello World!',
    // Value not defined 
    undefined,
    // Not a number:
    NaN,
    [1,2,3,4,5] //An array in an array
];

var myDataList = document.createElement('DL'); //Wont shwo yet! We didnt tell it where to go. 

for (var i =0; i < myArrayofDataTypes.length; i++)
{
    //(ASSIGNMENT; TERMINATION CONDITION; ITERATION)
    //Create datalist title 

var dataListTitle = document.createElement('DT');
dataListTitle.textContext = typeof myArrayofDataTypes[i]; //Output datatype 

//Create datalist title. 
var dataListData = document.createElement('DD');
dataListData.textContent = myArrayofDataTypes[i];

//Add our new elements to our datalist 
myDataList.appendChild(dataListTitle);
myDataList.appendChild(dataListData);
}

//This is adding HTML to the end of your body. 
document.body.innerHTML += `<!-- Back ticks are used in Js for multi line strings. -->
    <h2>
    Our data-type test: 
    </h2>`;

// Add ALL of that to the body! YAY! We should be able to see it now. 
document.body.appendChild(myDataList);

//Get by ID:
var myHeading = document.getElementById('my-heading');
myHeading.title = 'This is a heading.'; //Tooltip attribute. 
// myHeading.style.color = 'darkgray'; //Pleae avoid using inline styles.. this is the CSS file's job
myHeading.className = 'gray-text'; // Use classes instead! 
// Can call this class in CSS now. .

// Heading is targeted in this event. Anon function. 
myHeading.addEventListener('mouseover', function(event){
    this.className = 'salmon-text';
});
// Replaces the color of heading to salmon when you mouse over it. 
//We can add event listeners to 

myHeading.addEventListener('mouseleave', function(event){
    this.className = 'indigo-text';
});

myHeading.addEventListener('click', function(event){
    // The class we want to add. 
    var bigClass = 'big-text'; // Check if it already has it ! 
    if (!this.className.includes(bigClass))
   { //Exlamation means does NOT equal too. So fires OPPOSITE
    this.className += ' big-text'; //Concatenating a new class! 
   }
}); // Remember you must have a SPACE between classes when assigning multiple!!!! 

/**
 * Let's make a function. 
 */

 // Function keyword followed by function name and parameters if any are needed
 function addTwoNumbers (x,y){
     x = Number(x); //Emfprce data type (number)
     y = Number(y); // Enforce data type (number.)
     return(x+y) // Add the two together 
 }

 // Returb current date as a string (2020/03/06)
 function currentDayString()
 {
     //New date object.
     var date = new Date();
     // Declare a string we can store data info in
     var dateString ='';
     dateString += date.getFullYear(); // Year 
     dateString += '.';
     dateString += date.getMonth(); // Month 
     dateString += '.';
     dateString += date.getDay(); // Date 
     return dateString;
 }

 console.log('The current date is: \r\n' + currentDayString());
 // \r\n RETURN NEW LINE