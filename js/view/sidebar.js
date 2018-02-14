var SideBarView = function(container, model){
	var numberOfGuests = container.find("#numberOfGuests");

	var plusButton = container.find("#plusGuest");
	var minusButton = container.find("#minusGuest");

	numberOfGuests.text(model.numberOfGuests);
}