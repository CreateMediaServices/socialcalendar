
var winWidth = $(window).width();
var winHeight = $(window).height();

$(function () {
	$("select").select2({
		minimumResultsForSearch: Infinity
	});

	$('.js-select-channel li').click(function (e) {
		e.preventDefault();
		$(this).toggleClass('off');
	});
	$('.js-radio-channel li').click(function (e) {
		e.preventDefault();
		$('.js-radio-channel li').addClass('off');
		$(this).removeClass('off');
	});
});

$(window).on('load resize', function () {
	winDimCalc();
});

function winDimCalc() {
	winWidth = $(window).width();
	winHeight = $(window).height();
}

//console.log('hello world!');


$(document).ready(function(){ 
	$(".js-feed-listing").mCustomScrollbar({
		theme:"minimal-dark",
		axis: 'y',
		scrollButtons: {
			enable: true
		}
	});
	$(".js-postsRow").mCustomScrollbar({
		theme:"minimal-dark",
		axis: 'x',
		scrollButtons: {
			enable: false
		}
	});
	
	
	$(document).on("click",".js-approved", function(e){
		e.preventDefault();
		var currentContext = $(this);
		var currentContextParent = $(this).parent().parent();

		$(currentContext).parent(".cta-post").fadeOut(function(){
			$(currentContextParent).find(".status-approved").fadeIn()
		});
	});
	$(document).on("click",".js-disapproved", function(e){
		e.preventDefault();
		var currentContext = $(this);
		var currentContextParent = $(this).parent().parent();

		$(currentContext).parent(".cta-post").fadeOut(function(){
			$(currentContextParent).find(".status-disapproved").fadeIn()
		});
	});
	$(document).on("click",".js-resetstatus", function(e){
		e.preventDefault();
		var currentContext = $(this);
		var currentContextParent = $(this).parent().parent();

		$(currentContext).parent().fadeOut(function(){
			$(currentContextParent).find(".cta-post").fadeIn()
		});
	});
	$(document).on("click",".js-open-modal", function(e){
	 	e.preventDefault();
	 	var currentContext = $(this);
		$(currentContext.attr("href")).fadeIn();
	});
	$(".js-close-popup").click(function(e){
	 	e.preventDefault();
        $(".js-modal").fadeOut();
    });
    $(".txt-icon").click(function(e){
	 	e.preventDefault();
        $(this).toggleClass('icon-green');
    });
    $(document).keydown(function(e) {
		if (e.keyCode == 27) { 
			$(".js-modal").fadeOut();
		}
	});
    // Update image Preview
    $(".js-select-image").change(function(){
        readURL(this);
    });
	$(document).on("click",".js-removeimg", function(e){
		e.preventDefault();
		$(".js-select-image").val('');
		$('.js-preview-image').attr('src', null);
	});
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('.js-preview-image').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        	$(".js-removeimg").show();
        }
    }
    // Update textbox copy to preview
    $(".js-post-content-type").keyup(function(){
    	addContent();
    });
    function addContent() {
        var input = $(".js-post-content-type").val();
        $(".js-post-content-display").text(input);
    }
    // Update date to preview
    $(".js-post-date-type").change(function(){
    	addDate();
    });
    function addDate() {
        var input = $(".js-post-date-type").val();
        $(".js-post-date-display").text(input);
        console.log(input);
    }

    // Update time to preview
    $(".js-post-time-type").change(function(){
    	addTime();
    });
    function addTime() {
        var input = $(".js-post-time-type").val();
        $(".js-post-time-display").text(input);
    }


});
