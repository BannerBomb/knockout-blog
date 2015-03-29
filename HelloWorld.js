$(function () {
	// Doing our own 'binding' using jQuery.
	$('#firstName').change(function () {
		// Doing some DOM stuff to get the values...
		var fullName = $(this).val() + ' ' + $('#lastName').val();
		$('#fullName').text(fullName);
	})
	// Manually setting the initial value.
	.val('Sander');
	
	$('#lastName').change(function () {
		// Doing some DOM stuff to get the values...
		var fullName = $('#firstName').val() + ' ' + $(this).val();
		$('#fullName').text(fullName);
	})
	// Manually setting the initial value.
	.val('Rossel')
	// Trigger the change event to update the fullname.
	.change();
	
	
	// Knockout binding!
	var person = {
		firstName: ko.observable(''),
		lastName: ko.observable('')
	};
	
	// Set the values, notice that they're functions!
	person.firstName('Sander');
	person.lastName('Rossel');
	// Compute full name.
	person.fullName = ko.pureComputed(function() {
		return this.firstName() + " " + this.lastName();
	}, person);
	
	// An alternative to the code above.
	/*
	var Person = function(firstName, lastName) {
		this.firstName = ko.observable(firstName);
		this.lastName = ko.observable(lastName);
		this.fullName = ko.pureComputed(function() {
			return this.firstName() + ' ' + this.lastName();
		}, this);
	}
	var person = new Person('Sander', 'Rossel');
	*/
	
	ko.applyBindings(person); // This makes Knockout get to work
});