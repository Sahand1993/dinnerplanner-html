var SummaryHeaderView = function(container, model){
    var container = container;
    var model = model;

    var numberOfGuests = container.find("#numberOfPeople");
    numberOfGuests.text("0");

    this.show = function(){
        container.show();
    };
    this.hide = function(){
        container.hide();
    };
    this.update = function(){
        numberOfGuests.text(model.getNumberOfGuests());
    };

    model.addObserver(this);
}