let images=["media/01.png","media/02.png","media/03.png","media/04.png","media/05.png","media/06.png","media/007.png","media/08.png","media/09.png","media/10.png","media/011.png","media/12.png","media/13.png","media/014.png","media/015.png","media/16.png","media/017.png","media/18.png","media/019.png","media/020.png","media/21.png","media/22.png","media/23.png","media/24.png","media/025.png","media/26.png","media/027.png","media/28.png","media/29.png","media/030.png","media/031.png","media/32.png","media/33.png","media/034.png","media/35.png","media/36.png","media/037.png","media/38.png","media/39.png","media/40.png"];
let imageBox=document.querySelector("#memeImage");
let createButton=document.querySelector("#button1");
let topText=["when your mom"];
let bottomText=["says no"];
let topBox=document.querySelector("#topTextContainer");
let bottomBox=document.querySelector("#bottomTextContainer");
let saveButton=document.querySelector("#button2");
let word1;
let word2;
let selectedPhrase;
let phraseArray;
let topTextContent;
let bottomTextContent;
let phrase1=["when your mom ",null," your ",null];
let phrase2=["when he calls you his ",null," ",null];
let phrase3=["when you can't ",null," because ",null," said no"];
let phrase4=["when you start ",null," uncontrollably at your grandpas funeral"];
let phrase5=["when ",null," says they want a(n) ",null, " for their birthday"];
let phrase6=["when you get COVID from ",null," a(n) ",null];
let phrase7=["when your ",null," starts talking"];
let phrase8=["when you get a(n) ",null," ",null," for christmas"];
let phrase9=["when ",null," won't stop calling you"];
let phrase10=["when you get cancelled for calling someone a ",null, " ",null," on twitter"];
let phrase11=["when you win the lottery and spend it all on ",null];
let phrase12=["when your mom makes ",null," ",null," for dinner"];
let phrase13=["when you take acid and ", null," turns into ",null];
let phrase14=["when you accidentally send ",null, " pics to ",null];
let phrase15=["when your dad is actually made of ",null];
let phrase16=["when you dog goes viral for ",null," a(n) ",null];
let phrase17=["when ",null, " confesses their love for ",null];
let phrase18=["when you get arrested for ",null, " a(n) ",null];
let phrase19=["when being polite and ",null," doesn't work so you commit war crimes instead"];
let phrase20=["when you have your first kiss, but its with ",null];
let phrase21=["when you get kicked out of chili's for ",null," your ",null];
let phrase22=["when you get in a fight in the arby's bathroom with ",null];
let phrase23=["when ",null," ",null," gets legalized"];
let phrase24=["when you're on Maury and it turns out that ", null," is the father"];
let phrase25=["when your spouse wants a divorce because of your raging ",null," addiction"];
let phrases=[phrase1,phrase2,phrase3,phrase4,phrase5,phrase6,phrase7,phrase8,phrase9,phrase10,phrase11,phrase12,phrase13,phrase14,phrase15,phrase16,phrase17,phrase18,phrase19,phrase20,phrase21,phrase22,phrase23,phrase24,phrase25];
const thirdPersonVerbs=["cries","screams","annoys", "arrests", "asks", "attacks", "attempts", "avoids", "bakes", "bans", "begs", "bleaches", "bombs", "breathes", "whips", "cheats", "chokes", "confesses", "confuses", "copies", "coughs", "crashes", "dances", "destroys", "drags", "despises", "combusts", "explodes", "yeets", "fears", "forces", "frightens", "harasses", "hates", "hunts", "ignores", "injures", "kills", "kisses", "laughs", "lies", "likes", "loves", "marries", "milks", "mixes", "murders", "offends", "twerks", "pops", "pulls", "punches", "punishes", "nae-naes", "removes", "seizes", "robs", "rots", "ruins", "screws", "shocks", "slaps", "smashes", "smokes", "spills", "squeezes", "sucks", "suffers", "surprises", "traps", "tricks", "tries", "undresses", "walks", "waits", "waves", "whips", "whispers", "wishes", "worries", "wrecks"];
const presentVerbs=["cry","scream","annoy", "arrest", "ask", "attack", "attempt", "avoid", "bake", "ban", "beg", "bleach", "bomb", "breathe", "whip", "cheat", "choke", "confess", "confuse", "copy", "cough", "crash", "dance", "destroy", "drag", "despise", "combust", "explode", "fail", "fear", "force", "frighten", "glue", "grease", "harass", "hate", "hunt", "ignore", "injure", "kill", "kiss", "laugh", "lie", "like", "love", "marry", "milk", "mix", "murder", "offend", "twerk", "poke", "pop", "pull", "punch", "punish", "nae-nae", "remove", "seize", "rob", "rot", "ruin", "screw", "shock", "slap", "smash", "smoke", "spill", "start", "squeeze", "suck", "suffer", "surprise", "trap", "trick", "try", "undress", "walk", "wait", "wave", "whip", "whisper", "wish", "worry", "wreck", "yell"];
const ingVerbs=["crying","screaming","annoying", "arresting", "asking", "attacking", "attempting", "avoiding", "baking", "banning", "begging", "bleaching", "bombing", "breathing", "causing", "cheating", "choking", "confessing", "confusing", "copying", "coughing", "crashing", "dancing", "destroying", "dragging", "despising", "existing", "exploding", "failing", "fearing", "forcing", "frightening", "twerking", "greasing", "harassing", "hating", "nae-naeing", "ignoring", "injuring", "killing", "kissing", "laughing", "lying", "liking", "loving", "marrying", "milking", "mixing", "murdering", "offending", "whipping", "licking", "popping", "pulling", "punching", "punishing", "realizing", "removing", "replacing", "robbing", "rotting", "ruining", "screwing", "shocking", "slapping", "smashing", "smoking", "spilling", "starting", "squeezing", "sucking", "suffering", "surprising", "trapping", "tricking", "trying", "undressing", "walking", "waiting", "waving", "whipping", "whispering", "wishing", "worrying", "wrecking", "yelling"];
const adjectives=["thiqq", "sadistic", "duck-like", "offensive", "addicting", "afraid", "gorilla-grip", "angry", "annoyed", "anxious", "awful", "beautiful", "big", "bitter", "black", "blue", "broken", "bumpy", "cold", "colossal", "confused", "ultra-thicc", "creepy", "pulsing", "cuddly", "curvy", "damp", "throbbing", "deafening", "dead", "delicious", "depressed", "dirty", "disgusted", "disturbed", "dizzy", "dry", "dusty", "embarrassed", "empty", "energetic", "enthusiastic", "envious", "evil", "fantastic", "fast", "far", "few", "fierce", "filthy", "flaky", "flat", "fluffy", "foolish", "fresh", "friendly", "frightened", "chaotic", "gigantic", "gorgeous", "greasy", "racist", "grotesque", "handsome", "hard", "harsh", "heavy", "helpless", "high", "homophobic", "hissing", "homeless", "horrible", "hot", "huge", "hungry", "hurt", "icy", "immense", "itchy", "jealous", "jittery", "juicy", "large", "lazy", "little", "lonely", "long", "loose", "loud", "lucky", "massive", "melted", "mighty", "moaning", "modern", "mute", "mysterious", "nasty", "naughty", "nervous", "obedient", "obnoxious", "odd", "old", "orange", "ordinary", "outrageous", "panicky", "petite", "plastic", "precious", "pretty", "prickly", "proud", "puny", "purple", "purring", "quiet", "rapid", "rare", "raspy", "ratty", "red", "repulsive", "ripe", "roasted", "rotten", "rough", "round", "sad", "salty", "scary", "scrawny", "screeching", "selfish", "shaky", "shallow", "sharp", "shivering", "short", "shrill", "silent", "silky", "skinny", "slimy", "slippery", "slow", "small", "smart", "soft", "sore", "sour", "spicy", "square", "squealing", "stale", "sticky", "straight", "strange", "strong", "tall", "tan", "tasty", "tender", "tense", "terrible", "thirsty", "tight", "tiny", "tired", "tough", "ugliest", "ugly", "watery", "weak", "wet", "wicked", "wide", "yellow", "young", "yummy"];
const singularNouns=["thigh", "cheek", "relationship", "revolution", "woman", "falcon", "poverty", "forced sterilization", "dump truck", "theory of relativity", "bisexuality", "homosexuality", "world peace", "gay agenda", "goblin", "diversity", "sexual tension", "free sample", "neck", "white person", "severed head", "blood of Christ", "milkman", "gorilla", "nipple", "banana", "flightless bird", "chemical warfare","late-stage Capitalism", "Socialism", "mayo", "meme", "wifi password","chainsaw","cop","fetus","lukewarm meat","lumberjack","earwax","threesome","Liberal","Conservative","science","natural selection","crucifixion","child","adderall","bean","lifetime of sadness","tumor","rap music", "fetish","yeast","octopus","cigarette","Scientology","crack","personality","ghost","horse meat","autocannibalism","alchoholism","teen pregnancy","antichrist","lactation","dead bird","ex-wife","corpse","hard boiled egg","oompa loompa","leprosy","soup","stab wound","sperm whale","PTSD","war crime","declaration of independence","puberty","violence","bacteria","assault rifle","yogurt","gogurt","racist","vending machine","spontaneous combustion","anti-vaxxer","vomit","white privilege","police brutality","toxic masculinity","childbirth","butter","landmine","vehicular manslaughter","arson","tax evasion","murder"];
const pluralNouns=["thighs", "cheeks", "revolutions", "women", "falcons", "forced sterilizations", "ukeleles", "goblins", "free samples", "severed heads", "gorillas", "nipples", "bananas", "flightless birds",  "hot cheetos", "memes", "chainsaws","tide pods","fetuses","lukewarm meats","lumberjacks","toenails","threesome","republicans","Conservatives","children","beans","tumors", "fetishes","cigarettes","cops","dead birds","ex-wives","corpses","hard boiled eggs","oompa loompas","stab wounds","sperm whales","war crimes","assault rifles","vending machines","anti-vaxxers","landmines","kpop stans","lunchables","men","battlefield amputations","inner demons","boy scouts","human rights","daddy issues","jazz hands","Hillary Clintons emails","Amish people","pain killers","pillz"];
const people=["Arnold Schwarzenegger","Mike Pence", "Vladimir Putin", "Jesus","Donald Trump", "Hilary Clinton", "Oprah","Geico", "Stephen Hawking", "Batman","Darth Vader","your mom","your dad","your brother","your grandma","your grandpa","your sister","Michael Jackson","Danny DeVito","Ronald Reagan","Rudy Giuliani","Britney Spears","Stalin","Helen Keller","Megan Thee Stallion","Nicki Minaj","Nicholas Cage","Martha Stewart","Abraham Lincoln","Kim Kardashian","Kanye","Flo from Progressive","Judge Judy","The Kool-Aid Man","The Pope"];
const canvas1=document.getElementById("canvas1");
const ctx=canvas1.getContext('2d');
var fontFace=new FontFace('Roboto Mono','url(https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap)');


