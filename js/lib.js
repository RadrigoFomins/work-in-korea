// Mobile menu
$(document).ready(function () {
	function functionCloseMenu() {
		$('.menu.show').css({ 'transform': '', 'transition': 'transform 0.3s ease' });
		setTimeout(function () {
			$('.menu-backdrop').fadeOut(200);
		}, 150);
		setTimeout(function () {
			$('.menu')
				.css('transition', '')
				.removeClass('show');
			$('.menu-backdrop').remove();
		}, 350);
	}
	$('.btn-menu').click(function () {
		$('.menu')
			.css({ 'transform': 'translateX(0)', 'transition': 'transform 0.3s ease' })
			.addClass('show');
		setTimeout(function () {
			$('.menu').css('transition', '');
		}, 300);
		$('body').append('<div class="menu-backdrop"></div>');
		$('.menu-backdrop').fadeIn(200);
	});
	$('.btn-menu-close, .menu__nav a').click(function () {
		functionCloseMenu();
	});
	$(document).click(function (event) {
		if (!$(event.target).closest('.menu').length && !$(event.target).closest('.btn-menu').length) {
			functionCloseMenu();
		}
	});
});

// Smooth appearance with scrolling
$(document).ready(function () {
	let animItems = document.querySelectorAll('.animation-element');

	if (animItems.length > 0) {
		window.addEventListener('scroll', animOnScroll);
		function animOnScroll() {
			for (let index = 0; index < animItems.length; index++) {
				const animItem = animItems[index];
				const animItemHeight = animItem.offsetHeight;
				const animItemsOffset = offset(animItem).top;
				const animStart = 5;

				let animItemPoint = window.innerHeight - animItemHeight / animStart;

				if (animItemHeight > window.innerHeight) {
					animItemPoint = window.innerHeight - window.innerHeight / animStart;
				}

				if (pageYOffset > animItemsOffset - animItemPoint && pageYOffset < animItemsOffset + animItemHeight) {
					animItem.classList.add('animation-show');
				}
			}
		}

		function offset(el) {
			const rect = el.getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
		}
		animOnScroll();
	}
});

// Smooth scrolling to the anchor
$(document).ready(function () {
	$("a.scroll").click(function () {
		elementClick = $(this).attr("href")
		destination = $(elementClick).offset().top - 50;
		$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 600);
		return false;
	});
});

// Messages form in Telegram channel
$(document).ready(function () {
	$('[data-telega] .telegramForm').submit(function (e) {
		e.preventDefault();
		var telega = $(this).closest('[data-telega]').attr('data-telega');
		$.ajax({
			type: 'POST',
			url: 'telegram_handler.php',
			data: $(this).serialize(),
			success: function () {
				$('[data-telega="' + telega + '"] .formContainer').css({ 'opacity': '0' });
				$('[data-telega="' + telega + '"] .successMessage').css({ 'display': 'flex' });
			},
			error: function () {
				alert('Произошла ошибка при отправке сообщения');
			}
		});
	});
	$('[data-telega] .btn-sendmore').click(function () {
		var telega = $(this).closest('[data-telega]').attr('data-telega');
		$('[data-telega="' + telega + '"] .formContainer').css({ 'opacity': '1' });
		$('[data-telega="' + telega + '"] .successMessage').css({ 'display': 'none' });
		$('[data-telega="' + telega + '"] input:not([type="hidden"]), [data-telega="' + telega + '"] textarea').val("");
	});
});

// For a phone in the form (jquery.maskedinput.min.js)
$(document).ready(function () {
	$('input[name="phone"]').mask('+7 (999) 999-99-99', { autoclear: false });
	$('input[name="phone"]').focus(function () {
		if ($(this).val() === '') {
			$(this).val('+7 ');
		}
	});
});

// Button up at the very bottom
$(document).ready(function () {
	$('.footer_top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 600);
		return false;
	});
});