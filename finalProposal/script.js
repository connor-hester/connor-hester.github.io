let counter=1;
let next=$("#next");
let slide1=$("#first");
let slide2=$("#second");
let slide3=$("#third");
let slide4=$("#fourth");

$(document).ready(function(){
    slide1.hide();
    slide2.hide();
    slide3.hide();
    slide4.hide();
next.click(function(){
    if(counter===1){
        slide1.toggle();
    }
    else if(counter===2){
        slide1.toggle();
        slide2.toggle();
    }
    else if(counter===3){
        slide2.toggle();
        slide3.toggle();
    }
    else if(counter===4){
        slide3.toggle();
        slide4.toggle();
    }
    counter++;
});
});