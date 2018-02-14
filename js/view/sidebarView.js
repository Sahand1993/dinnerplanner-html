var SideBarView = function(container, model){
	var numberOfGuests = container.find("#numberOfGuests");

	numberOfGuests.val(model.getNumberOfGuests);

	this.update = function(){
		numberOfGuests.val(model.getNumberOfGuests());
	}
}