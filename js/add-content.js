'use strict';

// var confriming = confirm('how are you ?')
// console.log(confriming);

function createGreeting(){
var hourNow = prompt('what time is it 0 - 23 ?')

var greeting;
// console.log(greeting) // undifined 
if (hourNow > 18 && hourNow < 24  ) { 
    greeting = 'Good evening, Class!';
  } else if (hourNow > 12 && hourNow < 24) {
    greeting = 'Good afternoon, Class!';

  } else if (hourNow >= 0 && hourNow < 24) {
    greeting = 'Good morning!';
  } else {
    greeting = 'Something went wrong!';
  }
  // console.log(' value of ?' ,greeting);
  
   return greeting;
  //output
}


// ask user what to order house/hotel
function createOrder(){
  //we need the user Only choose house or hotel
  // otherwise we will keep asking !
var userOrder = prompt('what would you like to order (house/hotel)?')
var picture=''; //avoiding the undifined 



 // for or case it wil take on of the cond. as if its true always

 // cat   f                            f
while(!(userOrder == 'hotel' || userOrder =='house')){
//while (userOrder !== 'hotel' && userOrder !=='house')  { // userOrder = prompt('please enter house or hotel')}
  userOrder = prompt('please enter house or hotel')
  // code 
}
// more able to choose more than one picture 
// based on his or her order  house = 4 or 5 houses 

var howMany = prompt('how many house or hotel do you want ?')
console.log(howMany);

for(var i = 0; i < howMany ; i++) // i=i+1
{
  // code
  if(userOrder == 'house') // T
  {
   picture = picture + '<img src="images/house.png">' 
   // picture =  ' ' + '<img src="images/house.png">'  first time we loop
  // picture = '<img src="images/house.png">'  + '<img src="images/house.png">'  second time 
  // picture = '<img src="images/house.png">'  + '<img src="images/house.png">'  + '<img src="images/house.png">' third time we loop
   console.log(picture);
   
   // 
  }else if (userOrder == 'hotel')
  {
    picture = picture + '<img src="images/hotel.png">'
    console.log(picture);
  }
  
}
return picture;

}

document.write('<p>'+createOrder()+'</p>')




