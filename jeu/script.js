$('#lancerDés').on('click',function(){
   
    var numDes = Math.floor(Math.random() * (6 - 0 + 1)) + 0;

    choixNumDés()
    compteur()
    function choixNumDés(){

    
    

        if (numDes == 1){
          
            $(document).ready(function(){
                $('#imageDés').html(`<img src="./image/Dés 1.png">`);
            });
           
          
    
        }
    
        else if  (numDes == 2){
    
            $(document).ready(function(){
                $('#imageDés').html(`<img src="./image/Dés 2.png">`);
            });
    
          
        }
        else if (numDes == 3){
    
            $(document).ready(function(){
                $('#imageDés').html(`<img src="./image/Dés 3.png">`);
            });
    
            
         
        }
        else if (numDes == 4){
    
            $(document).ready(function(){
                $('#imageDés').html(`<img src="./image/Dés 4.png">`);
            });
    
          
        }
        else if (numDes == 5){
            
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

    let numeroDes = function renvoiValeurDes(){

    
    

        if (numDes == 1){
          
            
             let valeurDes = 1;
             return valeurDes;
           
          
    
        }
    
        else if  (numDes == 2){
    
           
    
            let valeurDes = 2;
            return valeurDes;

          
        }
        else if (numDes == 3){
    
           
            let valeurDes = 3;
            return valeurDes;
      
         
        }
        else if (numDes == 4){
    
            
    
            let valeurDes = 4;
            return valeurDes;
        
          
        }
        else if (numDes == 5){
            
           
    
            let valeurDes = 5;
            return valeurDes;
        
        
        }
        else{
           
           
             let valeurDes = 6;
             return valeurDes;
           
            
        }
       
      
    }


});


let compt = 0;

function compteur(compt, numeroDes){
    
    let a = compt;
    let b = numeroDes;
    
    a = a + b;
    console.log(b)
    console.log(a);
    
    
    
}








    
    