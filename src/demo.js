(function(global, undefined) {

	var Person = function(name) {
		if (!(this instanceof Person)) {
			return new Person( name );
		}

		this.name = name;
	};

	Person.prototype.sayHello = function() {
		return "Hi, I'm " + this.name;
	};

	global.Person = Person;

})( this );