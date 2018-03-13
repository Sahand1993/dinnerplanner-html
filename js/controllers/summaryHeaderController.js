var SummaryHeaderController = function(container, model, generalController){
    var container = container;
    var model = model;

    var backButton = container.find("#overview-backbutton");

    backButton.click(function(){
        generalController.showScreen("EDIT");
    });
}