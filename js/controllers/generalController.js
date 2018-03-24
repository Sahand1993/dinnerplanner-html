var GeneralController = function(){
	var views = [];
	var screens = {};
	
	this.currentDish = null; // dish currently shown in details

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
		console.log("arguments[1] in generalController: "+arguments[1]);
		var id = arguments[1];
		this.currentDish = id;
		for(var index in screens[name]){
			screens[name][index].show(id);
		}
	}
}