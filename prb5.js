// Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string.
//  If the string length is less than 3 convert all the characters to upper case.  

 function newstring(name){
     if(name.length>=3){
        const part1=name.slice(0,3).toLowerCase();
      
        const part2=name.slice(3,name.length);
        const ans=part1.concat(part2);
        return ans;
     }
     else
     {
        ans1=name.toUpperCase();
        return ans1;
     }

 }
   
    const result=newstring('JAVAScript');
    console.log(result);