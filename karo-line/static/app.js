// $(window).on('scroll', function(){
// 	var timelineBlocks = $('.b-timeline'),
// 		offset = 0.8;
// 	$timeline_block.each(function(){
// 		if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.b-timeline_img').hasClass('is-hidden') ) {
// 			$(this).find('.b-timeline_img, .b-timeline_content').removeClass('is-hidden').addClass('bounce-in');
// 		}
// 	});
// });
jQuery(document).ready(function($){
	var timelineBlocks = $('.b-timeline'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.b-timeline_img, .b-timeline_content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.b-timeline_img').hasClass('is-hidden') ) && $(this).find('.b-timeline_img, .b-timeline_content').removeClass('is-hidden').addClass('bounce-in');
		});
	}
});