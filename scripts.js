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

 /**
  * Lets review some ocnditions related operators... 
  */
 //Check for rquivalency (type-agnostic)
 console.log(1 == true); // Returns true

 console.log('Hello, World!' == true); // False
 console.log(-137 == true); // False 
 console.log( 'test' == 'test'); // True 
 console.log( 36 == '36'); // True 
 console.log(0 == false); // True 

 //Check if identical value comparsion including type. 
 console.log( 1 === true); // Returns false 
 console.log(-137 === true); // False 
 console.log( 'test' === 'test'); // True 
 console.log(36 === '36'); // False 
 console.log(0 == false); // True 
 console.log( 'test string' === "test string") // True

 /**
  * HAMBURGER MENU
  */
 // Let's grab our menu...
 var myNav = document.querySelector('nav');

 // And our menu button ... 
 var myNavButton = document.querySelector( '.menu-button');

// Lets listen for a click on this. 
 myNavButton.addEventListener('click', function(event) {
        // When clicked add/remove the "nav-open" class (in HTML)
      myNav.classList.toggle('nav-open');
});

/**
 * Lets dig into objects! 
 */
var myObject = {
    name: 'Jerry',
    age: 61,
    hobbies: [
        'snowboarding',
        'action movies'
    ]
};

console.log(myObject);

console.log('Object "name": ' + myObject.name);
console.log('Object "age": ' + myObject.age);
console.log('Object "hobbies": ' + myObject.hobbies[0] + ', ' + myObject.hobbies[1]);

// Lets add to the hobbies array... just like normal! It is an array afterall. 
// Just stored in an object property instead of a variable this time 
myObject.hobbies.push('programming');
console.log('Updated hobbies:')
console.log(myObject.hobbies);

console.log('Updated objecT: ');
console.log(myObject);

var newObject = {
    myNum: 5,
    updatedNum: function() { // Here is a method! Note the new syntax, versus a function. 
    this.myNum = this.myNum + 5;
    return this.myNum; 
    }
}
// newObject.mynum will return 5; however newObject.updatedNum will return 10; Ultimately myObject.myNum now will send 10 as well. 

/**
 * Object Constructors 
 */
function Person (name, age, hobbies) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies; 
}

var jerry = new Person( 'Jerry', 61 ['snowbarding', 'action movies', 'programming']);
var sally = new Person('Sally', 36, ['daredevil biking', 'skydiving', 'teaching'])