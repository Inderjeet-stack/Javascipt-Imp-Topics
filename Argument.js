

//Argument Object


// The arguments object is a local variable available within all non-arrow functions. 
// You can refer to a function's arguments inside that function by using its arguments object.
//  It has entries for each argument the function was called with, with the first entry's index at 0.

//arguments[0] first argument


function arg()

{

    console.log(typeof arguments);

    console.log(typeof arguments[2]);//number

  
        console.log("a=>",arguments[0]);

        console.log("b=>",arguments[1]);
           
               //Each argument can also be set or reassigned:

      arguments[2]='Inderjeet';

        console.log("c=>",arguments[2]);

         console.log(typeof arguments[2]);//string


    console.log("length=>",arguments.length); //The number of arguments that were passed to the function.


  for(var i=2;i<arguments.length;i++)

    {
  	    console.log("a+b=>",arguments[0]+arguments[1]);
    }

    console.log(arguments.callee); //Reference to the currently executing function that the arguments belong to.

    

}

arg(2,3,4);


function longestString() {
  var longest = 'Names';

  for (var i=0; i < arguments.length; i++) {
    if (arguments[i].length > longest.length) {
      longest = arguments[i];
    }
  }
  return longest;
}

console.log(longestString('inderjeet','Navdeep Kaur'));

  
