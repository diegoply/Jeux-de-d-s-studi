$(document).ready(function(){
    let compt = 0;


$('#lancerDés').on('click',function(){
   
    let numDes = Math.floor(Math.random() *6) +1;

    choixNumDés(numDes)
    compt = compteur(compt, numeroDes(numDes))

});
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
       

    };

    function numeroDes(numDes){

    
    return numDes;
       
      
    };







function compteur(compt, numDes){
    
   console.log("compt" + compt);
   console.log("num" + numDes);

   let a = compt;
   let b = numDes;

   console.log("b" + b);
    console.log("a" + a);

    a =a + b;

    console.log("b" + b);
    console.log("a" + a);

    return a;
    
    
}


});






    
    