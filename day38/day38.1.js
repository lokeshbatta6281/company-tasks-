function showRed(){
    document.getElementById('redsignal').style.background="red";
    document.getElementById('yellowsignal').style.background="darkgoldenrod";
    document.getElementById('greensignal').style.background="darkgreen";
            
    setTimeout(showYellow,3000);
}
function showGreen(){
    document.getElementById('redsignal').style.background="darkred";
    document.getElementById('yellowsignal').style.background="darkgoldenrod";
    document.getElementById('greensignal').style.background="lime";
            
    setTimeout(showRed,3000);
}
function showYellow(){
    document.getElementById('redsignal').style.background="darkred";
    document.getElementById('yellowsignal').style.background="yellow";
    document.getElementById('greensignal').style.background="darkgreen";      
    setTimeout(showGreen,2000);
    }
    showRed();