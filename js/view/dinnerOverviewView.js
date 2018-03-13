var DinnerOverviewView = function(container, model){
    var container = container;
    var model = model;
    var people = container.find("#numberOfPeople");
    var dishes = container.find("#dinneroverview-dishes")[0];

    people.text("0");

    this.hide = function(){
        container[0].style.display = "none";
    };
    this.show = function(){
        container[0].style.display = "block";
    };
    this.update = function(){
        //update number of guests
        people.text(model.getNumberOfGuests());

        //update dishes shown
        //remove old dishes
        dishes.innerHTML = "";
        var dishTypes = model.getDishTypes();
        dishTypes.forEach(function(type){
            var dish = model.getSelectedDish(type)[0];
            if(dish == undefined){
                return;
            }
            var price = model.calcPrice(dish)*model.getNumberOfGuests();

            var img = document.createElement("img");
            img.src = "images/"+dish.image;
            var p = document.createElement("p");
            var text = document.createTextNode(dish.name);
            var frame = document.createElement("div");
            frame.classList.add("imgframe");
            var priceTag = document.createElement("span");
            priceTag.classList.add("pricetag");
            var priceText = document.createTextNode(price+" SEK");
            var floatdiv = document.createElement("div");
            floatdiv.classList.add("floatdiv");
            var dishElement = document.createElement("div");
            dishElement.classList.add("dinneroverview-dish");

            p.appendChild(text);
            priceTag.appendChild(priceText);
            frame.appendChild(img);
            frame.appendChild(p);
            floatdiv.appendChild(frame);
            floatdiv.appendChild(priceTag);
            dishElement.appendChild(floatdiv);

            dishes.appendChild(dishElement);
        });
        var menutotal = document.createElement("div");
        menutotal.classList.add("menutotal");
        var wrapper = document.createElement("floatdiv");
        wrapper.classList.add("floatdiv");
        var totalLabel = document.createElement("span");
        totalLabel.classList.add("total-label");
        var labelText = document.createTextNode("Total:");
        var dinnerTotal = document.createElement("span");
        dinnerTotal.classList.add("dinnertotal");
        var totalText = document.createTextNode(model.getTotalMenuPrice()+"");

        totalLabel.appendChild(labelText);
        dinnerTotal.appendChild(totalText);
        wrapper.appendChild(totalLabel);
        wrapper.appendChild(dinnerTotal);
        menutotal.appendChild(wrapper);

        dishes.appendChild(menutotal);
    };
    model.addObserver(this);
}

DinnerOverviewView.prototype.toString = function(){
    return "DinnerOverviewView object";
}