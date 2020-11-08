let counter=0;
let theButton=document.querySelector("button");
let theBody=document.querySelector("body");
let theText=document.querySelector("p");
let theHead=document.querySelector("h1");
let first="The way that we send and receive information is more important than the information itself";
let second="Where we were once consumers, consuming information by watching television or listening to the radio, in the 21st century we have now also become producers, creating our own information as well.";
let third="The mediums change the way we behave, news stories replaced with tweets, conversations replaced with emojis"
let fourth="Luhan said, “It is impossible to understand social and cultural changes without a knowledge of the workings of media.” This is especially true today, evidenced by the protests of this past summer being organized entirely online/on social media.";
let fifth="McLuhan prophesied that “Electrical information devices for universal, tyrannical womb-to-tomb surveillance are causing a very serious dilemma between our claim to privacy and the community’s need to know.” We now know that surveillance is conducted on every person in great detail.";
let sixth="In McLuhan’s world, he refers to “One big gossip column that is unforgiving, unforgetful and from which there is no redemption”. This is seen today frequently and has brought us our golden rule of the internet: Once you put something out there it stays out there forever.";
let paragraphs=[first,second,third,fourth,fifth,sixth];

theBody.style.fontFamily='Ubuntu', 'sans-serif';
theButton.style.fontFamily='Ubuntu', 'sans-serif'
theButton.style.backgroundColor="pink";
theHead.style.textAlign="center";
theButton.style.alignContent="center";
// theBody.style.display="flex";
// theBody.style.flexDirection="column"
// theBody.style.justifyContent="center";

theButton.addEventListener("click", myFunction);

function myFunction(){
    if(counter===0){
        theBody.style.backgroundColor="black";
        theText.textContent= paragraphs[counter];
        theText.style.color="white";
        theHead.style.color="white";
        theText.style.textAlign="left";
    }
    else if(counter==1){
        theBody.style.backgroundColor="white";
        theText.textContent= paragraphs[counter];
        theText.style.color="black";
        theHead.style.color="black";
        theText.style.textAlign="right";
    }
    else if(counter==2){
        theBody.style.backgroundColor="black";
        theText.textContent= paragraphs[counter];
        theText.style.color="white";
        theHead.style.color="white";
        theText.style.textAlign="left";
    }
    else if(counter==3){
        theBody.style.backgroundColor="white";
        theText.textContent= paragraphs[counter];
        theText.style.color="black";
        theHead.style.color="black";
        theText.style.textAlign="right";
    }
    else if(counter==4){
        theBody.style.backgroundColor="black";
        theText.textContent= paragraphs[counter];
        theText.style.color="white";
        theHead.style.color="white";
        theText.style.textAlign="left";
    }
    else if(counter==5){
        theBody.style.backgroundColor="white";
        theText.textContent= paragraphs[counter];
        theText.style.color="black";
        theHead.style.color="black";
        theText.style.textAlign="right";
    }
    counter++;
    if (counter>5){
        counter=0;
    }
}