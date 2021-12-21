'use strict';

const x = 12345;

function myfunction() {
   let a = x.toString();
   let b = a.split("");
   let c = b.reverse();
   let result = c.join("");
   console.log(result);
}
myfunction();





