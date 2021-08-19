!function menu() {
	var burgerMenu = document.getElementById('burger-menu');
	var overlay = document.getElementById('menu');

	burgerMenu.addEventListener('click',function(){
	 	this.classList.toggle("close");
	 	if(overlay.style.display == "block") {
	 		overlay.style.display = "none";	
	 	} 
   		else {
   			overlay.style.display = "block";
   		} 
   		overlay.clientWidth; //forces css repaint for disply block to come into effect
   		//alert();
	  	overlay.classList.toggle("overlay");
	});

}()

!function address(){
	var add = document.getElementsByTagName("address")[0]; 

	add.addEventListener('click', function(){
		if(window.innerWidth < 768) {
			if(!this.closest(".container").classList.contains("open")) {
				this.closest(".container").classList.add("open");
			}
				
		}		
	});



	var close = document.querySelector("header .fa-times-circle");
	close.addEventListener('click', function(){
		this.closest(".container.open").classList.remove("open");		
	});
	
}()