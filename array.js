//   task1
const fruit=['mango','apple','jackfruit','banana','pineapple'];
console.log(fruit[2]);
fruit[1]='guava';
console.log(fruit);
//   taask2
 const tour=['cox;s bazar','sylhet','bandarban'];
 tour.push('rangamati');
 tour.push('kuakata');
 tour.push('saint martin');
 tour.pop();
 console.log(tour);
//   task3
  const book=['dsa','dld','algorithm'];
//   include method
  console.log(book.includes('javascript'));
  if(book.includes('javascript')){
    console.log('javascript course available');
  }
  else console.log('no javascript course here');
//   task4
   const num=50;
   const name='maimuna rahman mysha';
   console.log(Array.isArray(name));
   console.log(Array.isArray(fruit));
   const result=fruit.concat(book);
    console.log(result);
    console.log(fruit);
    console.log(book);
