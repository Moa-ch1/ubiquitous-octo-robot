"use strict";

//グローバルメニュー
// var gmenu = document.querySelector('#gmenu');
var gmenu = document.getElementById('gmenu');
if(gmenu != null){
	gmenu.addEventListener('click', function(e){
		var $body = document.body;
		if($body.classList.contains('open')){
			$body.classList.remove('open');
		} else{
			$body.classList.add('open');
		}
	});
}

var nav = document.querySelector('nav');
if(nav != null){
	nav.addEventListener('click', function(e){
		var link = e.target.closest('a[href^="#"]');
		if(link != null){
			document.body.classList.remove('open');
		}
	});
}
