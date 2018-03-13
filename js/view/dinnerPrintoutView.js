var DinnerPrintoutView = function(container, model){
    var container = container;
    var model = model;

    this.show = function(){
        container.show();
    };
    this.hide = function(){
        container.hide();
    };
    this.update = function(){
        //remove previous print
        container[0].innerHTML = "";
        //print dishes
        var menu = model.getFullMenu();
        menu.forEach(function(dish){
            var row = document.createElement("div");
            row.classList.add("col-centered", "row", "dinnerprintout-row");
            
            var dishNode = document.createElement("div");
            dishNode.classList.add("col-lg-6", "col-md-6", "col-sm-6", "col-xs-12", "dinnerprintout-dish");
            
            var imgandtext = document.createElement("div");
            imgandtext.classList.add("col-lg-10", "col-md-12", "col-sm-12", "col-xs-7", "dinnerprintout-img-and-text");
            
            var imgWrapper = document.createElement("div");
            imgWrapper.classList.add("dinnerprintout-img");
            
            var img = document.createElement("img");
            img.src = "images/"+dish.image;
            
            var dishtext = document.createElement("div");
            dishtext.classList.add("dinnerprintout-dishtext");
            
            var header = document.createElement("h4");
            var headerText = document.createTextNode(dish.name);

            var description = document.createElement("p");
            var descriptionText = document.createTextNode(dish.type);

            var preparation = document.createElement("div");
            preparation.classList.add("col-lg-5", "col-md-5", "col-sm-4", "col-xs-12", "dinnerprintout-preparation");

            var wrapper = document.createElement("div");
            wrapper.classList.add("col-lg-12", "col-md-12", "col-sm-12", "col-xs-7", "dinnerprintout-preparation-wrapper");

            var prepHeader = document.createElement("h4");
            var prepHeaderText = document.createTextNode("Preparation");

            var prepPara = document.createElement("p");
            var prepParaText = document.createTextNode(dish.description);
            
            container[0].appendChild(row); 

            row.appendChild(dishNode);
            dishNode.appendChild(imgandtext);
            imgandtext.appendChild(imgWrapper);
            imgWrapper.appendChild(img);
            imgandtext.appendChild(dishtext);
            dishtext.appendChild(header);
            header.appendChild(headerText);
            dishtext.appendChild(description);
            description.appendChild(descriptionText);
            row.appendChild(preparation);
            preparation.appendChild(wrapper);
            wrapper.appendChild(prepHeader);
            prepHeader.appendChild(prepHeaderText);
            wrapper.appendChild(prepPara);
            prepPara.appendChild(prepParaText);
        });
    };
    model.addObserver(this);

}

DinnerPrintoutView.prototype.toString = function(){
    return "DinnerPrintoutView object";
}