
// to hoist means lift or raise 

// .Hoisting in javascript refers to variables and function declarations that 
// are lift or raise to the top of your code.
// This means we can refernce them before they are declared because  they are raised to the top the 
// javascript engine knows that it exist will not give u an error when try to referr that variable.

// In case of function declaration it will be able to find that function and invoke it.

// Eg-
// 	console.log(myName);
// 	var myName = ‘Sunil’;

//	However, a key thing to note is that the only thing that gets moved to the top is the 
//  variable declarations not the actual value given to the variable.

// Let’s look at the same block of code from earlier, but look at how the JavaScript compiler will 
// output the code at runtime:

// var myName;
// console.log(myName);
// myName = ‘Sunil’;

// This is why the console.log is able to output ‘undefined’, because it recognises that the
// variable myName exists, but myName hasn’t been given a value until the third line.

//Eg for Function


// function hey() {
// console.log('hey ' + myName);
// };
// hey();
// var myName = 'Sunil';

// The hey() function call will return undefined .

//how the JavaScript compiler will 
// output the code at runtime:

// function hey() {
// console.log('hey ' + myName);
// };
// var myName;
// hey();
// myName = 'Sunil';

// So by the time the function gets called, it knows that there is a variable called myName, 
//but the variable has not been given a value. 

hoisting();
function hoisting()
{

   console.log(hoist);

//output for this is undefined because if it is dealred down ht e javascript engine still know that variable
//hoist exist
//result is undefined because javascript engine knows it exist but its value  is assigned down .

   var what="variable and function declaration";

   console.log("What is hoisted"+what);

   var hoist="to lift or raise up";

   console.log("Hoist means" + hoist); 
}

//Here hoisting function is hoisted to the top;so we can define them anywhere in our code .
//WE DONT HAVE TO DECLARE THE FUNCTION FIRST THEN CALL IT AFTER ITS DECLARATION.


sum();

var sum=function()
{

	console.log(a+b);
};

var a=2,
	b=3;

	//when we compile it we get error sum is not a function
	//here javascript engine know that sum exist For eg if we  write jus sum we dont get an error.
	//but it does not know that it is a function because  a value has not been assigned to that variable
	// and value that gets assigned is function

	//so the call must be after the function .


	

var sum=function()
{

	console.log(a+b);
};

sum();

var a=2,
	b=3;

//we get (nan) on compiling it because it sees the variable right now as undefined.


//but if we do this way----



var a=2,
	b=3;


	var sum=function()
{

	console.log(a+b);
};

sum();

//then it will work.
