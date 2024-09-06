// Write a JavaScript program to find the largest of three given integers.  
function largest(a,b,c){
   if(a>b && a>c)
    return a;
  else if(b>a && b>c)
      return b;
    else 
    return c;
}

 const result=largest(55,75,73);
 console.log(result);