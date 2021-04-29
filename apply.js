


var obj={
         	num:4
}

var addtothis=function(a,b,c)

{
       
     return this.num + a + b + c;

}

console.log(addtothis.call(obj,0,2,1));

    

//with help of apply method we can pass parameters as array;

var arr=[0,1,8];
 console.log(addtothis.apply(obj,arr));


