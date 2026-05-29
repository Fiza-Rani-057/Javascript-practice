 console.log("Hello world!");
 console.log("My name is FIza Rani");
 console.log("I'm learning Javascript");



 //  48 - 57   // numbers
 // 65 - 90   // uppercase
 //  97 - 122  // lowercase

  var name = prompt("Enter any name");
  var code = name.charCodeAt (0);
   document.write(code);
 
 if ( code >= 48 && code <= 57 ){
 alert("Input is a number");
 }
 else if(code >= 65 && code <= 90){
    alert("Input is uppercase");
      //  document.write(code);
 }
 else if(code >=97 && code <= 122){
    alert("Input is lowercase");
      //  document.write(code);
 }
 else{
    alert("Input is not a number");
   //   document.write(code);
 }
