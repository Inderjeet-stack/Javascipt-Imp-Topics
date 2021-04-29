

// this.table='window table';

//  const clean=function(soap)

//  {
//  	console.log(`cleaning ${this.table}  using ${soap}`);
//  	}

 	

//   	let createroom=function(name){          //function constructor

//   		this.table=`${name} table`
//   	}

//   	const john=new createroom('john');
//   	const jill=new createroom('jill');

//   	clean.call(this,'soap');
//   	clean.call(john,'soap');
//   	clean.call(jill,'soap');


//using prototype  



this.table='window table';

 
  	let createroom=function(name){          

  		this.table=`${name} table`
  	}

  	createroom.prototype.clean=function(soap)                   //it adds this method to prototype of 
  																//createroom so what happens every object that is createroom creates will have that method automatically
    {

 	console.log(`cleaning ${this.table}  using ${soap}`);

 	}


  	const john=new createroom('john');
  	const jill=new createroom('jill');


  	john.clean('some soap');
  	jill.clean('some soap');

