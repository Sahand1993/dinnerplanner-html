var DinnerOverviewController = function(container, model, generalController){
    var container = container;
    var model = model;
    var people = container.find("#numberOfPeople");
    var backButton = container.find("#overview-backbutton");
    var printButton = container.find("#overview-printbutton");

    backButton.click(function(){
        generalController.showScreen("DISHSEARCH");
    });
    printButton.click(function(){
        generalController.showScreen("PRINT");
    });

}