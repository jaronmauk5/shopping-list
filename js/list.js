$(document).ready(function(){
	$('.fa-bars').on('click',function() {
		if($('.list-menu').css('left')=='0px') {
			$('.list-menu').animate({left:'-100%'});
		}
		else {	

			$('.list-menu').animate({left:0});
		}
	});


	$.fn.todoList = function(){
		return this.each(function(){

			var defaults = {

			};

			var $el = $(this);

			$el.find('.form-group').submit(function(event){
				event.preventDefault();
				var something = $el.find('.input-text').val();
				// if user inputs nothing and hits enter, alert will pop up and nothing is appended
				if (something === "") {
				alert('Please enter an item!')
				}
				else {
					$el.find('.list').append("<li class ='currentItem'><label class='checkmark'><input type='checkbox' class='is-completed'><span class='check-icon'></span><span class= 'item-name'>" + " " + something + " " +  "</span></label><i class='fa fa-trash-o' aria-hidden='true'></i></li>")
					$el.find('.input-text').val("");
				}
			});

			$el.find('.list').on('click', '.fa-trash-o', function(event){
				$(event.currentTarget).parents("li").remove();
			});
		});	

	};

	//initialize
	$('.item-list').todoList();

}); //doc.ready