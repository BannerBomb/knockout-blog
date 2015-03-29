var form = {
	firstName: ko.observable(''),
	lastName: ko.observable(''),
	email: ko.observable(''),
	subject: ko.observable(''),
	content: ko.observable(''),
	submit: function() {
		alert("You entered:"
			 + "\nFirstname: " + this.firstName()
			 + "\nLastname: " + this.lastName()
			 + "\nEmail: " + this.email()
			 + "\nSubject: " + this.subject()
			 + "\nContent:\n" + this.content());
	}
};

ko.applyBindings(form);