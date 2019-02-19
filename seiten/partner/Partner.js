var ypos,image;
	function parallex() {
		image = document.getElementById('image');
		ypos = window.pageYOffset;
		image.style.top = ypos * 0.6+ 'px';
	}
	window.addEventListener('scroll', parallex),false;