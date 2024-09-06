// Write a JavaScript program that checks whether the last digit of three positive integers is the same. 

function digits(a,b,c){
   const x=a%10;
   const y=b%10;
   const z=c%10;
   const p=a%100;
   const q=b%100;
   const r=c%100;
   const a1=a%1000;
   const b1=b%1000;
   const c1=c%1000;

   if(x==y && y==z && p==q && q==r && a1==b1 && b1==c1)
     return true;
    else 
    return false;

}
  const ans=digits(1234,1431,1534);
  if(ans===true)
    console.log('Last 3 digits are equal');
  else
  console.log('not equal');
  
  const ans1=digits(1234,12234,3234);
  if(ans1===true)
    console.log('Last 3 digits are equal');
  else
  console.log('not equal');
