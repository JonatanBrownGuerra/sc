//LIGTHSLIDE DEMO --------->  
   
    	 $(document).ready(function() {
			$("#demo").lightSlider({
                loop:true,
                keyPress:true
            });
		});
    
    
    
    
//GIRO FLECHA --------->      

        function toggleTwit(id)
        {
          var div = document.getElementById("twit_" + id);
          if ( div.className == "twit" )
            div.className = "twat";
          else
            div.className = "twit";
        }
    
//DROPDOWN ON HOVER --------->    

        $(function() {
            
            $("#demo-1").bootstrapDropdownOnHover({
                mouseOutDelay: 500, // Number of milliseconds to wait before closing the menu on mouseleave
                responsiveThreshold: 992, // Pixel width where the menus should no-longer be activated by hover
                hideBackdrop: true // Whether to remove the menu backdrop upon hover (mobile only)
                });
            });

 