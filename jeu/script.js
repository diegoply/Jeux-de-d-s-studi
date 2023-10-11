$('#buttonStart').on('click', function () {
    let compt = 0;
    let comptHold = 0;
    comptDec = 0;

    let compt2 = 0;
    let comptHold2 = 0;
    comptDec2 = 0;


    $('#lancerDés').off('click');
    $('#buttonHold').off('click');

    $('#scorePlayer1').html(0);
    $('#currentPlayer1').html(0);
    $('#scorePlayer2').html(0);
    $('#currentPlayer2').html(0);

    let joueur = true;
    let joueur2 = false;
   
 
    player1();
    

   

    
    function player1() {
            
        $('#lancerDés').on('click', function () {

            
                   
            let numDes = Math.floor(Math.random() * 6) + 1;

            choixNumDés(numDes);
           
            compt = compteur(compt, numDes);
            comptDecompte(compt, comptHold);
            tourJoueur(numDes);
            tourSuivant(joueur);
         
         
       


        });

        function tourJoueur(numDes){
            if( numDes === 1){
                joueur = false;
                
            }
            else {
                joueur = true;
               
            }
             return joueur;
        };

        function tourSuivant(joueur){
            if(joueur === false){
                evenementOff();
                player2();
              
                compt = 0;
            }
           
        }

        function choixNumDés(numDes) {




            if (numDes === 1) {


                $('#imageDés').html(`<img src="./image/Dés 1.png" >`);

                console.log("num dé " + numDes);
            }

            else if (numDes === 2) {


                $('#imageDés').html(`<img src="./image/Dés 2.png">`);
                console.log("num dé " + numDes);
            }
            else if (numDes === 3) {


                $('#imageDés').html(`<img src="./image/Dés 3.png">`);
                console.log("num dé " + numDes);

            }
            else if (numDes === 4) {


                $('#imageDés').html(`<img src="./image/Dés 4.png">`);
                console.log("num dé " + numDes);
            }
            else if (numDes === 5) {


                $('#imageDés').html(`<img src="./image/Dés 5.png">`);
                console.log("num dé " + numDes);
            }
            else {


                $('#imageDés').html(`<img src="./image/Dés 6.png">`);
                console.log("num dé " + numDes);
            }

            
        };



        function compteur(compt, numDes) {

            if (numDes === 1) {
                compt = 0;
             
                console.log(compt);
                return compt;
            }

            else {

                console.log("compt" + compt);
                console.log("num" + numDes);

                compt = compt + numDes;


                $('#scorePlayer1').html(compt);
                console.log("compteur " + compt);
                return compt;

            };
        }


        $('#buttonHold').on('click', function () {

            comptHold = comptHold + compt;

            console.log("compteurHold " + comptHold);
            $('#currentPlayer1').html(comptHold);
            compt = 0;
            
            return comptHold;
        });

    




        let comptDec = 0;


        function comptDecompte(compt, comptHold) {
            comptDec = comptHold + compt;
            console.log("comptDecompte " + comptDec);

            if (comptDec >= 100) {
                $('#winner').html('Joueur 1 Gagne');
                console.log("victoire");
            }
            else {
                $('#winner').html('Jeux en cours');
            }
        }

        function evenementOff(){


            $('#lancerDés').off('click');
            $('#buttonHold').off('click');
            
        }

        
    };
  

    
    

    //debut player2
    
    function player2() {
        
        

        $('#lancerDés').on('click', function () {
            
                      
            let numDes2 = Math.floor(Math.random() * 6) + 1;

            choixNumDés2(numDes2);
           
            compt2 = compteur2(compt2, numDes2);
            comptDecompte2(compt2, comptHold2);
            tourJoueur2(numDes2);
            tourSuivant2(joueur2);
            
         
       


        });

        function tourJoueur2(numDes2){
            if( numDes2 === 1){
                joueur2 = true;
                
            }
            else {
                joueur2 = false;
               
            }
             return joueur2;
        };

        function tourSuivant2(joueur2){
            if(joueur2 === true){
                evenementOff2();
                player1();
                
                compt2 = 0;
            }
           
        }

        function choixNumDés2(numDes2) {




            if (numDes2 === 1) {


                $('#imageDés').html(`<img src="./image/Dés 1.png" >`);

                console.log("num dé " + numDes2);
            }

            else if (numDes2 === 2) {


                $('#imageDés').html(`<img src="./image/Dés 2.png">`);
                console.log("num dé " + numDes2);
            }
            else if (numDes2 === 3) {


                $('#imageDés').html(`<img src="./image/Dés 3.png">`);
                console.log("num dé " + numDes2);

            }
            else if (numDes2 === 4) {


                $('#imageDés').html(`<img src="./image/Dés 4.png">`);
                console.log("num dé " + numDes2);
            }
            else if (numDes2 === 5){

                $('#imageDés').html(`<img src="./image/Dés 5.png">`);
                console.log("num dé " + numDes2);
            }
            else {


                $('#imageDés').html(`<img src="./image/Dés 6.png">`);
                console.log("num dé " + numDes2);
            }

            
        };



        function compteur2(compt2, numDes2) {

            if (numDes2 === 1) {
                compt2 = 0;
             
                console.log(compt2);
                return compt2;
            }

            else {

                console.log("compt" + compt2);
                console.log("num" + numDes2);

                compt2 = compt2 + numDes2;


                $('#scorePlayer2').html(compt2);
                console.log("compteur " + compt2);
                return compt2;

            };
        }


        $('#buttonHold').on('click', function () {

            comptHold2 = comptHold2 + compt2;

            console.log("compteurHold " + comptHold2);
            $('#currentPlayer2').html(comptHold2);
            compt2 = 0;
            
            return comptHold2;
        });

    




        let comptDec2 = 0;


        function comptDecompte2(compt2, comptHold2) {
            comptDec2 = comptHold2 + compt2;
            console.log("comptDecompte " + comptDec2);

            if (comptDec >= 100) {
                $('#winner').html('Joueur 1 Gagne');
                console.log("victoire");
            }
            else {
                $('#winner').html('Jeux en cours');
            }
        };

        function evenementOff2(){


            $('#lancerDés').off('click');
            $('#buttonHold').off('click')
            
        }
    
    };
    
    });







