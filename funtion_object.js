

     function helloworld(){

     	console.log("hello world");
     }

	



//to see function as object while working in console type console.dir(functionname)  {function name without parenthesis.}
//then we can see function as object with key value pair and methods.
//such as  1. name:"hello world"
//2.length:0   (here length means  parameters in function)

/*
we can use this key value pairs and methods.

helloworld.length
helloworld.name
helloworld.toString();

*/



 var helloworld2=function(val)          //here helloworld2 will be name of function
{
	console.log(`hello ${val}`);
}



var helloworld3=function hw(val)         //here hw will be name of function.
{
	console.log(`hello ${val}`);
}
 
helloworld3("inder"); 


/* we can add key value pairs and methods this function object

// like->  helloworld3.author="master zong";  ,  helloworld3.add=function (n1,n2) { return n1+n2 };