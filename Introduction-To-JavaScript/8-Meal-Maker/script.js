const menu = { //Menu object.
	_courses: { //Property to store the 3 course properties.
		appetizers: [],
		mains: [],
		desserts: [],
	},

  //Getter methods that return the menu._courses.appetizers.
	get appetizers() {
		return this._courses.appetizers;
	},
  get mains() {
		return this._courses.mains;
	},
  get desserts() {
		return this._courses.desserts;
	},
  
  //Setter methods that store in menu._courses.appetizers the appetizer.
	set appetizers(appetizers) {
		this._courses.appetizers = appetizers;
	},
	set mains(mains) {
		this._courses.mains = mains;
	},
	set desserts(desserts) {
		this._courses.desserts = desserts;
	},
  
  //Getter method that returns an object with appetizers, mains, and desserts.
  get courses() {
		return {
				appetizers: this.appetizers,
				mains: this.mains,
				desserts: this.desserts
			};
	},

  //Pushes current dish into the menu._courses[appetizers] array.
	addDishToCourse(courseName, dishName, dishPrice) {
		let dish = {
      name: dishName,
			price: dishPrice
		};
    
    return this._courses[courseName].push(dish);
	},

	getRandomDishFromCourse(courseName) { //Returns a random dish from the course.
		const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
		return dishes[randomIndex];
	},

	generateRandomMeal() { //Gets a random dish from appetizers, mains, and desserts. Calculates the price. Returns the order as a string.
		const appetizers = this.getRandomDishFromCourse('appetizers');
		const mains = this.getRandomDishFromCourse('mains');
		const desserts = this.getRandomDishFromCourse('desserts');
		const totalPrice = Math.floor(appetizers.price + mains.price + desserts.price, 2);
    
    let meal = `You ordered ${appetizers.name}, ${mains.name}, and ${desserts.name}\n`;
  	meal += `These items cost $${appetizers.price}, $${mains.price}, and $${desserts.price}\n`;
		meal += `Total: $${totalPrice}`;
    return meal;
	}
}


//Adds items to the menu.
menu.addDishToCourse('appetizers', 'Onion Rings', 9.65);
menu.addDishToCourse('mains', 'Cheeseburger', 6.49);
menu.addDishToCourse('desserts', 'Milkshake', 6.80);

menu.addDishToCourse('appetizers', 'French Fries', 8.15);
menu.addDishToCourse('mains', 'Vegan Burger', 7.50);
menu.addDishToCourse('desserts', 'Blueberry Pie', 5.25);

menu.addDishToCourse('appetizers', 'Chicken Fingers', 7.25);
menu.addDishToCourse('mains', 'Chicken Burger', 6.49);
menu.addDishToCourse('desserts', 'Ice Cream Cone', 4.76);

// console.log(menu._courses); //A complete list of items in the menu.

const meal = menu.generateRandomMeal(); //Chooses a meal with random appetizer, main, and dessert.
console.log(meal); //Logs string to console.
