$(function() {

	$('.js-btn-dropdown').click(function() {
		$('.user-panel').toggleClass('user-panel_expand');
		$('.js-btn-dropdown i').toggleClass('btn-dropdown_active');
	});

	$('.js-service-btn').click(function() {
		$(this).addClass('service-btn_back');
		setTimeout(function(){
			$('.service').addClass('is-show');
		}, 100);
	});

	$('.service-type_btn').click(function() {
		$('.js-service-btn').removeClass('service-btn_back');
		$('.service').removeClass('is-show');
	});

	(function(){

		let select 							 = $('.ui-select'),
				selectItem					 = $('.ui-select-item'),
				selectList					 = $('.ui-select-list'),
				selectCurrent				 = $('.ui-select-current'),
				selectItemCount			 = selectItem.length,
				selectItemInital		 = selectItem.attr('data-initial'),
				selectItemInitalText = $('.ui-select-item[data-initial]').text(),
				selectItemHeight		 = selectItem.outerHeight(),
				selectListHeight		 = selectItemCount * selectItemHeight;

		if (typeof selectItemInital !== typeof undefined && selectItemInital !== false) {
			selectCurrent.text(selectItemInitalText);
		} else{
			selectCurrent.text($('.ui-select-item:first-child').text());
		}

		selectCurrent.click(function(){
			select.toggleClass('active');
			selectList.toggleClass('active');
			if(selectList.hasClass('active')){
				selectList.css({'max-height': selectListHeight + 'px'});
			} else{
				selectList.css({'max-height': '0px'});
			}
		});
		selectItem.click(function(){
			if($(this).attr('data-state') == 'disabled'){
				return false;
			} else{
				selectItem.removeClass('current');
				$(this).addClass('current');
				let current = $('.ui-select-item.current').text();
				selectCurrent.text(current);
				selectList.removeClass('active');
				select.removeClass('active');
				selectList.css({'max-height': '0px'});
			}
		});
		$(document).mouseup(function (e){
			var div = select;
			if (!div.is(e.target)
					&& div.has(e.target).length === 0) {
				selectList.removeClass('active');
				select.removeClass('active');
				selectList.css({'max-height': '0px'}); 
			}
		});
	})();

});