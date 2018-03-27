var SideBarView = function(container, model){
	var container = container;
	var model = model;

	var numberOfGuests = container.find("#numberOfGuests");
	var menu = container.find("#sidebar-dishes")[0];
	var totalPrice = container.find("#sidebar-total-price");

	numberOfGuests.val(model.getNumberOfGuests);

	this.show = function(){
		container[0].style.display = "block";
	}

	this.hide = function(){
		container[0].style.display = "none";
	}

	this.update = function(){
		//update number of guests
		numberOfGuests.val(model.getNumberOfGuests());

		//Empty sidebar menu
		menu.innerHTML = "";
		//fill with current menu
		dishes = model.getFullMenu();
		console.log("dishes in sidebarview: "+dishes);
		var totPrice = 0;
		dishes.forEach(function(dish){
			// calculate dish price
			var price = dish.pricePerServing*model.getNumberOfGuests();
			totPrice += price;
			//Create node hierarchy
			var wrapper = document.createElement("div");
			wrapper.classList.add("menuitemwrapper");
			var item = document.createElement("div");
			item.classList.add("menuitem");
			var name = document.createElement("span");
			name.classList.add("dishname");
			var dishName = dish.title;
			if (dishName.length>20){
				dishName = dishName.substring(0,20)+"...";
			}
			var nameText = document.createTextNode(dishName);
			var priceNode = document.createElement("span");
			priceNode.classList.add("dishprice");
			var priceText = document.createTextNode(price+"");
			
			name.appendChild(nameText);
			priceNode.appendChild(priceText);
			item.appendChild(name);
			item.appendChild(priceNode);
			wrapper.appendChild(item);

			menu.appendChild(wrapper);
		});

		//update total price
		totalPrice.text(totPrice.toFixed(2)+" SEK");
	}

	model.addObserver(this);
}

SideBarView.prototype.toString = function(){
	return "SideBarView object";
}