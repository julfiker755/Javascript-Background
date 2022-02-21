// Example-1
//arrow function
var color1=(a)=>{
    var a=getComputedStyle(a);
    var b=a.backgroundColor;
    document.body.style.backgroundColor=b;
}
//Example-2
var color=(z)=>{
    var a=getComputedStyle(z);
    var b=a.backgroundColor;
   document.querySelector(".our-area").style.backgroundColor=b;
}