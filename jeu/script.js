player1()


function player1(){


$('#buttonStart').on('click',function(){
    let compt = 0;
    let compt2 = 0;
    let comptHold = 0;
    let comptHold2 = 0;
    comptDec = 0;
    comptDec2 = 0;

    player = true;
   
     
     $('#scorePlayer1').html(0);
       $('#scorePlayer2').html(0);
     $('#currentPlayer1').html(0);
     $('#currentPlayer2').html(0);
    





$('#lancerDés').on('click',function(){
   
    let numDes = Math.floor(Math.random() *6) +1;

    choixNumDés(numDes)
    compt = compteur(compt, numDes)
    comptDecompte (compt, comptHold)
    

});
    function choixNumDés(numDes){

    
    

        if (numDes == 1){
          
        
                $('#imageDés').html(`<img src="./image/Dés 1.png" >`); 
                     
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
     
        
        $('#scorePlayer1').html(compt);
        console.log("compteur " + compt)
        return compt;
    
    };
    };


    $('#buttonHold').on('click', function() {

        comptHold = comptHold + compt;

        console.log("compteurHold " + comptHold);
        $('#currentPlayer1').html(comptHold);
        compt = 0;
        return comptHold;
    });

    


});
let comptDec = 0;


function comptDecompte (compt, comptHold){
    comptDec = comptHold + compt;
    console.log("comptDecompte " + comptDec);

    if(comptDec >= 100){
        $('#winner').html('Joueur 1 Gagne');
        console.log("victoire")
    }
    else{
        $('#winner').html('Jeux en cours');
    }
}

}




    
    