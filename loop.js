// Write a loop 1 to 200. Use break to exit the loop once you find 100.

 for(let i=1;i<=200;i++){
     console.log(i);
    if(i==100)
        break;
 }
 /* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

 let sum=0;
for(let i=1;;i++){
    sum+=i;
    if(sum>=100)
        break;
   
}
console.log(sum);
/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
 for(let i=1;i<=100;i++){
    console.log(i);
    if(i*i && i>1)
        break;
 }
 /* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/
 for(let i=1;i<=40;i++){
    if(i%2==0)
        console.log(i);
    else 
    continue;
    
 }
 /*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/
for(let i=55;i<=85;i++){
    if(i%5==0)
        continue;
    else console.log(i);
}