

function Circle(radius)
{

	this.radius=radius;
	this.draw=function(){

		console.log("draw");
	}
}

const circle_1=new Circle(1);
console.log(circle_1);


//new operator


//1 . it creates an empty javascript object
//2. it will set this keyword to point this empty object.
//3. it will return this new object from this function (like return this .) 