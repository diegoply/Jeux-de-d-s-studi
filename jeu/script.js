$('#lancerDés').on('click',function(){
   
    var numDes = Math.floor(Math.random() *6) +1;

    choixNumDés(numDes)
    compteur(compt, numeroDes(numDes))
    function choixNumDés(numDes){

    
    

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

    function numeroDes(numDes){

    
    return numDes;
       
      
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








    
    