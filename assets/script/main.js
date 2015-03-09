$(document).ready(function() {

	$('img').unveil(200, function() {
	  $(this).load(function() {
	    console.log(this.src + ' loaded');
	  });
	});

});

function hypher() {
	new loader().load(['assets/script/lib/hypher.js'],
		function() {
			$('body').hyphenate('en-us');
			console.log('Hypher Loaded');
		}
	);
}

function imagesFade() {
	$('img').addClass('image-loading');
	$('img').load(function() {
		$(this).removeClass('image-loading');
		$(this).addClass('image-loaded');
	});
}