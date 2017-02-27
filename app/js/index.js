var list = [
{singer:'Future',song:'Sorry',album:'HNDRXX'},
{singer:'Bad Bunny Ft. Ñengo Flow, Ozuna, Arcangel Y Farruko',song:'Diles (Prod. By DJ Luian Y Mambo Kingz)',album:'HNDRXX'},
{singer:'Ганджу',song:'V Λ C U U M',album:'HNDRXX'},
{singer:'smokepurpp ft. xxxtentacion',song:'Live Off A Lick [prod. YUNG TREL]',album:'HNDRXX'},
{singer:'xxxtentacion',song:'King Of The Dead',album:'HNDRXX'},
{singer:'Jah Khalib ',song:' Сжигая Дотла',album:'HNDRXX'}
];

for(var i = 0; i < list.length; i++){
	$('.song-list').append(
		'<li class="item song-item">'+
		'<button class="btn song-item_btn play"><i class="fa fa-play" aria-hidden="true"></i></button>'+
		'<button class="btn song-item_btn add"><i class="fa fa-plus" aria-hidden="true"></i></button>'+
		'<div class="song">' +  list[i].song + '</div>'+
		'<div class="artist" title="'+list[i].singer+'"><a class="song-item__link" href="#">'+list[i].singer+'</a></div>'+
		'<div class="album" title="'+list[i].album+'"><a class="song-item__link" href="#">'+list[i].album+'</a></div>'+
		'<button class="btn song-item_btn more" title="More"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></button>'+
		'<div class="time">7:32</div>'+
		'</li>'
		);
}



// $(function() {

// 	let selectItem            = $('.box-2_ui-select-item'),
//       selectItemCount       = selectItem.length,
//       select 							  = $('.box-2_ui-select'),
//       selectList					  = $('.box-2_ui-select-list'),
//       selectCurrent				  = $('.box-2_ui-select-current'),
//       selectItemInital		  = selectItem.attr('data-initial'),
//       selectItemInitalText  = $('.box-2_ui-select-item[data-initial]').text(),
//       selectItemHeight      = $('.box-2_ui-select-item').outerHeight(),
//       selectListHeight      = selectItemCount * selectItemHeight;
// 	$('.js-btn-dropdown').click(function() {
// 		$('.js-user-panel').toggleClass('user-panel_expand');
// 		$('.js-btn-dropdown i').toggleClass('btn-dropdown_active');
// 	});


// 	$('.js-service-btn').click(function() {
// 		$(this).addClass('service-btn_back');
// 		setTimeout(function(){
// 			$('.service').addClass('is-show');
// 		}, 100);
// 	});


// 	$('.js-service-type_btn').click(function() {
// 		$('.js-service-btn').removeClass('service-btn_back');
// 		$('.js-service').removeClass('is-show');
// 	});


// 	$('.js-search__lable').click(function() {
// 		$('.search__title').fadeOut(300);
// 		selectItemHeight = $('.box-2_ui-select-item').outerHeight();
//     selectListHeight = selectItemCount * selectItemHeight;
// 		$('.js-search__form').removeClass('search__form_hide');
// 		setTimeout(function(){
// 			$('.js-ui-select').addClass('is-show');
// 		}, 500);
// 	});


// 	$(document).mouseup(function (e){
// 		let div = $('.box-2_search__form');
// 		if (!div.is(e.target)
// 				&& div.has(e.target).length === 0) {
// 			$('.search-field').val('');
// 			$('.search-btn').removeClass('is-change');
// 			$('.js-ui-select').removeClass('is-show');
// 			setTimeout(function(){
// 				$('.js-search__form').addClass('search__form_hide');
// 			},100);
// 			setTimeout(function(){
// 				$('.search__title').fadeIn(300);
// 			},200);

// 		}
// 	});


// 	$('.ui-select-current').text($('.ui-select-item:first-child').text());


// 	function customSelect(){

// 		selectCurrent.click(function(){
// 			select.toggleClass('active');
// 			selectList.toggleClass('active');
// 			if(selectList.hasClass('active')){
// 				selectList.css({'max-height': selectListHeight + 'px'});
// 			} else{
// 				selectList.css({'max-height': '0px'});
// 			}
// 		});
// 		selectItem.click(function(){
// 			if($(this).attr('data-state') == 'disabled'){
// 				return false;
// 			} else{
// 				selectItem.removeClass('current');
// 				$(this).addClass('current');
// 				let current = $('.ui-select-item.current').text();
// 				selectCurrent.text(current);
// 				selectList.removeClass('active');
// 				select.removeClass('active');
// 				selectList.css({'max-height': '0px'});
// 			}
// 		});
// 		$(document).mouseup(function(e){
// 			let div = select;
// 			if (!div.is(e.target)
// 					&& div.has(e.target).length === 0) {
// 				selectList.removeClass('active');
// 				select.removeClass('active');
// 				selectList.css({'max-height': '0px'}); 
// 			}
// 		});
// 	};
// 	customSelect();

// });
$(function(){
	let selectItem            = $('.ui-select-item'),
	selectItemCount       = selectItem.length,
	select 							  = $('.ui-select'),
	selectList					  = $('.ui-select-list'),
	selectCurrent				  = $('.ui-select-current'),
	selectItemInital		  = selectItem.attr('data-initial'),
	selectItemInitalText  = $('.ui-select-item[data-initial]').text(),
	selectItemHeight      = $('.ui-select-item').outerHeight(),
	selectListHeight      = selectItemCount * selectItemHeight;

	$('.js-search__lable').click(function() {
		$('.search__title').fadeOut(300);
		selectItemHeight = $('.ui-select-item').outerHeight();
		selectListHeight = selectItemCount * selectItemHeight;
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
			$('.search__title').fadeIn(300);
			setTimeout(function(){
				$('.js-search__form').addClass('search__form_hide');
			},100);
		}
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

	$('.ui-select-current').text($('.ui-select-item:first-child').text());



	function customSelect(){

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
			if (!div.is(e.target) && div.has(e.target).length === 0) {
				selectList.removeClass('active');
				select.removeClass('active');
				selectList.css({'max-height': '0px'}); 
			}
		});
	};
	customSelect();
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