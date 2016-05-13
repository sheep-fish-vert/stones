function navigationMove(){
	var position = $(window).scrollTop();
	var height = $(window).height();

	$(window).scroll(function(){
		setWindowPosition();
		console.log(position);

		if(position < height){
			$('header nav').removeClass('rotate');
		} else if(position > height && position < height*2){
			$('header nav').addClass('rotate');
		} else if(position > height * 2 && position < height * 4){
			$('header nav').removeClass('rotate');			
		} else if(position > height * 4 && position < height * 6){
			$('header nav').addClass('rotate');
		} else if(position > height * 6 && position < height * 8){
			$('header nav').removeClass('rotate');
		} else if(position > height * 8 && position < height * 9){
			$('header nav').addClass('rotate');
		}
	})

	function setWindowPosition(){
		position = $(window).scrollTop();
		
	}
}


$(document).ready(function(){
	navigationMove();
});

$(window).load(function(){

});

$(window).resize(function(){

});