let counter=0;
let colors=["red","orange","yellow","green","blue","purple"];
let background=["black","white"];

const theBody = document.querySelector('body');

console.log(theBody.style);
let theText = document.querySelector('h1');

let theButton1 =document.querySelector("#theFirst");
let theButton2=document.querySelector("#theSecond");
let theButton3=document.querySelector("#theThird");
theButton1.addEventListener('click', myFunction1);
theButton2.addEventListener('click', myFunction2);
theButton3.addEventListener('click', myFunction3);

function myFunction1(){

theText.textContent="the button has been pressed " + (counter+1) + " times";
theButton1.style.backgroundColor=colors[counter%6];
theButton2.style.backgroundColor=colors[counter%6];
theButton3.style.backgroundColor=colors[counter%6];

counter++;

}

function myFunction2(){
    if(theText.style.color===background[0]){
        theText.style.color=background[1];
        theBody.style.backgroundColor=background[0];
    }
    else{
        theText.style.color=background[0];
        theBody.style.backgroundColor=background[1];
    }
    theText.textContent="the button has been pressed " + (counter+1) + " times";
    counter++;
}

function myFunction3(){
    if(counter>7){
        window.location="https://youtu.be/oHg5SJYRHA0";
    }
else {
    theText.textContent="nothing happened...yet";
}

counter++;

}