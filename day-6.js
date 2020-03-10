//alert('Hello, world!')
/**
 * Day 6! 
 */

 var myVariable = 3; // Declared in GLOBAL scope. 

 function myFunction() {
     console.log(myVariable);
     // Can we see myVariable in the function?! We can see GLOBALLY scoped variables inside of a function!

     var myFunctionScopeVariable = 64; // Declared in a local (unction) scope. 

     //Function insode of a function?! Is htis even possible??? 
     function myNestedFunction() { //yes
        var myNestedFunctionVariable = 'I\'m very nested!';
        console.log(myNestedFunctionVariable); // Local access works!

        console.log('Accessing function scope variable in nested function: ' +myFunctionScopeVariable); // We can access variables from a PARENT function. But not the reverse. 

        console.log(myVariable); // Global variables / functions are accessible even all tthe way in here. NICE! 
     }
     // Even more nesting? 
            function myDoubleNestedFunction() { 
                var doubleNestedVar = 'Dobule nested var, here!';
                console.log(doubleNestedVar); // We can access locally right?

                    myNestedFunction(); // Can i run this here?! Yup! It was declared in/by a parent so we are good to go! Calling a function inside of itself casues recursion! --> Unless you have a termination condition this causes endless looping. 
            }

            myDoubleNestedFunction(); // This works, same scope that the function was defined! 

     myNestedFunction(); // Lets run it and see! 

 }

myFunction(); // Let's run it and see!
// console.log(myFunctionScopeVariable); // Can we access it outside of the function?! No!! Locally Scoped variables will live and die in their function :D 