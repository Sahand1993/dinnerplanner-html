var DishDetailsView = function(container, model, generalController){
    this.hide = function(){
        container.hide();
    };
    this.show = function(){
        this.update();
        container.show();
    };
    this.update = function(){

        var ingredients = container.find("#ingredients");
        var noOfPeople = model.getNumberOfGuests();
        var totPrice = 0;
        var h4 = ingredients.find("h4")[0];
        h4.innerHTML = "Ingredients for "+noOfPeople+" people";
        // Clear ingredients list
        var ul = ingredients.find("ul")[0];
        ul.innerHTML = "";
        // Clear other elements
        var dishtext = container.find("#dishtext");
        var header = container.find("#dishtitle");
        var dishimg = container.find("#dishimg");
        var instructions = container.find(".instructions").find("p");
        dishtext[0].innerHTML = ""; 
        header[0].innerHTML = ""; 
        dishimg[0].src = "";
        instructions[0].innerHTML = ""; 

        var waitElem = document.createElement("div");
        var waitText = document.createTextNode("Please wait...");
        waitElem.appendChild(waitText);
        
        instructions[0].appendChild(waitElem);

        var dish;
        model.getDish(generalController.getCurrentDish(), function(data){
            dishtext.innerHTML = ""; 
            header.innerHTML = ""; 
            dishimg[0].src = "";
            instructions.innerHTML = ""; 
            dish = data;
            var price = dish.pricePerServing*noOfPeople; //price is not provided in the API
            dish.extendedIngredients.forEach(function(ingredient){
                var li = document.createElement("li");
                var name = ingredient.name;
                var quantity = ingredient.amount*noOfPeople;
                var unit = ingredient.unit;
    
                var row = document.createElement("div");
                row.classList.add("row");
                var quantityElem = document.createElement("div");
                quantityElem.classList.add("col-lg-2", "col-md-2", "col-sm-2", "col-xs-2");
                var quantityText = document.createTextNode(quantity+" "+unit);
                quantityElem.appendChild(quantityText);
                var nameElem = document.createElement("div"); // TODO: Continue here.
                nameElem.classList.add("col-lg-6", "col-md-6", "col-sm-6", "col-xs-6");
                var nameText = document.createTextNode(name);
                nameElem.appendChild(nameText);
                var priceElem = document.createElement("div");
                priceElem.classList.add("col-lg-3", "col-md-3", "col-sm-3", "col-xs-3");
    
                li.appendChild(row);
                row.appendChild(quantityElem);
                row.appendChild(nameElem);
                row.appendChild(priceElem);
    
                ul.appendChild(li);
            });
            var total = document.createElement("li");
            total.classList.add("total");
            var row = document.createElement("div");
            row.classList.add("row");
            var quantityElem = document.createElement("div");
            quantityElem.classList.add("col-lg-1", "col-md-1", "col-sm-1", "col-xs-1");
            var nameElem = document.createElement("div"); // TODO: Continue here.
            nameElem.classList.add("col-lg-7", "col-md-7", "col-sm-7", "col-xs-7");
            var priceElem = document.createElement("div");
            priceElem.classList.add("col-lg-3", "col-md-3", "col-sm-3", "col-xs-3");
            var priceText = document.createTextNode(price+" SEK");
            priceElem.appendChild(priceText);
    
            row.appendChild(quantityElem);
            row.appendChild(nameElem);
            row.appendChild(priceElem);
            total.appendChild(row);
            ul.appendChild(total);
    
            // Update image text
            dishtext.text(dish.winePairing.pairingText); // Just to have something there
    
            // Update title
            console.log("dish name: "+dish.title);
            header.text(dish.title);
    
            // Update image
            dishimg[0].src = dish.image;

            // Update instructions
            instructions.text(dish.instructions);

        });

        
    }
    model.addObserver(this);

}