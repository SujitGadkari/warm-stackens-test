module( "Person" );

test( "Optional 'new'", function() {
	expect( 2 );

	ok( new Person() instanceof Person, "'new' creates an instance" );
	ok( Person() instanceof Person, "missing 'new' creates an instance" );
});

test( "sayHello()", function(assert) {
	expect( 2 );

	var person = new Person( "Keegan" );

	ok( typeof person.sayHello === "function", "'sayHello' method is present" );
	ok( typeof person.sayHello() === "string", "'sayHello' returns the correct type" );
})