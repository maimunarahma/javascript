// . Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.  

 const numbers=[];
 for(let i=40;i<=60;i++){
     numbers.push(i);
 }
 function isincludes(num1,num2){
     if(numbers.includes(num1)===true && numbers.includes(num2)===true)
        return true;
    else return false;
 }
  const result=isincludes(55,75);
  if(result===true)
    console.log("are including the range");
else console.log("not in the range");
 
const result1=isincludes(55,45);
if(result1===true)
  console.log("are including the range");
else console.log("not in the range");

 function isincludes2(num1,num2){
     if(num1>=70 && num1<=100 && num2>=70 && num2<=100)
        return true;
    else return false;
 }
   const ans=isincludes2(70,99);
   if(ans===true)
    console.log("are including the range");
  else console.log("not in the range");
  const ans1=isincludes2(70,150);
  if(ans1===true)
   console.log("are including the range");
 else console.log("not in the range");
