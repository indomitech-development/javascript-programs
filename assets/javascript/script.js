//question no 1
// function ctaHandler(){
// var dom=document;
// var a=parseInt(dom.getElementById("num1"));
// var b=parseInt(dom.getElementById("num2"));
//  console.log(a.value);
//  console.log(b.value);
// if(a>b){
//     console.log(a);
// }
// else{
//     console.log(b);
// }
// }

function comparison(){
var number1 = parseInt(document.getElementById("num1"));
var number2 = parseInt(document.getElementById("num2"));
 var a = num1.value;
 console.log(a);
 var b = num2.value;
 console.log(b);
if(a>b){
    console.log("1st number is greater than 2nd number",a);
    var show =document.getElementById("program");
    show.innerHTML = "1st number is greater than 2nd number :" + a;
}
else if(a===b){
    console.log("numbers are equal");
    var show =document.getElementById("program");
    show.innerHTML = "numbers are equal";
}
else if(a<b){
    console.log("2nd number is greater than 1st number",b)
    var show =document.getElementById("program");
    show.innerHTML = "2nd number is greater than 1st number :" + b;
}
}

// var num1 = parseInt(dom.getElementById("num1"));
// var num2 = parseInt(dom.getElementById("num2"));

// console.log(num1);

// var flag = num1 > num2;
// if (num1 === num2) {
//   console.log("Numbers are equal", num1, num2);
// } else {
//   if (flag) {
//     console.log("Num1 is greater than number two", num1);
//   } else {
//     console.log("Num2 is greater than number one", num2);
//   }
// }
