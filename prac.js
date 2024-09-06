 let x=0,y=0;
function avrgodd(num){
    for(const number of num){
    if(number%2===1){
        x+=number;
        y++}
    }
    return x/y;
}
const num=[3,4,5,6,7,8,9];
const rslt=avrgodd(num);
console.log(rslt);

const unique=[],common=[];
const number=[4,3,5,4,6,10,11,12,10,45,54,48,45];
function noduplicate(number){
    for(const num of number){
      if(unique.includes(num)===false)
        unique.push(num);


    }
    return unique;

}
function duplicate(number){
    for(const num of number){
      if(common.includes(num)===true)
        common.push(num);


    }
    return common;

}
const result1=noduplicate(number);
 console.log(result1);
const result2=duplicate(number);
 console.log(result2);

 function swap(a,b){
    let c=0;
    c=a;
    a=b;
    b=c;
    return [a,b];
 }
 const ans=swap(3,4);
 console.log(ans);