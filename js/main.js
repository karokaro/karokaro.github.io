$(document).ready(function(){
	function runTyping() {
		var element = document.querySelector('.header-note');
		var typeSpeed = 80; // 80 ms
		var deleteSpeed = 20; // 30 ms
		var deleteAfter = 1500; // 1 second
		var items = [
			"I'm passionate about quality code, best practices and performance",
			"I code cool websites",
			"I enjoy learning",
		];
		/* END SETTINGS */

		var sentence = 0;
		var currentChar = 0;
		var direction = 1;
		var deleteInterval = null;

		function type() {
		  if (sentence >= items.length) {
		    sentence = 0;
		  }

		  var chars = items[sentence].split("");

		  setTimeout(function() {
		    if (currentChar >= chars.length) {
		      setTimeout(function() {
		        sentence++;

		        deleteInterval = setInterval(function() {
		        	element.innerHTML = element.innerHTML.substr(0, currentChar - 1);
		          	
		          currentChar--;

		          if (currentChar == 1) {
		            clearInterval(deleteInterval);
		            type();
		          }
		        }, deleteSpeed);
		      }, deleteAfter);

		      return;
		    }

		    element.innerHTML += chars[currentChar];
		    currentChar++;

		    type();
		  }, typeSpeed);
		}

		type();
	}
	$('.type-container').delay(500).animate({'top': 0, 'bottom': 0, 'opacity':1},600);
	runTyping()
});
