function TwoNumbers(a, b) {

    if (a > b) {
  
      console.log("a is Greater Then b");
  
    } else {
  
      console.log("b is Greater Then a");
  
    }
  
  }
  
  TwoNumbers(2, 3);

  var d = new Date();
  var time = d.getHours();
  console.log(d)
  if (time < 12 ) {
   console.log("Good morning!");
  }
  else if (time> 12 && time<16) {
    console.log("Good Afternoon!");
   }
 else {
    console.log("Good night!");
  }

  ///

  function checkevenAndadd(num){
    if(num% 2==0){
        console.log("even")
    }
    else{
        console.log("odd")
    }
   
  }
  checkevenAndadd(10);

  function findLargestThree(num1,num2,num3){
    // check the condition
if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}

// display the result
console.log("The largest number is " + largest);
  }
  findLargestThree(20,40,60)


    let pet = "dog";

    switch (pet) {
      case "dog":
        pet = "I won a dog";
        break;
      case "cat":
        pet = "I won a cat";
        break;
      case "cow":
        pet = "I won a cow";
        break;
      case "horse":
        pet = "I won a horse";
        break;
      default:
        pet = "I own a pet";
    }
    
    console.log(pet);

//if else statement 
let Pet = "horse";

if(Pet == "dog"){
  Pet = "I won a dog";
}
else if(Pet == "cat"){
  Pet = "I won a cat"
}
else if(Pet == "cow"){
  Pet = "I won a cow"
}
else if(Pet == "horse"){
  Pet = "I won a horse"
}
else{
  Pet = "I won a pet"
}
console.log(Pet)




//getting current day 
let day;
let currentDay=new Date().getDay()
switch (currentDay) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
console.log(day);


const animals = ["dog","horse","cat","cow"];