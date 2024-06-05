let num = parseFloat(prompt("Please enter number:"));

switch(num){

case 1:
    alert("ONE");
    break;

case 2:
    alert("TWO");
    break;

case 3:
    alert("THREE");
    break;

case 4:
    alert("FOUR");
    break;

case 5:
    alert("FIVE");
    break;

case 6:
    alert("SIX");
    break;

case 7:
    alert("SEVEN");
    break;

case 8:
    alert("EIGHT");
    break;

case 8:
    alert("EIGHT");
    break; 
  
case 8:
    alert("NINE");
    break;   

 default:
    alert("PLEASE TRY AGAIN");   
}


/************************************** */



  let number_input = prompt("Please enter number:");

  alert("the number is " + number_input);



 
/************************************* */

console.log( -5 * 3 );

console.log( "JavaScript " + 50 );

console.log( 17 % 5  );

console.log(  5 % 17 );

console.log( 5 / 10 );

console.log( 4 === '4' );

console.log( 4 != 5 );

console.log( 7 <= 8 );

console.log( "Hello " + 5 );

console.log( Math.ceil(2.3) - Math.floor(2.6) );

console.log( Math.pow(3,2) );

/************************************ */
let num1 = parseFloat(prompt("Please enter first number:")); 
  
let num2 = parseFloat(prompt("Please enter second number:"));  

if(num1 > num2){

console.log("ascending order "+ num2 + " " + num1);
console.log(" the larger number is "+ num1);


}else{

console.log("ascending order "+ num1 + " " + num2);
console.log(" the larger number is "+ num2);

}

let sum = num1 + num2;
console.log("the sum of the first and second numbers = " + sum );

/******************************************* */
var separate_alert = 0;

while(separate_alert <= 5){

alert(separate_alert);

separate_alert++;
}
/**************************************** */
let single_alert = " ";
for(var i = 0; i <= 5; i++ ){

single_alert += i + " " ;
}
alert(single_alert);
/*************************************** */
for(let x = 0; x <= 20; x+=3){

  alert(x);

}

/********************************* */


do {

var number = prompt("please enter number between 0 to 100 ");

} while (number < 0 || number > 100  );

/******************sum*************** */

sum = parseFloat(prompt("Enter a number to calculate the sum: "));
counter = 0;

while(sum > 0){

  counter += sum;
  sum --;

}
console.log(counter);
        