//  Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.  

 function strng(name){
    let result='';
     for(const element of name){
        const charcode=element.charCodeAt(0);
      let nextchar;
       if(element==='z')
        nextchar='a';
    else if(element==='Z')
        nextchar='A';
 else{
        
         nextchar=String.fromCharCode(charcode+1)
       

     }
     result+=nextchar;
    }
    
     return result;
 }

 const ans=strng('abcdzyx');
 console.log(ans);
