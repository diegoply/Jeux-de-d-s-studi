



//Choix numéro Dés//
function choixNumDés(){

    let numDés = Math.floor(Math.random() * (6 - 0 + 1)) + 0;

    if (numDés == 1){
      
        $(document).ready(function(){
            $('#imageDés').html(`<img src="./image/dés 1.jpg">`);
        });
        
    }

    else if  (numDés == 2){

        $(document).ready(function(){
            $('#imageDés').html(`<img src="./image/dés 2.jpg">`);
        });
    }
    else if (numDés == 3){

        $(document).ready(function(){
            $('#imageDés').html(`<img src="./image/dés 3.jpg">`);
        });
    }
    else if (numDés == 4){

        $(document).ready(function(){
            $('#imageDés').html(`<img src="./image/dés 4.jpg">`);
        });
    }
    else if (numDés == 5){
        
        $(document).ready(function(){
            $('#imageDés').html(`<img src="./imagE/dés 5.jpg">`);
        });
    }
    else{
       
        $(document).ready(function(){
            $('#imageDés').html(`<img src="./image/dés 6.jpg">`);
        });
    }
}


$('#lancerDés').on('click',function(){
    choixNumDés()
});


