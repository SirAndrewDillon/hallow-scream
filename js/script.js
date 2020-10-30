
var counter = 1;
var name = "";
function change () {
    
    switch (counter) {
        case 1:
            document.getElementById("bubbleChat").innerHTML = "My name is Yorick. Who are you and why are you here? ";
            counter++;
            break;
        case 2:
            document.getElementById("bubbleChat").innerHTML = "... Nice to meet you " + name + " I haven't talked to anyone since I was murdered.";
            counter++;
            break;
        case 3:
            document.getElementById("bubbleChat").innerHTML = "By the way do you want me to tell you the story about how I died?"; 
            counter++;
            break;
        case 4:
            document.getElementById("bubbleChat").innerHTML = "It all starts 30 years ago... me and my family were on vacation";
            counter++;
            break;

        case 5:
            document.getElementById("bubbleChat").innerHTML = "One sunny and beatiful day a madman broke into our hotel room";
            counter++;
            break;

        case 6:
            document.getElementById("bubbleChat").innerHTML = "The first thing he did was to shoot my daughter in the face.";
            counter++;
            break;

        case 7:
            document.getElementById("bubbleChat").innerHTML = "Then he rapped my wife and made me watch while he tortured and killed her.";
            counter++;
             break;

         case 8:
            document.getElementById("bubbleChat").innerHTML = "So here I am." + name + " Stop your crying. I have a task for you ";
            counter++;
             break;     

        case 9:
            document.getElementById("bubbleChat").innerHTML = "I miss so much my cat Odin and I think he is around here. Try to find him";
            document.getElementById("continue").style.visibility ="hidden";
            document.getElementById("cat").style.visibility ="visible";
            counter++;
            
            break;

        case 10:
            document.getElementById("bubbleChat").innerHTML = "Odin! He doesn't know me. Is it because I am all bones now? " + name ;
            document.getElementById("continue").style.visibility ="visible";
            document.getElementById("cat").style.visibility ="hidden";
            counter++;
            
            break;

        case 11:
            document.getElementById("bubbleChat").innerHTML = "Do you want to meet my family? they are buried here with me";
            
            counter++;
            
            break;
            
        case 12:
             document.getElementById("bubbleChat").innerHTML = "Try to guess my daughter's tomb... She is so adorable.";
             document.getElementById("daughterRect").style.visibility ="visible"; 
             document.getElementById("continue").style.visibility ="hidden";  
             counter++;
                
                break;
                
         case 13:
           document.getElementById("bubbleChat").innerHTML = "Huh... I swear to you she was adorable. ";
           document.getElementById("daughterRect").style.visibility ="hidden";
           document.getElementById("continue").style.visibility ="visible";    
           counter++;
           break;

         case 14:
           document.getElementById("bubbleChat").innerHTML = "Now my beloved wife... Find her tomb";
           document.getElementById("continue").style.visibility ="hidden"; 
           document.getElementById("wifeRect").style.visibility ="visible";   
           counter++;
           break;

        case 15:
           document.getElementById("bubbleChat").innerHTML = "She's a screamer 😈. Always loved that about her!";
           document.getElementById("continue").style.visibility ="visible"; 
           
           counter++;  
                       
        break; 
        
        case 16:
           document.getElementById("bubbleChat").innerHTML ="Well" + name + " Im done with you for today...";
           counter++;
           break;

        case 17:
            document.getElementById("bubbleChat").innerHTML = "HAPPY HALLOWEEN " + name;
            
            document.getElementById("skeleton").style.opacity= 0;
            document.getElementById("continue").style.visibility ="hidden";
            
            break;
        default:
            break;
    }
    
    
}

function show(element) {
    document.getElementById(element).style.visibility = "visible";    
}

function sound (element) {
    document.getElementById(element).play();
}


function start () {
    name = document.getElementById("nameText").value;
    document.getElementById("startMenu").style.visibility = "hidden";
    document.getElementById("wrapper").style.transition = "ease-in s";
    document.getElementById("wrapper").style.opacity = "1";
    document.getElementById("continue").style.visibility = "visible";
    
}

function screamer (element) {
    document.getElementById(element).style.visibility = "visible";
    setInterval(function(){
        document.getElementById("wife").style.visibility= "hidden";      
    },2000);

}
    
