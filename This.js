
//this inside global scope
 
//  (this) here means  global scope which means we r in window scope. 



this.tables='window table';

console.log(this.table); //we can also write "console.log(this.table)"


 this.garage={

 	table:'garage table'    //this.garage is a public property of window because when we write this. we r creating
 								// a public property that can be accesible from outside. 
 }

 this.garage.table

 //or we can use this too "window.garage.table" 


 //this inside an object

 let johnsroom={

 	table:'johns table'
 };

this.johnsroom.table 
 // here we can not use this.johnsroom.table  
 // it will give error because now table is a private variable.


//Now this code will work.

 let johnsroom={

 	table:'johns table'
 };

johnsroom.table 


//This inside a method

 let johnsroom={

 	table:'johns table',
    
 	cleantable(){
  console.log(this)
 		console.log(`cleaning ${this.table}`)  //now this.table means table inside johnsroom
 	}


 };


johnsroom.cleantable();

  this.garage={

 	table:'garage table',   
    
     cleantable(){
console.log(this)
 		console.log(`cleaning ${this.table}`)  
 	}

 };

this.garage.cleantable();

 

 //this inside a function


 "use strict";

 this.table='windows table';

 const clean=()=>{

          console.log(this)
 	console.log(`cleaning ${this.table}`); 

 }

clean();