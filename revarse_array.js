
const x=['a','b','c','d','e','f','g','h'];
 const revrs=[];
 for(const element of x){
    revrs.unshift(element);
 }
 console.log(revrs);
//  change the initial array so first process preferable
const y=x.reverse();
console.log(y);
// 
const p=['a','b','c','d','e','f','g','h'];
const revrs1=[];
 for(let i=p.length-1;i>=0;i--){
    const letter=p[i];
    revrs1.push(letter);
    
 }
 console.log(revrs1);