

// this.table='window table';

//  const clean=function()

//  {
//  	console.log(`cleaning ${this.table}`);      

//  }

//  	clean();


 	//so for using function on this.table we have call()



 // 	this.table='window table';

 // const clean=function(soap)

 // {


 // 	console.log(`cleaning ${this.table} using ${soap}`);      //now this works properly

 // }

//we can use call for having a single function for multiple objects. 	

// this.garage={
// 	table:'garage table'
// };

// let johnsroom={

// 	table:'johns table'
// };

//  clean.call(this,'some soap'); 
//   clean.call(this.garage,'some soap');
//  clean.call(johnsroom,'some soap'); 
// 


//this inside an innerfunction


"use strict"; //strict mode

	this.table='window table';

 const clean=function()

 {
   
       
 	const innerfunction=function(_soap) 

 	{
         
 	console.log(`cleaning ${this.table} using ${_soap}`);     //error:Cannot read property 'table' of 
 																//undefined

    }

    innerfunction('detergent')

 };

  clean.call(this); 



//sol for this 

//1.write innerfuncion.call(this,'soap');

//2.use arrow function for inner function,(now this will be use from outer scope means clean function scope)

//3.write var that=this; in clean function and use it in inner function.





