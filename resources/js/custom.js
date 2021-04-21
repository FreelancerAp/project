$(document).ready(function(){
	
	
	
	//	sticke manu
	$(".js_service").waypoint(function(direction){
		
		if(direction == "down"){
			$("nav").addClass("sticky");
			
		}else{
			$("nav").removeClass("sticky");
		}
		
	});

		//	ACTIVE LINK
	
			$("nav ul li a").click(function(){
				
			$("nav ul li a").removeClass("active");
			$(this).addClass("active");
			
			  });
			
			$("nav a img.logo").click(function(){
				
			$("nav ul li a").removeClass("active");
			$("nav ul li:first-child a").addClass("active");
			
			  });
	


	//Mixitup portfolio section
	var mixer = mixitup('.container');
		
	//smooth scroll for IE/EDGE/ SAFARI

	
	//$("a").on('click', function(){
	//	if(this.hash !== ""){
	//		
	//		event.preventDefault();
			
	//		var hash = this.hash;
			
	//		$('html,body').animate({
	//			scrollTop: $(hash).offset().top},800,function(){
	//				window.location.hash = hash;
	//		});
	//	}
		
	//});
	
	
});


 function openNav(){
	 document.getElementById("myNav").style.width ="100%";
 }
  function closeNav(){
	 document.getElementById("myNav").style.width ="0%";
 }
 