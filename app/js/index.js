$(function() {

	$('.js-btn-dropdown').click(function() {
		$('.js-user-panel').toggleClass('user-panel_expand');
		$('.js-btn-dropdown i').toggleClass('btn-dropdown_active');
	});

	$('.js-service-btn').click(function() {
		$(this).addClass('service-btn_back');
		setTimeout(function(){
			$('.service').addClass('is-show');
		}, 100);
	});

	$('.js-service-type_btn').click(function() {
		$('.js-service-btn').removeClass('service-btn_back');
		$('.js-service').removeClass('is-show');
	});
	$('.js-search__lable').click(function() {
		$('.search__title').fadeOut(300);
		customSelect();
		$('.js-search__form').removeClass('search__form_hide');
		setTimeout(function(){
			$('.js-ui-select').addClass('is-show');
		}, 500);
	});
	$(document).mouseup(function (e){
		var div = $('.search');
		if (!div.is(e.target)
				&& div.has(e.target).length === 0) {
			$('.search-field').val('');
			$('.search-btn').removeClass('is-change');
			$('.js-ui-select').removeClass('is-show');
			setTimeout(function(){
				$('.js-search__form').addClass('search__form_hide');
			},100);
			setTimeout(function(){
				$('.search__title').fadeIn(300);
			},200);
			
		}
	});
});

function checkInputValue(){
	if($('.search-field').val() !== ''){
		$('.search-btn').addClass('is-change');
	} else{
		$('.search-btn').removeClass('is-change');
	}
};
setInterval(function(){
	checkInputValue();
},100);


function customSelect(){

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
	$(document).mouseup(function(e){
		var div = select;
		if (!div.is(e.target)
				&& div.has(e.target).length === 0) {
			selectList.removeClass('active');
			select.removeClass('active');
			selectList.css({'max-height': '0px'}); 
		}
	});
};
customSelect();