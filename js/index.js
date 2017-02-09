$(window).load(function() {
  
  $("h1").animate({ 
    top:"20%", opacity:"1" 
   },1100,function() {
		
    $("span").animate({ 
      width:"60px" 
     }, 900, function() {
			
       $("p").fadeIn( 
         700, function () {
				
         $("#hover-me").fadeIn( 
           700, function() {
				});
		  
       });
	  
     });
	
   });

});