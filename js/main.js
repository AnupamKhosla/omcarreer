!function foo() {
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