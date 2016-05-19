$(document).ready(function(){
	$('.fa-bars').on('click',function() {
		if($('.list-menu').css('left')=='0px') {
			$('.list-menu').animate({left:'-100%'});
		}
		else {	
			$('.list-menu').animate({left:0});
		}
	});

		//prompting user for list name
	$('.fa-plus-square-o').on('click', function () {
			var name = prompt('What do you want to call this list?');
			if (name) {
				addList(name);
			}
	});
		
	$('.list-menu').on('click', 'a', function () {
			var listId = $(this).attr('data-list');
			$('.lists').find('[data-list]').hide();
			var $list = $('.lists').find('[data-list=' + listId + ']');
			$list.show();
	});


	$.fn.todoList = function(options){
		return this.each(function(){

			var defaults = {
				title: 'To Do',
				template: '<form class="form-group">\
						<h2>{title}</h2>\
							<hr>\
							<div class="submit-wrapper">\
							<input type="text" name="list-input" class="input-text" placeholder="Add something!">\
								<button id="submit-button">Add item to list</button>\
							</div>\
							</form>\
							<ul class="list">\
							<!-- check box and list items -->\
							</ul>'

			};

			var config = $.extend({}, defaults, options);

			var $el = $(this);
			$el.html(config.template.replace('{title}',config.title));

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

	function addList(name) {
		var listId = $('.lists').children().length;
		var $el = $('<div>', { class: 'item-list', 'data-list': listId});
		$el.todoList({
			title: name
		});
		var $menuItem = $('<li>').append(
			$('<a href="#")' + name + '</a>').attr('data-list', listId)
		);
		$('.list-menu ul').append($menuItem);
		$('.lists').append($el);
		return $el;
	}

	//initialize
	addList('Shopping List');

	window.addList = addList;

}); //doc.ready