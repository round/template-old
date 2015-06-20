$(document).ready(function() {

});

function hypher() {
	new loader().load(['assets/script/lib/hypher.js'],
		function() {
			$('body').hyphenate('en-us');
			console.log('Hypher Loaded');
		}
	);
}
