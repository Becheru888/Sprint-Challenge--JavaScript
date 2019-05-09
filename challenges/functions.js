// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume(parm1,parm2,cb){
 return cb(parm1,parm2)
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(num1,num2){
  return num1 + num2
}

function multiply(num1,num2){
  return num1 * num2
}

function greeting(first_name,last_name){
  return `Hello ${first_name} ${last_name}, nice to meet you`
}


/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!



// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

//Explanation: Becouse internal const sets in the same scope with `nestedfunction()`.

//For example another explination for the external const.

// Explanation: Becouse external seats on the global scope, and every variable defined on the global scope is visible from inside o any function.
// When external const is called by the console.log first time console.log will look into myFunction scope, if is not there it will look above that and so on.

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();