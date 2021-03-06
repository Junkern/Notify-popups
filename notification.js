var Notification = (function(window) {
	var my = {};
	var w = window;
	var d =  w.document;
	var content = '';
	var buttons = '</br>';
	var callbacks = {};
	var counter = 0;
	var eclipsed = [];
	var displayed = false;

	d.onkeydown = function(event) {
		event = event || window.event;
		if (event.keyCode == 27 && displayed) {
			reset();
		}
	};

	var getEl = function(id) {
		return document.getElementById(id);
	};

	my.addButton = function(text, options) {
		if (typeof options !== "undefined") {
			addCallback(options.callback);
		} else {
			addCallback();
		}
		buttons += buildButton(text, options);
		counter++;
		return this;
	};

	var buildButton = function(text, options) {
		var result;
		if (typeof options !== "undefined") {
			var classes = (typeof options.classes !== "undefined") ? ' class = "'+options.classes+'"' : '';
			result = '<a onclick="Notification.cb('+counter+')" '+classes+'>';
		} else {
			result = '<a onclick="Notification.cb('+counter+')">';
		}
		result += text;
		result += '</a>';
		return result;
	};

	var addCallback = function(callback) {
		var cb =  function() {
			if(typeof callback !== 'undefined') callback();
			reset();
		};
		callbacks[counter] = cb;
	};

	var reset =  function() {
		getEl('notification').parentElement.removeChild(getEl('notification'));
		for (var i = 0; i < eclipsed.length; i++) {
			eclipsed[i].style.opacity = 1;
		}
		buttons = '</br>';
		content = '';
		callbacks = {};
		displayed = false;
	};

	my.eclipse = function() {
		for (var i = 0; i < arguments.length; i++) {
			var el = getEl(arguments[i]);
			el.style.opacity = 0.2;
			eclipsed.push(el);
		}
		return this;
	};

	my.cb = function(number) {
		callbacks[number]();
	};

	my.show = function(content) {
		displayed = true;
		var div = d.createElement('div');
		div.id = 'notification';
		div.innerHTML = content;
		div.innerHTML += buttons;
		d.body.appendChild(div);
	};

	return my;
})(window);
