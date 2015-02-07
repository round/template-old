var Loader=function(){};Loader.prototype={require:function(e,t){this.loadCount=0;this.totalRequired=e.length;this.callback=t;for(var n=0;n<e.length;n++){this.writeScript(e[n])}},loaded:function(e){this.loadCount++;if(this.loadCount==this.totalRequired&&typeof this.callback=="function")this.callback.call()},writeScript:function(e){var t=this;var n=document.createElement("script");n.async=true;n.src=e;n.addEventListener("load",function(e){t.loaded(e)},false);var r=document.getElementsByTagName("head")[0];r.appendChild(n)}}


var j = new Loader();
j.require(['assets/script/lib/pace.js'],
	function() {
		Pace.on('hide', function() {
			//$('.pace').remove();
		});
	}
);

var j = new Loader();
j.require([
	'//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js',
	],
	function() {
		console.log('jQuery Loaded');
		var m = new Loader();
		m.require([
			'http://localhost:8888/Dropbox%20(Personal)/Projects/mutate/assets/script/main.js',
			],
			function() {
				console.log('Main JS Loaded');
			}
		);
		imagesFade();
	}
);

var f = new Loader();
f.require([
	'//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js',
	],
	function() {
		WebFont.load({
			/*custom: {
	      families: ['Font'],
	      urls: ['assets/style/type.css']
	    },*/
			/*typekit: {
				id: 'xxxxxxx'
			},*/
			google: {
				families: ['Droid Sans Mono']
			},
			fontactive: function(fontFamily) {
				console.log('Loaded ' + fontFamily);
			},
		});
	});
);

var u = new Loader();
u.require(['/assets/script/lib/unveil.js']); //Depends on jQuery