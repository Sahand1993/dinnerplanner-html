var GeneralController = function(){
	var views = [];
	var screens = {};
	
	var currentDish = null; // dish currently shown in details
	var currentType = null; // dish type currently of dish currently shown in details
	
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
		var id = arguments[1];
		this.currentDish = id;
		var type = arguments[2];
		for(var index in screens[name]){
			screens[name][index].show();
		}
	}

	this.setCurrentDish = function(id){
		currentDish = id;
	}
	this.setCurrentType = function(type){
		currentType = type;
	}
	this.getCurrentDish = function(){
		return currentDish;
	}
	this.getCurrentType = function(){
		return currentType;
	}
}