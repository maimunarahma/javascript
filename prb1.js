  
//   Write a JavaScript program to check whether a string " Script" appears at the 5th (index 4) position 
// in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one. 
  
  function script(name){
     const part=name.slice(4,10);
     if(part==='script')
     {
        const part1=name.slice(0,4);
        const part2=name.slice(10,name.length);
        const ans=part1.concat(part2);
        return ans;

     }
     else return name;
  }
  const output1=script('javascriptstring');
  console.log(output1);
  const output2=script('MaimunaRahman');
  console.log(output2);