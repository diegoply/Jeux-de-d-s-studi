



//Choix numéro Dés//
function choixNumDés(){

    let numDés = Math.floor(Math.random() * (6 - 0 + 1)) + 0;

    if (numDés == 1){
      
        $(document).ready(function(){
            $('#imageDés').html(`<img src="./image/Dés 1.png">`);
        });
        var valeurDés = 1;
        return valeurDés;

    }

    else if  (numDés == 2){

        $(document).ready(function(){
            $('#imageDés').html(`<img src="./image/Dés 2.png">`);
        });

        var valeurDés = 2;
        return valeurDés;
    }
    else if (numDés == 3){

        $(document).ready(function(){
            $('#imageDés').html(`<img src="./image/Dés 3.png">`);
        });

        var valeurDés = 3;
        return valeurDés;
    }
    else if (numDés == 4){

        $(document).ready(function(){
            $('#imageDés').html(`<img src="./image/Dés 4.png">`);
        });

        var valeurDés = 4;
        return valeurDés;
    }
    else if (numDés == 5){
        
        $(document).ready(function(){
            $('#imageDés').html(`<img src="./image/Dés 5.png">`);
        });

        var valeurDés = 5;
        return valeurDés;
    }
    else{
       
        $(document).ready(function(){
            $('#imageDés').html(`<img src="./image/Dés 6.png">`);
        });
         var valeurDés = 6;
        return valeurDés;
    }
}



$('#lancerDés').on('click',function(){
    choixNumDés();
   

});



