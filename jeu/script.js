$(document).ready(function(){
    let compt = 0;
    let comptHold = 0;
    


$('#lancerDés').on('click',function(){
   
    let numDes = Math.floor(Math.random() *6) +1;

    choixNumDés(numDes)
    compt = compteur(compt, numDes)
    comptDecompte (compt, comptHold)
    

});
    function choixNumDés(numDes){

    
    

        if (numDes == 1){
          
        
                $('#imageDés').html(`<img src="./image/Dés 1.png">`); 
                    
                console.log("num dé " + numDes);
        }
    
        else if  (numDes == 2){
    
           
                $('#imageDés').html(`<img src="./image/Dés 2.png">`);
                console.log("num dé " + numDes);
        }
        else if (numDes == 3){
    
           
                $('#imageDés').html(`<img src="./image/Dés 3.png">`);
                console.log("num dé " + numDes);
    
        }
        else if (numDes == 4){
    
          
                $('#imageDés').html(`<img src="./image/Dés 4.png">`);
                console.log("num dé " + numDes);
        }
        else if (numDes == 5){
            
            
                $('#imageDés').html(`<img src="./image/Dés 5.png">`);
                console.log("num dé " + numDes);
        }
        else{
           
           
                $('#imageDés').html(`<img src="./image/Dés 6.png">`);
                console.log("num dé " + numDes);
        }
       

    };



function compteur(compt, numDes){

    if (numDes === 1){
        compt = 0;

        console.log(compt);
        return compt;
    }

    else  {
       
        console.log("compt" + compt);
        console.log("num" + numDes);
     
        compt = compt + numDes;
     
        
    
        console.log("compteur " + compt)
        return compt;
    
    };
    };


    $('#buttonHold').on('click', function() {

        comptHold = comptHold + compt;

        console.log("compteurHold " + comptHold);

        return comptHold;
    });

    


});

let comptDec = 0;

function comptDecompte (compt, comptHold){
    comptDec = comptHold + compt;
    console.log("comptDecompte " + comptDec);

    if(comptDec >= 100){
        console.log("victoire")
    }
    else{
        console.log("Joue encore")
    }
}






    
    