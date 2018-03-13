var DinnerPrintoutController = function(container, model){
	var noofpeople = container.find("#noofpeople");

	noofpeople.text(model.getNumberOfGuests());

}