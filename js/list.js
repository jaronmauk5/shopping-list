$(document).ready(function(){
	$('.form-group').submit(function(event){
		event.preventDefault();
		var something = $('.input-text').val();
	// if user inputs nothing and hits enter, alert will pop up and nothing is appended
		if (something === "") {
			alert('Please enter an item!')
		}
		else {
			$('.list').append("<li class ='currentItem'><label class='checkmark'><input type='checkbox' class='is-completed'><span class='check-icon'></span><span class= 'item-name'>" + " " + something + " " +  "</span></label><i class='fa fa-trash-o' aria-hidden='true'></i></li>")
			$('.input-text').val("");
		}
	});

	$('.list').on('click', '.fa-trash-o', function(event){
		$(event.currentTarget).parents("li").remove();
	});

}); //doc.ready