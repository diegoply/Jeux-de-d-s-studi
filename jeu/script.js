



//Choix numéro Dés//
function choixNumDés(){

    let numDés = Math.floor(Math.random() * (6 - 0 + 1)) + 0;

    if (numDés == 1){
        console.log("numero dés egale 1");
    }
    else if  (numDés == 2){
        console.log("numero dés egale 2");
    }
    else if (numDés == 3){
        console.log("numero dés egale 3");
    }
    else if (numDés == 4){
        console.log("numero dés egale 4");
    }
    else if (numDés == 5){
        console.log("numero dés egale 5");
    }
    else{
        console.log("numero dés egale six");
    }
}


$('#lancerDés').on('click',function(){
    choixNumDés()
});