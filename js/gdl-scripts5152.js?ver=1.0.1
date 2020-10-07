function gdl_portfolio_hover(selector){
	selector.each(function(){
		jQuery(this).hover(function(){
			var thumbnail_hover = jQuery(this).find('a.hover-wrapper');
			var thumbnail_overlay_hover = thumbnail_hover.children();
			
			thumbnail_overlay_hover.fadeIn(200);
		}, function(){
			var thumbnail_hover = jQuery(this).find('a.hover-wrapper');
			var thumbnail_overlay_hover = thumbnail_hover.children();
			
			thumbnail_overlay_hover.fadeOut(200);
		});
	});	
}

function gdl_blog_hover(selector){
	selector.hover(function(){
		jQuery(this).animate({ opacity: 0.55 }, 150);
	}, function(){
		jQuery(this).animate({ opacity: 1 }, 150);
	});
}

jQuery(document).ready(function(){
	
	// Search Default text
	jQuery('.search-text input').live("blur", function(){
		var default_value = jQuery(this).attr("data-default");
		if (jQuery(this).val() == ""){
			jQuery(this).val(default_value);
		}	
	}).live("focus", function(){
		var default_value = jQuery(this).attr("data-default");
		if (jQuery(this).val() == default_value){
			jQuery(this).val("");
		}
	});	
	
	// Top search
	jQuery(".top-search-wrapper").find("#searchsubmit").click(function(){
		if( !jQuery(this).siblings("#search-text").hasClass('active') ){
			header_wrapper = jQuery(this).parents('.header-wrapper');
			if( jQuery(this).hasClass('style-2') ){
				search_width = header_wrapper.children('.header-right-side2').outerWidth() - 40;
			}else{
				search_width = header_wrapper.width() - header_wrapper.children('.header-right-side').outerWidth() - 40;
			}
			
			jQuery(this).siblings("#search-text").children("input[type='text']").val("");
			jQuery(this).siblings("#search-text").css('width', search_width + 'px');
			jQuery(this).siblings("#search-text").slideDown(200);
			jQuery(this).siblings("#search-text").children("input[type='text']").focus();
			jQuery(this).siblings("#search-text").addClass("active");
			
			return false;
		}else if( jQuery(this).siblings("#search-text").children("input[type='text']").val() == "" ){
			return false;
		}
		
		
	});
	jQuery("div.gdl-search-form .top-search-close").click(function(){
		jQuery(this).parent('#search-text').slideUp(200).removeClass("active");
	});	

	// Accordion
	var gdl_accordion = jQuery('ul.gdl-accordion');
	gdl_accordion.find('li').not('.active').each(function(){
		jQuery(this).children('.accordion-content').css('display', 'none');
	});
	gdl_accordion.find('li').click(function(){
		if( !jQuery(this).hasClass('active') ){
			jQuery(this).addClass('active').children('.accordion-content').slideDown();
			jQuery(this).siblings('li').removeClass('active').children('.accordion-content').slideUp();
		}
	});
	
	// Toggle Box
	var gdl_toggle_box = jQuery('ul.gdl-toggle-box');
	gdl_toggle_box.find('li').not('.active').each(function(){
		jQuery(this).children('.toggle-box-content').css('display', 'none');
	});
	gdl_toggle_box.find('li').click(function(){
		if( jQuery(this).hasClass('active') ){
			jQuery(this).removeClass('active').children('.toggle-box-content').slideUp();
		}else{
			jQuery(this).addClass('active').children('.toggle-box-content').slideDown();
		}
	});	
	
	// Tab
	var gdl_tab = jQuery('div.gdl-tab');
	gdl_tab.find('.gdl-tab-title li a').click(function(e){
		if( jQuery(this).hasClass('active') ) return;
		
		var data_tab = jQuery(this).attr('data-tab');
		var tab_title = jQuery(this).parents('ul.gdl-tab-title');
		var tab_content = tab_title.siblings('ul.gdl-tab-content');
		
		// tab title
		tab_title.find('a.active').removeClass('active');
		jQuery(this).addClass('active');
		
		// tab content
		tab_content.children('li.active').removeClass('active').css('display', 'none');
		tab_content.children('li[data-tab="' + data_tab + '"]').fadeIn().addClass('active');
		
		e.preventDefault();
	});
	
	// Scroll Top
	jQuery('div.scroll-top').click(function() {
		jQuery('html, body').animate({ scrollTop:0 }, { duration: 600, easing: "easeOutExpo"});
		return false;
	});
	
	// Blog / Port Hover
	gdl_blog_hover(jQuery(".blog-media-wrapper.gdl-image, .port-media-wrapper.gdl-image, .gdl-gallery-image"))
	gdl_portfolio_hover( jQuery(".portfolio-media-wrapper") );
	
	// Port empty container
	function gdl_set_empty_container(){
		jQuery('.portfolio-media-wrapper.empty-container').each(function(){
			var ratio = parseInt(jQuery(this).attr('data-height')) / parseInt(jQuery(this).attr('data-width'));
			jQuery(this).css('height', ratio * jQuery(this).width() );
		});	
	}
	gdl_set_empty_container();

	jQuery(window).resize(function(){
		gdl_set_empty_container();
	});

	// JW Player Responsive
	responsive_jwplayer();
	function responsive_jwplayer(){
		jQuery('[id^="jwplayer"][id$="wrapper"]').each(function(){
			var data_ratio = jQuery(this).attr('data-ratio');
			if( !data_ratio || data_ratio.length == 0 ){
				data_ratio = jQuery(this).height() / jQuery(this).width();
				jQuery(this).css('max-width', '100%');
				jQuery(this).attr('data-ratio', data_ratio);
			}
			jQuery(this).height(jQuery(this).width() * data_ratio);
		});
	}
	jQuery(window).resize(function(){
		responsive_jwplayer();
	});

	/////////// Image scrolling opacity effects ////////////
	var start_image = jQuery('img').not('.logo-wrapper img');
	start_image.each(function(){
		jQuery(this).css('opacity', '0');
		jQuery(this).one('load', function() {
			var current_height = jQuery(window).scrollTop() + jQuery(window).height();
			jQuery(this).attr('data-scroll', jQuery(this).offset().top);
			
			if( jQuery(this).offset().top < current_height ){
				jQuery(this).delay(200).animate({'opacity': '1'}, 1000);
			}
		}).each(function() { if(this.complete) jQuery(this).load(); });			
	});
	jQuery(window).scroll(function(){
		start_image.each(function(){
			var current_height = jQuery(window).scrollTop() + jQuery(window).height();
			if( parseInt(jQuery(this).offset().top) < current_height ){
				jQuery(this).delay(200).animate({'opacity': '1'}, 1000);
			}
		});		
	});	
	

});
jQuery(window).load(function(){

	// Menu Navigation
	jQuery('#main-superfish-wrapper ul.sf-menu').supersubs({
		minWidth: 14.5, maxWidth: 27, extraWidth: 2
	}).superfish({
		delay: 400, speed: 'fast', animation: {opacity:'show',height:'show'}
	});
	
	// Set Social Position
	function set_header_element(){
		var header_outer = jQuery('#header-outer-wrapper');
		var header_social = header_outer.find('#gdl-social-icon');
		var header_right = header_social.siblings('.header-right-side');
		header_right.css({'height': 'auto'});
		
		header_social.each(function(){
			jQuery(this).css({ 'position':'absolute', 'top':'0px', 'right': header_right.outerWidth() });
		});
		
		header_outer.css({'overflow':'visible'});
		header_right.css({'margin-bottom':'0', 'padding-bottom':'0'});
		
		var tmp_height = header_outer.height() - parseInt(header_right.css('padding-top'));
		
		header_right.css({'height': tmp_height});
	
	}
	set_header_element();
	
	jQuery('#gdl-social-icon, div.header-overlay-right, div.header-right-side').each(function(){
		jQuery(this).animate({'opacity':'1'});
	});	

	// Personnal Item Height
	function set_personnal_height(){
		jQuery(".personnal-item-holder .row").each(function(){
			var max_height = 0;
			jQuery(this).find('.personnal-item').height('auto');
			jQuery(this).find('.personnal-item-wrapper').each(function(){
				if( max_height < jQuery(this).height()){
					max_height = jQuery(this).height();
				}
			});
			jQuery(this).find('.personnal-item').height(max_height);
		});		
	}
	set_personnal_height();
	
	// Price Table Height
	function set_price_table_height(){
		jQuery(".price-table-wrapper .row").each(function(){
			var max_height = 0;
			jQuery(this).find('.best-price').removeClass('best-active');
			jQuery(this).find('.price-item').height('auto');
			jQuery(this).find('.price-item-wrapper').each(function(){
				if( max_height < jQuery(this).height()){
					max_height = jQuery(this).height();
				}
			});
			jQuery(this).find('.price-item').height(max_height);
			jQuery(this).find('.best-price').addClass('best-active');
		});		
	}	
	set_price_table_height();
	
	// When window resize, set all function again
	jQuery(window).resize(function(){
		set_personnal_height();
		set_price_table_height();
		set_header_element();
	});	
	
});

