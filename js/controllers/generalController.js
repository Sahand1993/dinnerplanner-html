var GeneralController = function(){
	var views = [];
	var screens = {};

	var hideAll = function(){
		for(var i = 0; i<views.length; i++){
			views[i].hide();
		}
	}

	this.addView = function(view){
		views.push(view);
	}

	this.addScreen = function(name, views){
		screens[name] = views;
	}

	this.showScreen = function(name){
		hideAll();
		for(var index in screens[name]){
			screens[name][index].show();
		}
	}
}