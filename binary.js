let string="10100111";
let x=0;
function countzero(num){
    for(let i=0;i<num.length;i++){
        if(num[i]=='0')
            x++;
    }
    return x;
}
let otpt=countzero(string);
console.log("The number of zero in the binary string is",otpt);
console.log(string.length-otpt,"number of one in the binary string");

// Take four parameters. Multiply the four numbers and then return the result
 function multiple(a,b,c,d){
    const result=a*b*c*d;
    return result;
 }
let p=multiple(4,5,6,7);
console.log(p);
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

     function isodd(num){
        if(!num%2)
            num*=2;
        else
         num/=2;
        return num;
    }
     let result1=isodd(5);
     let result2=isodd(4);
   console.log(result1);
   console.log(result2);

    //  Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.


    // Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
    function odd_even(num){
       return num%2===0;
    }
    if(odd_even(5))
        console.log('Even');
    else  console.log('Odd');
    if(odd_even(8))
        console.log('Even');
    else  console.log('Odd');