createButton.addEventListener("click", generateMeme);
function generateMeme(){
    ctx.clearRect(0,0,canvas1.width,canvas1.height);
    selectPhrase();
    fillPhrase();
    toString();
    draw();
}

function draw(){
    let i=Math.floor(Math.random()*38);
    var img=new Image()
    ctx.font="20px Roboto Mono";
    ctx.fillStyle='white';
    ctx.fillRect(0,0,400,canvas1.height);
    ctx.fillStyle='black';
    ctx.fillText(topTextContent,0,30);
    img.onload=function(){
        ctx.drawImage(img,0,50,400,400);
    }
    img.src=images[i];
    ctx.fillText(bottomTextContent,-10,480);
    
}

function saveCanvasFile(){ //https://stackoverflow.com/questions/2544260/how-to-save-html5-canvas
    var strDataURI = canvas1.toDataURL();
    Canvas2Image.saveAsPNG(canvas1);
}
saveButton.addEventListener("click", saveMeme);
function saveMeme(){
    saveCanvasFile();
}

function selectPhrase(){
    let p=Math.floor(Math.random()*25);
    selectedPhrase=phrases[p];
}
function fillPhrase(){
    if(selectedPhrase===phrase1){
        word1=thirdPersonVerbs[Math.floor(Math.random()*82)];
        word2=singularNouns[Math.floor(Math.random()*98)];
        phrase1.splice(1,1,word1);
        phrase1.splice(3,1,word2);
        phraseArray=phrase1;
    }
    else if(selectedPhrase===phrase2){
        word1=adjectives[Math.floor(Math.random()*184)];
        word2=singularNouns[Math.floor(Math.random()*98)];
        phrase2.splice(1,1,word1);
        phrase2.splice(3,1,word2);
        phraseArray=phrase2;
    }
    else if(selectedPhrase===phrase3){
        word1=presentVerbs[Math.floor(Math.random()*86)];
        word2=people[Math.floor(Math.random()*35)];
        phrase3.splice(1,1,word1);
        phrase3.splice(3,1,word2);
        phraseArray=phrase3;
    }
    else if(selectedPhrase==phrase4){
        word1=ingVerbs[Math.floor(Math.random()*86)];
        phrase4.splice(1,1,word1);
        phraseArray=phrase4;
    }
    else if(selectedPhrase==phrase5){
        word1=people[Math.floor(Math.random()*35)];
        word2=singularNouns[Math.floor(Math.random()*98)];
        phrase5.splice(1,1,word1);
        phrase5.splice(3,1,word2);
        phraseArray=phrase5;
    }
    else if(selectedPhrase==phrase6){
        word1=ingVerbs[Math.floor(Math.random()*86)];
        word2=singularNouns[Math.floor(Math.random()*98)];
        phrase6.splice(1,1,word1);
        phrase6.splice(3,1,word2);
        phraseArray=phrase6;
    }
    else if(selectedPhrase==phrase7){
        word1=singularNouns[Math.floor(Math.random()*98)];
        phrase7.splice(1,1,word1);
        phraseArray=phrase7;
    }
    else if(selectedPhrase==phrase8){
        word1=adjectives[Math.floor(Math.random()*184)];
        word2=singularNouns[Math.floor(Math.random()*98)];
        phrase8.splice(1,1,word1);
        phrase8.splice(3,1,word2);
        phraseArray=phrase8;
    }
    else if(selectedPhrase==phrase9){
        word1=people[Math.floor(Math.random()*35)];
        phrase9.splice(1,1,word1);
        phraseArray=phrase9;
    }
    else if(selectedPhrase==phrase10){
        word1=adjectives[Math.floor(Math.random()*184)];
        word2=singularNouns[Math.floor(Math.random()*98)];
        phrase10.splice(1,1,word1);
        phrase10.splice(3,1,word2);
        phraseArray=phrase10;
    }
    else if(selectedPhrase==phrase11){
        word1=pluralNouns[Math.floor(Math.random()*56)];
        phrase11.splice(1,1,word1);
        phraseArray=phrase11;
    }
    else if(selectedPhrase==phrase12){
        word1=adjectives[Math.floor(Math.random()*184)];
        word2=pluralNouns[Math.floor(Math.random()*56)];
        phrase12.splice(1,1,word1);
        phrase12.splice(3,1,word2);
        phraseArray=phrase12;
    }
    else if(selectedPhrase==phrase13){
        word1=people[Math.floor(Math.random()*35)];
        word2=pluralNouns[Math.floor(Math.random()*56)];
        phrase13.splice(1,1,word1);
        phrase13.splice(3,1,word2);
        phraseArray=phrase13;
    }
    else if(selectedPhrase==phrase14){
        word1=singularNouns[Math.floor(Math.random()*98)];
        word2=people[Math.floor(Math.random()*35)];
        phrase14.splice(1,1,word1);
        phrase14.splice(3,1,word2);
        phraseArray=phrase14;
    }
    else if(selectedPhrase==phrase15){
        word1=pluralNouns[Math.floor(Math.random()*56)];
        phrase15.splice(1,1,word1);
        phraseArray=phrase15;
    }
    else if(selectedPhrase==phrase16){
        word1=ingVerbs[Math.floor(Math.random()*86)];
        word2=singularNouns[Math.floor(Math.random()*98)];
        phrase16.splice(1,1,word1);
        phrase16.splice(3,1,word2);
        phraseArray=phrase16;
    }
    else if(selectedPhrase==phrase17){
        word1=people[Math.floor(Math.random()*35)];
        word2=pluralNouns[Math.floor(Math.random()*56)];
        phrase17.splice(1,1,word1);
        phrase17.splice(3,1,word2);
        phraseArray=phrase17;
    }
    else if(selectedPhrase==phrase18){
        word1=ingVerbs[Math.floor(Math.random()*86)];
        word2=singularNouns[Math.floor(Math.random()*98)];
        phrase18.splice(1,1,word1);
        phrase18.splice(3,1,word2);
        phraseArray=phrase18;
    }
    else if(selectedPhrase==phrase19){
        word1=ingVerbs[Math.floor(Math.random()*86)];
        phrase19.splice(1,1,word1);
        phraseArray=phrase19;
    }
    else if(selectedPhrase==phrase20){
        word1=people[Math.floor(Math.random()*35)];
        phrase20.splice(1,1,word1);
        phraseArray=phrase20;
    }
    else if(selectedPhrase==phrase21){
        word1=ingVerbs[Math.floor(Math.random()*86)];
        word2=singularNouns[Math.floor(Math.random()*98)];
        phrase21.splice(1,1,word1);
        phrase21.splice(3,1,word2);
        phraseArray=phrase21;
    }
    else if(selectedPhrase==phrase22){
        word1=people[Math.floor(Math.random()*35)];
        phrase22.splice(1,1,word1);
        phraseArray=phrase22;
    }
    else if(selectedPhrase==phrase23){
        word1=ingVerbs[Math.floor(Math.random()*86)];
        word2=pluralNouns[Math.floor(Math.random()*56)];
        phrase23.splice(1,1,word1);
        phrase23.splice(3,1,word2);
        phraseArray=phrase23;
    }
    else if(selectedPhrase==phrase24){
        word1=people[Math.floor(Math.random()*35)];
        phrase24.splice(1,1,word1);
        phraseArray=phrase24;
    }
    else if(selectedPhrase==phrase25){
        word1=singularNouns[Math.floor(Math.random()*98)];
        phrase25.splice(1,1,word1);
        phraseArray=phrase25;
    }
}
function toString(){
    let x=phraseArray.join('');
    let xLen=x.length;
    if(xLen<38){
        topTextContent=x;
        bottomTextContent='';
    }
    else{
    if(x.indexOf(xLen/2)===''){
        topTextContent=x.substring(0,xLen/2);
        bottomTextContent=x.substring(xLen/2);
    }
    else if(x.indexOf(xLen/2)!==''){
    let y=x.indexOf(' ',xLen/2);
    console.log(y);
    topTextContent=x.substring(0,y);
    bottomTextContent=x.substring(y);
    }
}
}