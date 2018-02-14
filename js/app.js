$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	// And create the instance of ExampleView
	var sidebar = $("#sidebar");
	if(sidebar[0] != undefined){
		var sidebarView = new SideBarView(sidebar, model); 
		var sidebarController = new SideController(sidebar, model);
	}

	var dishreel = $("#dishreel");
	if(dishreel[0] != undefined){
		var dishReelView = new DishReelView(dishreel, model);	
	}

	var dinneroverviewController = new DinnerOverviewView(model);

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});