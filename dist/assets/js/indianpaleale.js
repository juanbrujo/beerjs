function backgroundParallax() {
	window.onscroll = function() {
		var a = document.querySelectorAll("[data-scroll]");
		if (a.length)
			for (var b = 0; b < a.length; b++) {
				var c = a[b].getAttribute("data-scroll");
				a[b].style.backgroundPosition = -window.pageXOffset / c + "px " + -window.pageYOffset / c + "px"
			}
	}
}
console.log("%c  _______  _______  _______  ______        ___  _______        _______  ___      \r\n |  _    ||       ||       ||    _ |      |   ||       |      |       ||   |     \r\n | |_|   ||    ___||    ___||   | ||      |   ||  _____|      |       ||   |     \r\n |       ||   |___ |   |___ |   |_||_     |   || |_____       |       ||   |     \r\n |  _   | |    ___||    ___||    __  | ___|   ||_____  | ___  |      _||   |___  \r\n | |_|   ||   |___ |   |___ |   |  | ||       | _____| ||   | |     |_ |       | \r\n |_______||_______||_______||___|  |_||_______||_______||___| |_______||_______| \r\n                                                                                 ", "background: #222; color: #ffCC00"), console.log("%c Compartiendo sobre JS, en un bar cercano ", "background: #222; color: #ffCC00"), console.log("%c salud@beerjs.cl ", "background: #222; color: #ffCC00"),
	function() {
		var a = document.getElementById("bubbles"),
			b = function(a, b) {
				return Math.random() * b + a
			},
			c = 0,
			d = function() {
				if (c < 20) {
					var d = document.createElement("div"),
						f = b(5, 10);
					d.setAttribute("style", "width: " + f + "px; height: " + f + "px; left:" + b(1, a.offsetWidth - (f + 4)) + "px;"), a.appendChild(d), c++
				} else clearInterval(e)
			};
		d();
		var e = setInterval(d, 500)
	}(), backgroundParallax(),
  
	function(a, b, c, d, e, f, g) {
		a.GoogleAnalyticsObject = e, a[e] = a[e] || function() {
			(a[e].q = a[e].q || []).push(arguments)
		}, a[e].l = 1 * new Date, f = b.createElement(c), g = b.getElementsByTagName(c)[0], f.async = 1, f.src = d, g.parentNode.insertBefore(f, g)
	}(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"), ga("create", "UA-62394125-1", "auto"), ga("send", "pageview");
