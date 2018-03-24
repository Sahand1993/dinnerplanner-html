$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	// We instantiate the general controller
	var generalController = new GeneralController();
	
 	var head = $("#header");
	var headView = new HeaderView(head, model);
	generalController.addView(headView);

	var sidebar = $("#sidebar");
	var sidebarView = new SideBarView(sidebar, model); 
	generalController.addView(sidebarView);
	var sidebarController = new SideController(sidebar, model, generalController);

	// the search bar and the results
	var dishSearcher = $("#dishSearcher");
	var dishreel = dishSearcher.find("#dishreel")[0];
	// PROBLEM: dishSearcherView doesn't load the html before dishSearcherController runs and therefore dishSearcherController.dishreel becomes undefined
	var dishSearcherView = new DishSearcherView(dishSearcher, model, generalController); 
	generalController.addView(dishSearcherView);
	var dishSearcherController = new DishSearcherController(dishSearcher, model, generalController, dishSearcherView);
 
	var dishDetails = $("#dishDetails");
	var dishDetailsView = new DishDetailsView(dishDetails, model);
	generalController.addView(dishDetailsView);
	var dishDetailsController = new DishDetailsController(dishDetails, model, generalController);

	var dinnerOverview = $("#dinnerOverview");
	var dinnerOverviewView = new DinnerOverviewView(dinnerOverview, model);
	generalController.addView(dinnerOverviewView);
	var dinnerOverviewController = new DinnerOverviewController(dinnerOverview, model, generalController);
	
	var welcome = $("#welcome");
	var welcomeView = new WelcomeView(welcome, model);
	generalController.addView(welcomeView);
	var welcomeController = new WelcomeController(welcome, model, generalController);
	//var dinneroverviewController = new DinnerOverviewView(model);

	var dinnerPrintout = $("#dinnerprintout");
	var dinnerPrintoutView = new DinnerPrintoutView(dinnerPrintout, model);
	generalController.addView(dinnerPrintoutView);
	var dinnerPrintoutController = new DinnerPrintoutController(dinnerPrintout, model);

	var summaryHeader = $("#summaryHeader");
	var summaryHeaderView = new SummaryHeaderView(summaryHeader, model);
	generalController.addView(summaryHeaderView);
	var summaryHeaderController = new SummaryHeaderController(summaryHeader, model, generalController);

	//Adding all screens
	generalController.addScreen("WELCOME", [headView, welcomeView]);
	generalController.addScreen("EDIT", [sidebarView, headView, dishSearcherView]);
	generalController.addScreen("DETAILS", [sidebarView, headView, dishDetailsView]);
	generalController.addScreen("OVERVIEW", [headView, dinnerOverviewView, summaryHeaderView]);
	generalController.addScreen("PRINT", [headView, dinnerPrintoutView, summaryHeaderView]);
	//Start off by showing welmcome screen
	//generalController.showScreen("WELCOME");
	generalController.showScreen("WELCOME");

});