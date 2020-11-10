let counter=0;
let button1=document.querySelector("#b1");
let button2=document.querySelector("#b2");
let button3=document.querySelector("#b3");
let button4=document.querySelector("#b4");
let button5=document.querySelector("#b5");
let button6=document.querySelector("#b6");
let theBody=document.querySelector("body");
let theText1=document.querySelector("#p1");
let theText2=document.querySelector("#p2");
let theText3=document.querySelector("#p3");
let theText4=document.querySelector("#p4");
let theText5=document.querySelector("#p5");
let theText6=document.querySelector("#p6");
let theHead=document.querySelector("h1");
let first="The way that we send and receive information is more important than the information itself";
let second="Where we were once consumers, consuming information by watching television or listening to the radio, in the 21st century we have now also become producers, creating our own information as well.";
let third="The mediums change the way we behave, news stories replaced with tweets, conversations replaced with emojis"
let fourth="Luhan said, “It is impossible to understand social and cultural changes without a knowledge of the workings of media.” This is especially true today, evidenced by the protests of this past summer being organized entirely online/on social media.";
let fifth="McLuhan prophesied that “Electrical information devices for universal, tyrannical womb-to-tomb surveillance are causing a very serious dilemma between our claim to privacy and the community’s need to know.” We now know that surveillance is conducted on every person in great detail.";
let sixth="In McLuhan’s world, he refers to “One big gossip column that is unforgiving, unforgetful and from which there is no redemption”. This is seen today frequently and has brought us our golden rule of the internet: Once you put something out there it stays out there forever.";
let paragraphs=[first,second,third,fourth,fifth,sixth];

button2.style.display="none";
button3.style.display="none";
button4.style.display="none";
button5.style.display="none";
button6.style.display="none";

button1.addEventListener("click", function1);
button2.addEventListener("click", function2);
button3.addEventListener("click", function3);
button4.addEventListener("click", function4);
button5.addEventListener("click", function5);
button6.addEventListener("click", function6);

function function1(){
    theText6.textContent="";
    //theBody.style.backgroundColor="black";
    theText1.textContent= paragraphs[counter];
    theText1.style.color="white";
    theHead.style.color="white";
    button2.style.display="flex";
    counter++;
}
function function2(){
    theText1.textContent="";
    //theBody.style.backgroundColor="white";
    theText2.textContent= paragraphs[counter];
    theText2.style.color="black";
    theHead.style.color="black";
    button3.style.display="flex";
    counter++;
}
function function3(){
    theText2.textContent="";
    //theBody.style.backgroundColor="black";
    theText3.textContent= paragraphs[counter];
    theText3.style.color="white";
    theHead.style.color="white";
    button4.style.display="flex";
    counter++;
}
function function4(){
    theText3.textContent="";
    //theBody.style.backgroundColor="white";
    theText4.textContent= paragraphs[counter];
    theText4.style.color="black";
    theHead.style.color="black";
    button5.style.display="flex";
    counter++;
}
function function5(){
    theText4.textContent="";
    //theBody.style.backgroundColor="black";
    theText5.textContent= paragraphs[counter];
    theText5.style.color="white";
    theHead.style.color="white";
    button6.style.display="flex";
    counter++;
}
function function6(){
    theBody.style.backgroundColor="white";
    //theText6.textContent= paragraphs[counter];
    theText6.style.color="black";
    theHead.style.color="black";
    theText5.textContent="";
    button2.style.display="none";
    button3.style.display="none";
    button4.style.display="none";
    button5.style.display="none";
    button6.style.display="none";
    counter=0;
}

