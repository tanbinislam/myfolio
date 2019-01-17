//isotope
$('.main-iso').isotope({
	itemSelector: '.item',
	layoutMode: 'fitRows'
});
// Isotope click function
$('.button-group button').click(function(){
	$('.button-group button').removeClass('is-checked');
	$(this).addClass('is-checked');

	var selector = $(this).attr('data-filter');
	$('.main-iso').isotope({
		filter: selector
	});
	return false;
});