$(function () {
	$('.menu-btn__btn').on('click', function (event) {
		event.preventDefault();
		var currTab = $(this).index();

		$('.menu-btn__btn').removeClass('active-btn');
		$(this).addClass('active-btn');

		$('.menu-eat__list').removeClass('active-list');
		$('.menu-eat__list').eq(currTab).addClass('active-list');

		$('.menu-full').removeClass('menu-eat__list');
	});

	$('.menu-full').on('click', function () {
		$('.menu-eat__list').addClass('active-list');
		$('.menu-full').addClass('menu-eat__list');
	})

	$('.basket').on('click', function () {
		$('.basket__inner').toggle();
	})

	$('.close').on('click', function () {
		$('.basket__inner').toggle();
	})
});
