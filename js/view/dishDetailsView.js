var DishDetailsView = function(container, model){
    var loadedDishId;

    this.hide = function(){
        container.hide();
    };
    this.show = function(id){
        loadedDishId = id;
        this.update();
        container.show();
    };
    this.update = function(){
        var dish = model.getDish(loadedDishId);
        var ingredients = container.find("#ingredients");
        var noOfPeople = model.getNumberOfGuests();
        var totPrice = 0;
        var h4 = ingredients.find("h4")[0];
        h4.innerHTML = "Ingredients for "+noOfPeople+" people";

        // Update ingredients list
        var ul = ingredients.find("ul")[0];
        ul.innerHTML = "";
        dish.ingredients.forEach(function(ingredient){
            var li = document.createElement("li");
            var name = ingredient.name;
            var quantity = ingredient.quantity*noOfPeople;
            var unit = ingredient.unit;
            var price = ingredient.price*noOfPeople;
            totPrice += price;

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
            var priceText = document.createTextNode(price+" USD");
            priceElem.appendChild(priceText);

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
        var priceText = document.createTextNode(totPrice+" USD");
        priceElem.appendChild(priceText);

        row.appendChild(quantityElem);
        row.appendChild(nameElem);
        row.appendChild(priceElem);
        total.appendChild(row);
        ul.appendChild(total);

        // Update image text

        var dishtext = container.find("#dishtext");
        dishtext.text(dish.type);

        // Update title

        var header = container.find("#dishtitle");
        header.text(dish.name);

        // Update image

        var dishimg = container.find("#dishimg")[0];
        dishimg.src = "images/"+dish.image;

        // Update instructions

        var instructions = container.find(".instructions").find("p");
        instructions.text(dish.description);
    }
    model.addObserver(this);

}