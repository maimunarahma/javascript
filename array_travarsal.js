// looping techeniqs
//   1.for loop 
//   2.while loop 
//   3.for of (array travarsal)
//   4.for in (object travarsal)

 const marks=[100,200,300,400,500,700,50,78,33];
  for(let i=0;i<marks.length;i++){
    console.log(marks[i]);
  }
  for(const mark of marks){
    console.log(mark);
  }
  let j=0;
  while(j<marks.length){
    console.log(marks[j]);
    j++;
  }