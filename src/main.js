import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


$(document).ready(function () {

  const test = getCoinsVar(4.99);
  const quarters = test(.25);
  const dimes = test(.1);
  const nickels = test(.05);
  const pennies = test(.01);
  console.log(`quarters: ${quarters} dimes: ${dimes} nickels: ${nickels} pennies: ${pennies} `);

  const test1 = getCoinsConst(4.99);
  const quarters1 = test1(.25);
  const dimes1 = test1(.1);
  const nickels1 = test1(.05);
  const pennies1 = test1(.01);
  console.log(`quarters: ${quarters1} dimes: ${dimes1} nickels: ${nickels1} pennies: ${pennies1} `);

  console.log(intToRoman(123));
  console.log(runIntToRomanTest(123));

});

function CoinCounter( money) {
  if (money < 0.01) {
    return " ";
  }
  else if (money >= .25 ) {
    const quarters = Math.floor((money / .25));
    return  `quarters: ${quarters}` + CoinCounter((money - (quarters * .25)).toPrecision(2)) 

  }                                                                   
  else if (money >= .10 ) {
    const dimes = Math.floor(money / .1);
    return  " dimes: "+ dimes + CoinCounter((money - (dimes * .1)).toPrecision(2)) 
  }
  else if (money >= .05 ) {
    const nickels = Math.floor((money / .05));
    return  " nickels: "+ nickels + CoinCounter((money - (nickels * .05)).toPrecision(2)) 
  }
  else if (money >= .01 ) {
    const pennies = Math.floor(money / .01);
    return  " pennies: "+ pennies + CoinCounter((money - (pennies * .01)).toPrecision(2))  
  }
  
};

function getCoinsVar (startingMoney){
  var remainingMoney = startingMoney;

  return function coinCount(coinAmount)  {
    const amount = Math.floor(remainingMoney / coinAmount);
    remainingMoney = (remainingMoney - (amount * coinAmount)).toPrecision(2);
    return amount;   
  };

};


function getCoinsConst (startingMoney){
  //var remainingMoney = startingMoney;

  return function coinCount(coinAmount)  {
    const amount = Math.floor(startingMoney / coinAmount);
    //remainingMoney = (remainingMoney - (amount * coinAmount)).toPrecision(2);
    return amount;   
  };

};

// function getCoins (startingMoney){
//   var remainingMoney = startingMoney;

//   function coinCount(coinAmount)  {
//     const amount = Math.floor(remainingMoney / coinAmount);
//     remainingMoney = (remainingMoney - (amount * coinAmount)).toPrecision(2);
//     return amount;   
//   };

  
//   const quarters = coinCount(.25);
//   const dimes = coinCount(.1);
//   const nickels = coinCount(.05);
//   const pennies = coinCount(.01);
//   return(`quarters: ${quarters} dimes: ${dimes} nickels: ${nickels} pennies: ${pennies} `);
// };

// Recursion function
function intToRoman(num){
  if(num === 0){
    return "";
  }
  else if (num <=3999 && num >= 1000)
{
  return "M"+ intToRoman(num - 1000);
}
else if (num >=900 )
{
  return "CM"+ intToRoman(num -900);
}
else if (num <=999 && num >= 500)
{
  return "D"+ intToRoman(num - 500);
}
else if (num >=400 )
{
  return "CD"+ intToRoman(num -400);
}
else if (num <=499 && num >= 100)
{
  return "C"+ intToRoman(num -100);
}
else if (num >=90 )
{
  return "XC"+ intToRoman(num -90);
}
else if (num <=99 && num >= 50)
{
  return "L"+ intToRoman(num - 50);
}
else if (num >= 40 )
{
  return "XL"+ intToRoman(num -40);
}
else if (num <=39 && num >= 10)
{
  return "X"+ intToRoman(num -10);
}
else if (num >=9 )
{
  return "IX"+ intToRoman(num -9);
}
else if (num <=8 && num >= 5)
{
  return "V"+ intToRoman(num -5);
}
else if (num >= 4 )
{
  return "IV"+ intToRoman(num -9);
}
else if (num <=4 && num >= 1)
{
  return "I"+ intToRoman(num -1);
}
}

function runIntToRomanTest(num)
{
  return intToRomanTest(num, 12);
}

function intToRomanTest(num, index){

  const ROMAN = ['I', 'IV','V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
  const VALUES = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  if(num === 0 || index < 0){
    return "";
  }
  else if (num <=3999 && num >= VALUES[index])
  { 
    return ROMAN[index]+ intToRomanTest(num - VALUES[index], index);
  }
  return intToRomanTest(num, --index) + "";
}

// Currying function
// Function intToRomanCurrying(num)
// {
//   //will get thousands
//   return function(){
//     //willl get hundreds
//     return function(){
//       //will 10's 
//       return function(){

//       }
//     }
//   }
    
    
// }