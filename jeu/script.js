



//Choix numéro Dés//
function choixNumDés(){

    let numDés = Math.floor(Math.random() * (6 - 0 + 1)) + 0;

    if (numDés == 1){
      
        $(document).ready(function(){
            $('#imageDés').html(`<img src="./image/Dés 1.png">`);
        });
        let valeurDés = 1;
        console.log(valeurDés);
        return valeurDés;

    }

    else if  (numDés == 2){

        $(document).ready(function(){
            $('#imageDés').html(`<img src="./image/Dés 2.png">`);
        });

        let valeurDés = 2;
        console.log(valeurDés);
        return valeurDés;
    }
    else if (numDés == 3){

        $(document).ready(function(){
            $('#imageDés').html(`<img src="./image/Dés 3.png">`);
        });

        let valeurDés = 3;
        console.log(valeurDés);
        return valeurDés;
    }
    else if (numDés == 4){

        $(document).ready(function(){
            $('#imageDés').html(`<img src="./image/Dés 4.png">`);
        });

        let valeurDés = 4;
        console.log(valeurDés);
        return valeurDés;
    }
    else if (numDés == 5){
        
        $(document).ready(function(){
            $('#imageDés').html(`<img src="./image/Dés 5.png">`);
        });

        let valeurDés = 5;
        console.log(valeurDés);
        return valeurDés;
    }
    else{
       
        $(document).ready(function(){
            $('#imageDés').html(`<img src="./image/Dés 6.png">`);
        });
         let valeurDés = 6;
         console.log(valeurDés);
        return valeurDés;
    }


}
function compteur(valeurDés){
    let compteur = compteur + valeurDés;
    console.log(compteur);
}


$('#lancerDés').on('click',function(){
    choixNumDés();
    compteur();
   

});



