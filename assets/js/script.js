"use strict";

let arrNum=[0,1,2,3];
let n=6;

let x=arrNum.length+n;

function arrayLastElementThree(arr,n){
   for(let i=4;i<x;i++){
       arr[i]=arr[i-1]+arr[i-2]+arr[i-3];
   }

   return arr;
};

console.log(arrayLastElementThree(arrNum,n));