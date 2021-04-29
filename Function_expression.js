
/*you can give a function expression a name. 
Named function expressions allow a function expression
 to refer to itself, which is useful for self-recursion: */

 var fac = function me(n) {

  if (n > 0)
  
   {   
   	   return n * me(n-1);
   	   
   }

   else

    {
       return 1;
    }

}; 

 console.log(fac(3)); 

/*  logic of above problem:

  3 *  me(2)
  3 * 2 * me(1)
  3 * 2 * 1 * me(0)


*/


var sum=function add(n)

{

if(n>0)
{

	return n + add(n-1);;
 
}
else{


	return 0;
}


};

console.log(sum(3));
//logic of above problem:

//  3 + add(2)
//  3 + 2 + add(1)
//  3 + 2 + 1 + add(0) 
//  3 + 2 + 1 + 0


var add = new Function('x', 'y', 'return x + y');
console.log(add(5,9));

// var add = new function (x, y)
// { 
	
// return x + y;

// };

// console.log(add(5,9));


