



//Choix numéro Dés//
function choixNumDés(){

    let numDés = Math.floor(Math.random() * (6 - 0 + 1)) + 0;

    if (numDés == 1){
      
        $(document).ready(function(){
            $('#imageDés').html(`<img src="./image/Dés 1.png">`);
        });

    }

    else if  (numDés == 2){

        $(document).ready(function(){
            $('#imageDés').html(`<img src="./image/Dés 2.png">`);
        });
    }
    else if (numDés == 3){

        $(document).ready(function(){
            $('#imageDés').html(`<img src="./image/Dés 3.png">`);
        });
    }
    else if (numDés == 4){

        $(document).ready(function(){
            $('#imageDés').html(`<img src="./image/Dés 4.png">`);
        });
    }
    else if (numDés == 5){
        
        $(document).ready(function(){
            $('#imageDés').html(`<img src="./image/Dés 5.png">`);
        });
    }
    else{
       
        $(document).ready(function(){
            $('#imageDés').html(`<img src="./image/Dés 6.png">`);
        });
    }
}


$('#lancerDés').on('click',function(){
    choixNumDés()
});


