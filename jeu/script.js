



//Choix numéro Dés//
function choixNumDés(){

    let numDés = Math.floor(Math.random() * (6 - 0 + 1)) + 0;
    

    if (numDés == 1){
      
        $(document).ready(function(){
            $('#imageDés').html(`<img src="./image/Dés 1.png">`);
        });
        let valeurDes = 1;
        console.log(valeurDes);
        return valeurDes;
      

    }

    else if  (numDés == 2){

        $(document).ready(function(){
            $('#imageDés').html(`<img src="./image/Dés 2.png">`);
        });

        let valeurDes = 2;
        console.log(valeurDes);
        return valeurDes;
      
    }
    else if (numDés == 3){

        $(document).ready(function(){
            $('#imageDés').html(`<img src="./image/Dés 3.png">`);
        });

        let valeurDes = 3;
        console.log(valeurDes);
        return valeurDes;
     
    }
    else if (numDés == 4){

        $(document).ready(function(){
            $('#imageDés').html(`<img src="./image/Dés 4.png">`);
        });

        let valeurDes = 4;
        console.log(valeurDes);
        return valeurDes;
      
    }
    else if (numDés == 5){
        
        $(document).ready(function(){
            $('#imageDés').html(`<img src="./image/Dés 5.png">`);
        });

        let valeurDes = 5;
        console.log(valeurDes);
        return valeurDes;
    
    }
    else{
       
        $(document).ready(function(){
            $('#imageDés').html(`<img src="./image/Dés 6.png">`);
        });
         let valeurDes = 6;
         console.log(valeurDes);
         return valeurDes;
        
    }
   

}

let compt = 0;

function compteur(valeurDes){
    
    
    compt = compt + valeurDes;
    console.log(valeurDes)
    console.log(compt);
    
    
    
}


$('#lancerDés').on('click',function(){
    choixNumDés();
    compteur();
    
});

   


