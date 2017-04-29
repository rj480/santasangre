$$(document).on('deviceready', function() {


  $("#Home").on('click',function(){

    myApp.closePanel();
    mainView.router.load({ url: "index.html"});

  });
  
    $("#tatuadores").on('click',function(){

    myApp.closePanel();
    mainView.router.load({ url: "tatuadores.html"});

  });

    $("#trabajos").on('click',function(){

    myApp.closePanel();
    mainView.router.load({ url: "trabajos.html"});

  });


  /*
  $("#clickAlert").on('click',function(){

    showConfirm();

  });
*/
        /* // process the confirmation dialog result
         function onConfirm(buttonIndex) {
          alert('You selected button ' + buttonIndex);
        }

    // Show a custom confirmation dialog
    //
    function showConfirm() {
      navigator.notification.confirm(
            'You are the winner!', // message
             onConfirm,            // callback to invoke with index of button pressed
            'Game Over',           // title
            ['Restart','Exit']         // buttonLabels
            );
    }*/
  });
