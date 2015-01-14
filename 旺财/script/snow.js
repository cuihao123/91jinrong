(function($) {
			$.fn.snow = function(options) {
				var $flake = $('<div />').css({
					'position': 'fixed',
					//'absolute', 
					'top': '-50px',
					'z-index': '1000'
				}).html('<img  src="http://sandbox.runjs.cn/uploads/rs/408/gjeegkdb/snow.png" />');
				var documentHeight = document.documentElement.clientHeight; //$(document).height(); 
				var documentWidth = $(document).width();
				var defaults = {
					minSize: 10,
					maxSize: 20,
					newOn: 500,
					flakeColor: "#FFFFFF"
				};
				var options = $.extend({},
				defaults, options);
				var interval = setInterval(function() {
					var startPositionLeft = Math.random() * documentWidth - 100;
					var startOpacity = 0.5 + Math.random();
					var sizeFlake = options.minSize + Math.random() * options.maxSize;
					var endPositionTop = documentHeight - 40;
					var endPositionLeft = startPositionLeft - 100 + Math.random() * 200;
					var durationFall = documentHeight * 10 + Math.random() * 5000;
					$flake.clone().appendTo('body').css({
						left: startPositionLeft,
						opacity: startOpacity,
						'font-size': sizeFlake,
						color: options.flakeColor
					}).animate({
						top: endPositionTop,
						left: endPositionLeft,
						opacity: 0.2
					},
					durationFall, 'linear',
					function() {
						$(this).remove();
					});
				},
				options.newOn); //interval End 
			}; //$.fn.snow End 
		})(jQuery);


$.fn.snow({
                            
                            minSize: 5, //雪花的最小尺寸
                            maxSize: 50, //雪花的最大尺寸
                            newOn: 100 //雪花出现的频率 这个数值越小雪花越多
                })











