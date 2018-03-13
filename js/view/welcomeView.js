var WelcomeView = function(container, model){
	var container = container;
	var model = model;

	container.load("welcome.html");

	this.show = function(){
		container.show();
	}

	this.hide = function(){
		container.hide();
	}
}

WelcomeView.prototype.toString = function(){
	return "WelcomeView object";
}