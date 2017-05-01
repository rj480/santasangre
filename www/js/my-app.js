// Initialize app
var myApp = new Framework7({
    material:true,
    swipePanel:'both',

   
});


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main');

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
    console.log(navigator.notification);
});


myApp.onPageInit('tatuadores', function (page) {
   $$.ajax({
    type: "GET",
    url: "http://192.168.1.9/SangreCorporal/public/consulta/tatuador",        
    cache: false,        
    dataType:"json",       
    success: function(data){                    
        if (data.state == "success") {

         var i=0;
         $.each(data.datos, function( key, value ) { 
             i++;
             $("#cartas").append(
                '<div class="card-content">'+
                '<div class="card-content-inner">'+'<p>'+value.nombres+'</p>'+
                '<img src="http://192.168.1.9/SangreCorporal/public/imagenes/tatuadores/'+value.imagen+'" width="100%">'+
                '<p class="color-gray">'+value.descripcion+'</p>'+'</div>'+'</div>'

                );
             console.log(value.nombres);

           
         });

     }else{
        console.log('ya casi');
    }
},
error: function(data){
    if (data.state == 'fallo') {
        console.log(data.message);
    }

}
});
/*
      $$.getJSON('http://localhost:80/SangreCorporal/public/consulta/tatuador',  function(result){
        if (result.state == 'success' ) {
            myApp.alert("hola mundo");
                console.log(data.nombres);
            }else{
                console.log('ya casi');
            }
        });*/



    });

myApp.onPageInit('trabajos', function (page) {

   $$.ajax({
    type: "GET",
    url: "http://192.168.1.9/SangreCorporal/public/consulta/trabajo",        
    cache: false,        
    dataType:"json",       
    success: function(data){                    
        if (data.state == "success") {

         var i=0;
         $.each(data.datos, function( key, value ) { 
             i++;
           /*  $("#cartas").append(
                '<div class="card-content">'+
                '<div class="card-content-inner">'+'<p>'+value.nombres+'</p>'+
                '<img src="http://192.168.1.9/SangreCorporal/public/imagenes/tatuadores/'+value.imagen+'" width="100%">'+
                '<p class="color-gray">'+value.descripcion+'</p>'+'</div>'+'</div>'

                );*/

                if(value.categoria == "trabajo"){

                $("#cartasTrabajos").append(
                '<div class="card-content">'+
                '<div class="card-content-inner">'+'<p>'+value.descripcion+'</p>'+
                '<img src="http://192.168.1.9/SangreCorporal/public/imagenes/trabajos/'+value.imagen+'" width="100%">'+
                '<p class="color-gray">'+value.categoria+'</p>'+'</div>'+'</div>'

                );
                }else{
                    
                $("#cartasBocetos").append(
                '<div class="card-content">'+
                '<div class="card-content-inner">'+'<p>'+value.descripcion+'</p>'+
                '<img src="http://192.168.1.9/SangreCorporal/public/imagenes/trabajos/'+value.imagen+'" width="100%">'+
                '<p class="color-gray">'+value.categoria+'</p>'+'</div>'+'</div>'

                );
                }

                
             console.log(value.categoria);

           
         });

     }else{
        console.log('ya casi');
    }
},
error: function(data){
    if (data.state == 'fallo') {
        console.log(data.message);
    }

}
});



    });
