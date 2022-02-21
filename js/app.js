// Example-1
var btn=document.querySelector("#button11");

var color=["red","green","orange","blue",'white',"palevioletred","mediumvioletred","orangered"]

function colorchange(){
    var num=color[Math.floor(Math.random()*color.length)];
    document.body.style.backgroundColor=num;

}