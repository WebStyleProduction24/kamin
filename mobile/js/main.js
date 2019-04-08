"use strict";

$(function(){

	// Определение геолокации
	// function getURLParameter(name) {return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;}
	// function run_geo(geo_url){
	// 	$.ajax({type: 'GET',url: geo_url,dataType: 'xml',
	// 		success: function(xml) {$(xml).find('ip').each(function(){
	// 			var city = $(this).find('city').text();
	// 			var region = $(this).find('region').text();
	// 			if(city!=region){var ipg = city+', '+region;}else{var ipg = city;}
	// 			$('<input type="hidden" />').attr({name: 'location', class: 'location', value:ipg}).appendTo("form");
	// 			console.log(city + ' - '+ region);
	// 			console.log(ipg);
	// 		});}});
	// }


	$(document).ready(function(e){

		// Определение геолокации
		// $.get("https://ipinfo.io", function(response) {
		// 	var geo_url='https://ipgeobase.ru:7020/geo?ip='+response.ip; run_geo(geo_url);
		// }, "jsonp");

		$(window).on('resize', function() {
			if (screen.width > 800) {
				document.location = "../" + document.location.search;
			}
		});

		setTimeout(function() {
			$('.pre-loader').fadeOut(1000);
		}, 1000);



		//отмена перетаскивания картинок
		$("img, a").on("dragstart", function(event) { event.preventDefault(); });

		// вызов всплывающего окна
		$('.opt_modal').click(function(e) {
			e.preventDefault();
			$('#opt-modal').arcticmodal();
		});
		$('.zayavka_modal').click(function(e) {
			e.preventDefault();
			$('#zayavka-modal').arcticmodal();
		});
		$('.footer__callback-btn').click(function(e) {
			e.preventDefault();
			$('#callback-modal').arcticmodal();
		});
		$('.footer__tinkoff-btn').click(function(e) {
			e.preventDefault();
			$('#oplata-modal').arcticmodal();
		});


		// попап с подарком
		setTimeout(function() {
			$('#wait-modal').arcticmodal();
		}, 50000);




		// КВИЗ, ответы на вопросы
		// ==================================================
		//
		// $(document).on('click', '.quiz__step1 .quiz__options-start, .quiz__step1 .quiz__options-item-name', function () {
		// 	$('#quiz__popup-step1').arcticmodal();
		// });
		// $(document).on('click', '.quiz__step2 .quiz__options-start, .quiz__step2 .quiz__options-item-name', function () {
		// 	$('#quiz__popup-step2').arcticmodal();
		// });
		// $(document).on('click', '.quiz__step3 .quiz__options-start, .quiz__step3 .quiz__options-item-name', function () {
		// 	$('#quiz__popup-step3').arcticmodal();
		// });
		// $(document).on('click', '.quiz__step4 .quiz__options-start, .quiz__step4 .quiz__options-item-name', function () {
		// 	$('#quiz__popup-step4').arcticmodal();
		// });
		// $(document).on('click', '.quiz__step5 .quiz__options-start, .quiz__step5 .quiz__options-item-name', function () {
		// 	$('#quiz__popup-step5').arcticmodal();
		// });
		// $(document).on('click', '.quiz__step6 .quiz__options-start, .quiz__step6 .quiz__options-item-name', function () {
		// 	$('#quiz__popup-step6').arcticmodal();
		// });

		var $quest_num = $('.quiz__quest-num');
		var $quiz__skidka = $('.quiz__skidka');
		var $quiz__prev = $('.quiz__footer-prevquest');

		function quizOprosnik(currentStep = 1) {
			$('.quiz__step').hide();
			switch (currentStep) {
				case 1:
					$('.quiz__step1').fadeIn();
					$quest_num.html(1);
					$quiz__skidka.html(500);
					$quiz__prev.hide();
					$('.quiz__footer').removeClass().addClass('quiz__footer quiz__foot-step1');
					break;
				case 2:
					$('.quiz__step2').fadeIn();
					$quest_num.html(2);
					$quiz__skidka.html(1000);
					$quiz__prev.fadeIn();
					$('.quiz__footer').removeClass().addClass('quiz__footer quiz__foot-step2');
					break;
				case 3:
					$('.quiz__step3').fadeIn();
					$quest_num.html(3);
					$quiz__skidka.html(1500);
					$quiz__prev.fadeIn();
					$('.quiz__footer').removeClass().addClass('quiz__footer quiz__foot-step3');
					break;
				case 4:
					$('.quiz__step4').fadeIn();
					$quest_num.html(4);
					$quiz__skidka.html(2000);
					$quiz__prev.fadeIn();
					$('.quiz__footer').removeClass().addClass('quiz__footer quiz__foot-step4');
					break;
				case 5:
					$('.quiz__step5').fadeIn();
					$quest_num.html(5);
					$quiz__skidka.html(2500);
					$quiz__prev.fadeIn();
					$('.quiz__footer').removeClass().addClass('quiz__footer quiz__foot-step5');
					break;
				case 6:
					$('.quiz__step6').fadeIn();
					$quest_num.html(6);
					$quiz__skidka.html(3000);
					$quiz__prev.fadeIn();
					$('.quiz__footer').removeClass().addClass('quiz__footer quiz__foot-step6');
					break;
			}
		}
		quizOprosnik(1);

		function controlCheckInputs(stepName) {
			var theCheck = false;
			$(stepName).find("input").each(function(){
				if ($(this).prop('checked') == true){ theCheck = true; }
			});
			if(theCheck != true) {
				$('#modal_not_check').arcticmodal();
				return false;
			}
		}

		// Обработка клика кнопки "СЛЕДУЮЩИЙ ВОПРОС"
		$('.quiz__footer-nextquest').on('click', function () {
			var thisStep = $('.quiz__inner').data('step');
			var newStep = thisStep + 1;

			// проверяем, отмечен ли чекбокс
			switch (thisStep) {
				case 1:
					if(controlCheckInputs(".quiz__step1") == false) {
						return; // прерываем выполнение всей функции click
					}
					break;
				case 2:
					if(controlCheckInputs(".quiz__step2") == false) {return;}
					break;
				case 3:
					if(controlCheckInputs(".quiz__step3") == false) {return;}
					break;
				case 4:
					if(controlCheckInputs(".quiz__step4") == false) {return;}
					break;
				case 5:
					if(controlCheckInputs(".quiz__step5") == false) {return;}
					break;
				case 6:
					if(controlCheckInputs(".quiz__step6") == false) {return;}
					break;
			}

			// проверка на последний шаг квиза
			if(newStep > 6) {
				$('.quiz__inner').hide();
				$('.quiz__final').fadeIn();
				$('.quiz__form').css('paddingTop', '40px');
				return;
			}
			$('.quiz__inner').data('step', newStep);

			quizOprosnik(newStep); //вызываем функцию отрисовки блоков опросника с новым шагом
		});

		// Обработка клика кнопки "НАЗАД"
		$('.quiz__footer-prevquest').on('click', function () {
			var thisStep = $('.quiz__inner').data('step');
			var newStep = thisStep - 1;
			$('.quiz__inner').data('step', newStep)
			quizOprosnik(newStep);
		});

		// Обработка кнопки "Далее" внутри попапа
		// (добавление опций в список из поп-апа)
		$('.quiz__popup-btnclose').on('click', function () {
			var checkFlag = false;
			var numbOfStep = $(this).parents('.quiz__popup').parent().attr('id').slice(-1);
			var stepContentClass = '.quiz__step' + numbOfStep;
			// очищаем блок от элементов
			switch (numbOfStep) {
				case '1': $('.quiz__step1 .quiz__options-item').remove(); break;
				case '2': $('.quiz__step2 .quiz__options-item').remove(); break;
				case '3': $('.quiz__step3 .quiz__options-item').remove(); break;
				case '4': $('.quiz__step4 .quiz__options-item').remove(); break;
				case '5': $('.quiz__step5 .quiz__options-item').remove(); break;
				case '6': $('.quiz__step6 .quiz__options-item').remove(); break;
			}
			$(this).parents('.quiz__popup').find('.check_inp').each(function(indx, elem) {

				if ($(this).prop('checked') == true) {
					var $this_elem_id = $(this).attr('id');
					var $this_img_url = $(this).parents('.quiz__item').find('.quiz__item-img img').attr('src');
					var $this_name = $(this).parents('.quiz__item').find('.quiz__item-name').text();

					var addingRow = '<div class="quiz__options-item" data-elem_id="' + $this_elem_id + '"><div class="quiz__options-item-img" style="background-image: url(../' + $this_img_url + ')"></div><div class="quiz__options-item-name">' + $this_name + '</div><div class="quiz__options-item-del"></div></div>';

					$(stepContentClass).find('.quiz__options').append(addingRow);
					// $('.quiz__options-start').hide();

					checkFlag = true;

				}

				if(checkFlag == true) {
					$(stepContentClass).find('.quiz__options-start').hide();
				} else {
					$(stepContentClass).find('.quiz__options-start').show();
				}

			});;
		});

		// Удаление строки и снятие чекбокса
		$(document).on('click', '.quiz__options-item-del', function () {
			var thisElem = $(this).parents('.quiz__options-item').data('elem_id');
			var thisElemId = '#' + thisElem;
			var parentOption = $(this).parents('.quiz__options');
			$(thisElemId).prop('checked', false);
			$(this).parents('.quiz__options-item').remove();

			var numbOfStep = $('.quiz__inner').data('step');
			var stepContentClass = '.quiz__step' + numbOfStep;

			var flagVar = false;
			parentOption.find('.quiz__options-item').each(function() {
				flagVar = true;
			});
			if(flagVar == false) {
				$(stepContentClass).find('.quiz__options-start').show();
			}
		});

		// КОНЕЦ КВИЗА, ответы на вопросы
		// ==================================================


		// СЛАЙДЕР НА ВТОРОМ ЭКРАНЕ
		var s2Slider = $('.s2__slider').owlCarousel({
			loop: true,
			center: true,
			margin: 15,
			dots: true,
			nav: false,
			items: 1
		});
		$('.s2__slide-prev').click(function() { s2Slider.trigger('prev.owl.carousel'); });
		$('.s2__slide-next').click(function() { s2Slider.trigger('next.owl.carousel'); });

		s2Slider.trigger('to.owl.carousel', 2);

		$('.to_slide_1').click(function(){ s2Slider.trigger('to.owl.carousel', 0) });
		$('.to_slide_2').click(function(){ s2Slider.trigger('to.owl.carousel', 1) });
		$('.to_slide_3').click(function(){ s2Slider.trigger('to.owl.carousel', 2) });
		$('.to_slide_4').click(function(){ s2Slider.trigger('to.owl.carousel', 3) });
		$('.to_slide_5').click(function(){ s2Slider.trigger('to.owl.carousel', 4) });


		// СЛАЙДЕР НА ТРЕТЬЕМ ЭКРАНЕ

		var s3InnerSlider = $('.s3__innerslider').owlCarousel({
			loop: true,
			center: true,
			margin: 0,
			nav: true,
			mouseDrag: false,
			touchDrag: false,
			items: 1
		});

		var s3Slider = $('.s3__slider').owlCarousel({
			loop: true,
			autoHeight: true,
			center: true,
			margin: 15,
			dots: true,
			nav: false,
			items: 1,
			onInitialized: refreshInnerSl3
		});
		$('.s3__slide-prev').click(function() { s3Slider.trigger('prev.owl.carousel'); });
		$('.s3__slide-next').click(function() { s3Slider.trigger('next.owl.carousel'); });

		$('.sl3_to_slide_1').click(function(){ s3Slider.trigger('to.owl.carousel', 0) });
		$('.sl3_to_slide_2').click(function(){ s3Slider.trigger('to.owl.carousel', 1) });
		$('.sl3_to_slide_3').click(function(){ s3Slider.trigger('to.owl.carousel', 2) });
		$('.sl3_to_slide_4').click(function(){ s3Slider.trigger('to.owl.carousel', 3) });

		function refreshInnerSl3() {
			s3InnerSlider.trigger('refresh.owl.carousel');
		}





		$(".s1__scroll").click(function() {
			$([document.documentElement, document.body]).animate({
				scrollTop: $(".s2").offset().top - 20
			}, 1000);
		});
		$(".s1__btn").click(function() {
			$([document.documentElement, document.body]).animate({
				scrollTop: $(".quiz").offset().top - 50
			}, 1000);
		});
		$(".s1__catalog").click(function(e) {
			e.preventDefault();
			$('#catalog-modal').arcticmodal();
			// $([document.documentElement, document.body]).animate({
			// 	scrollTop: $(".catalog").offset().top - 50
			// }, 1000);
		});


		// вызов всплывающего окна
		$('.examples_popup').click(function(e) {
			e.preventDefault();
			$('#examples_popup').arcticmodal();
		});
		$('.sertificate_popup').click(function(e) {
			e.preventDefault();
			$('#sertificate_popup').arcticmodal();
		});
		$('.sborka_popup').click(function(e) {
			e.preventDefault();
			$('#sborka_popup').arcticmodal();
		});
		$('.razrez_popup').click(function(e) {
			e.preventDefault();
			$('#razrez_popup').arcticmodal();
		});
		$('.gotovka_popup').click(function(e) {
			e.preventDefault();
			$('#gotovka_popup').arcticmodal();
		});

		$('.s4__btn-rassrochka').click(function(e) {e.preventDefault();$('#rassrochka-modal').arcticmodal();});

		$('.pech_tandyr').click(function(e) {e.preventDefault();$('#tovar6-modal').arcticmodal();});
		$('.kostrovische_3v1').click(function(e) {e.preventDefault();$('#tovar10-modal').arcticmodal();});
		$('.pech_pod_kazan').click(function(e) {e.preventDefault();$('#tovar5-modal').arcticmodal();});

		$('.s4__promo-btn').click(function(e) {e.preventDefault();$('#promo3in1-modal').arcticmodal();});



		var examples_ppsldr = $('.examples_popupslider').owlCarousel({
			loop: true,
			center: true,
			margin: 0,
			nav: false,
			items: 1,
			autoHeight: true
		});
		$('.examples_popup-prev').click(function() {examples_ppsldr.trigger('prev.owl.carousel');});
		$('.examples_popup-next').click(function() {examples_ppsldr.trigger('next.owl.carousel');});



		// Показывать и удалять подробности "Рассрочки"
		$('.s4__prod-rassrochka').on('click', function () {
			if($(this).hasClass('active')) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');
			}
		});
		// $('.s4__prod-rassrochka-close').on('click', function () {
			// $(this).parents('.s4__prod-rassrochka').removeClass('active');
		// });

		// Карусель товаров 1
		var s4__prod1 = $('.s4__carousel1').owlCarousel({
			loop: true,
			center: true,
			margin: -72,
			nav: false,
			items: 1,
			autoHeight: true
		});
		$('.s4__carousel1-prev').click(function() {s4__prod1.trigger('prev.owl.carousel');});
		$('.s4__carousel1-next').click(function() {s4__prod1.trigger('next.owl.carousel');});

		// Карусель товаров 2
		var s4__prod2 = $('.s4__carousel2').owlCarousel({
			loop: true,
			center: true,
			margin: -140,
			nav: false,
			items: 1,
			autoHeight: true
		});
		$('.s4__carousel2-prev').click(function() {s4__prod2.trigger('prev.owl.carousel');});
		$('.s4__carousel2-next').click(function() {s4__prod2.trigger('next.owl.carousel');});





		// ===================================
		// ПЕРЕКЛЮЧЕНИЕ ФОТО ТОВАРОВ В ПОПАПАХ
		// ===================================
		$('.prodpopup__thumb-item').on('click', function () {
			var thisBgSrc = $(this).data('srcbg');
			$(this).parents('.prodpopup__left').find('.prodpopup__mainphoto').css('background-image', 'url(' + thisBgSrc + ')');
			$(this).parents('.prodpopup__left').find('.prodpopup__thumb-item').removeClass('active');
			$(this).addClass('active');
		});

		// Добавим активный класс на первое фото-миниатюру и активируем первое фото
		$('.prodpopup__thumb').each(function() {
			var firstBgUrl = $(this).find('.prodpopup__thumb-item:first-child').data('srcbg');
			$(this).find('.prodpopup__thumb-item:first-child').addClass('active');
			$(this).parents('.prodpopup__left').find('.prodpopup__mainphoto').css('background-image', 'url(' + firstBgUrl + ')');
		});

		// Показываем скрытые блоки внутри попапа Товара
		$('.prodpopup__main-links-descr').on('click', function () {
			$(this).parents('.prodpopup').find('.prodpopup__descr').addClass('active');
		});
		$('.prodpopup__descr-close').on('click', function () {
			$(this).parents('.prodpopup').find('.prodpopup__descr').removeClass('active');
		});

		$('.prodpopup__main-links-komplekt').on('click', function () {
			var popupBlock = $(this).parents('.prodpopup').find('.prodpopup__komplekt');
			var popupHeight = popupBlock.height();
			popupBlock.addClass('active');
			$(this).parents('.prodpopup').css('minHeight', popupHeight);
		});
		$('.prodpopup__komplekt-close').on('click', function () {
			$(this).parents('.prodpopup').find('.prodpopup__komplekt').removeClass('active');
			$(this).parents('.prodpopup').css('minHeight', '1px');
		});

		// Вызов нужногго попапа при клике кнопки "ПОДРОБНЕЕ" в блоке "Выберите свою печь-барбекю"
		$('.s4__btn-prodabout, .s4__other-btn').on('click', function () {
			var thisPopapUrl = '#' + $(this).data('morepopup');
			$(thisPopapUrl).arcticmodal();
		});

		// Запишем во все формы инпут с городом и будем записывать туда название города
		$('form').append('<input type="hidden" name="client_city" class="client_city_input"/>');

		// Открываем попап "Покупка" и меняем надпись кнопки попкупки
		$('.prodpopup__btn-dopskidka').on('click', function () {
			var thisFormId = $(this).parents('.prodpopup').parent().attr('id');
			var thisBuyForm = '#buy-' + thisFormId;
			$(thisBuyForm).arcticmodal();
			$(thisBuyForm).find('.prodpopup__typebuyform-hidden').val('Получить дополнительную скидку');
			$(thisBuyForm).find('.prodpopup__btn-buy-wrap').html('Узнайте размер вашей доп. скидки');
			$(thisBuyForm).find('.prodpopup__price-rassrochka').hide();
			$(thisBuyForm).find('.prodpopup__price-skidka').show();
		});
		$('.prodpopup__btn-rassrochka').on('click', function () {
			var thisFormId = $(this).parents('.prodpopup').parent().attr('id');
			var thisBuyForm = '#buy-' + thisFormId;
			$(thisBuyForm).arcticmodal();
			$(thisBuyForm).find('.prodpopup__typebuyform-hidden').val('Купить товар в рассрочку');
			$(thisBuyForm).find('.prodpopup__btn-buy-wrap').html('Купить товар в <br>рассрочку');
			$(thisBuyForm).find('.prodpopup__price-skidka').hide();
			$(thisBuyForm).find('.prodpopup__price-rassrochka').show();
		});


		// Выводим все города с JSON файла
		$.getJSON("../files/russia_cities.json", function(json) {
			for (var i = 0; i < json.length; i++) {
				$('.cities-modal__citylist').append('<div class="cities-modal__city" data-region="'+ json[i].region +'"><span class="span-city">' + json[i].city + '</span><span class="cities-modal__city-region"> ('+ json[i].region +')</span></div>');
			}
			$(".cities-modal__citylist").mCustomScrollbar({scrollInertia: 400});
		});


		// Позываем окно "Это ваш город?"\
		var $cityDetect = $('.city-detect');
		setTimeout(function() {
			$cityDetect.addClass('active');
		}, 4000);
		$('.city-detect__btn-yes').on('click', function () {
			$('.client_city_input').val($('.s1__text1 .s1__city').text());
			$cityDetect.removeClass('active');
		});
		$('.city-detect__btn-no').on('click', function () {
			$cityDetect.removeClass('active');
			$('#cities-modal').arcticmodal();
		});
		$(document).on('click', '.cities-modal__city:not(.cities-modal__bukva)', function () {
			$cityDetect.removeClass('active');
			var thisCity1 = $(this).find('.span-ity').text();
			var thisCity2 = $(this).text();
			$('.s1__city').text(thisCity1);
			$('.cities-modal__input input').val(thisCity2);
			$('#cities-modal').arcticmodal('close');
			$('.client_city_input').val(thisCity2);
		});

		// Покажем вопрос при клике на город
		$('.s1__city-wrap').on('click', function () {
			$('#cities-modal').arcticmodal();
		});
		$(document).on('click', '.eac-item', function () {
			$('#cities-modal').arcticmodal('close');
			$('.client_city_input').val($(this).text());
		});


		var options = {
			url: "../files/russia_cities.json",
			getValue: "city",
			list: {
				match: { enabled: true }
			}
		};

		$(".cities-modal__input input").easyAutocomplete(options);

		$(document).on("change", ".input_for_city", function() {
			var theCity = $(this).val();
			if(theCity != '' && theCity.length > 3) {
				$('.s1__city').text(theCity);
			}
			$('.client_city_input').val(theCity);
		});






		//исправление бага ArcticModal в Firefox
		$('.arcticmodal-close').click(function() {
			$('body').css({'overflow-y': 'scroll'});
		});
		$("body").click(function(){$(this).css('overflow-y','visible')});


		// проверка инпута
		$('button[type=submit], input[type=submit]').on('click', function(e) {
			var tel_input = $(this).parents('form').find('input[type=tel]');
			if(tel_input.val() == '' || tel_input.val().length < 17) {
				e.preventDefault();
				$('#modal_error').arcticmodal();
				tel_input.addClass('error-input');
			}
		});

		$('form input').focus(function() {
			if($(this).hasClass('error-input')) {
				$(this).removeClass('error-input');
			}
		});

		var $phoneInput = $('input[type="tel"]');
		$phoneInput.mask("+7 (999) 999-99-99");
		$phoneInput.focus(function() {
			if ( $(this).val() == '' ) { $(this).val('+7 ('); }
		});


		//AJAX email send
		$('form:not(.tinkoffPayForm)').submit(function(event) {
			event.preventDefault();
			var data = $(this).serialize();
			var type_form = $.trim($(this).find('input[name="type_form"]').val());
			var theCatalog = false;
			if($(this).hasClass('form__catalog-skidka30') || $(this).hasClass('quiz__form')) {
				theCatalog = true;
			}
			$.ajax({
				url       : '/emailOrder.php',
				data      : data,
				type      : 'post',
				success   : function() {
					$('.hidden-block input[type=text], .hidden-block input[type=tel], .hidden-block textarea').val('');
					$.arcticmodal('close');
					if(theCatalog == true) {
						$('#modal_thank_catalog').arcticmodal();
						var linkDownload = document.createElement('a');
						linkDownload.setAttribute('href','/files/catalog_bbq.pdf');
						linkDownload.setAttribute('download','Catalog BBQ');
						linkDownload.click();
					} else {
						$('#modal_thank').arcticmodal();
					}

					switch (type_form) {
						case "Форма 'Каталог со скидкой 30%'":
							ga('send', 'event', 'forma', 'FORM_SKIDKA30');
							ym(47960552, 'reachGoal', 'FORM_SKIDKA30');
							break;

						case "Форма 'А вы настроены серьезно'":
							ga('send', 'event', 'forma', 'FORM_SERIEZNO');
							ym(47960552, 'reachGoal', 'FORM_SERIEZNO');
							break;

						case "Форма 'Стойте, не уходите!'":
							ga('send', 'event', 'forma', 'FORM_WAIT');
							ym(47960552, 'reachGoal', 'FORM_WAIT');
							break;

						case "Форма 'Получите самые горячие условия на опт!'":
							ga('send', 'event', 'forma', 'FORM_OPT');
							ym(47960552, 'reachGoal', 'FORM_OPT');
							break;

						case "Форма 'Закажите основание для вашей печи'":
							ga('send', 'event', 'forma', 'FORM_OSNOVANIE');
							ym(47960552, 'reachGoal', 'FORM_OSNOVANIE');
							break;

						case "Форма 'Заказать обратный звонок'":
							ga('send', 'event', 'forma', 'FORM_CALLBACK');
							ym(47960552, 'reachGoal', 'FORM_CALLBACK');
							break;

						case "Форма 'Купить комплект по акции (3 товара)'":
							ga('send', 'event', 'forma', 'FORM_PROMO3IN1');
							ym(47960552, 'reachGoal', 'FORM_PROMO3IN1');
							break;

						case "Форма 'Квиз'":
							ga('send', 'event', 'forma', 'QUIZ_FORM');
							ym(47960552, 'reachGoal', 'QUIZ_FORM');
							break;

						case "Форма 'Купить товар'":
							ga('send', 'event', 'forma', 'FORM_BUYTOVAR');
							ym(47960552, 'reachGoal', 'FORM_BUYTOVAR');
							break;

						default: ;
					}
				},
				error     : function(){
					$.arcticmodal('close');
					alert('Ошибка! Что-то пошло не так...');
				}
			});
		});





	//==========EoF==============
});
});

