var Dog = function(args={}){
	this.name = args.name || "Doggo";
	this.age = args.age || 0;
};

Dog.prototype.greeting = function(){
	return "Hi, my name is " + this.name + ". I am " + this.age + " years old";
}


var dog = new Dog();
console.log(dog.greeting());

// Not as many built in methods
// No implicit return
// Ends with a semicolon when finishing a statement
// You have to actually call a function