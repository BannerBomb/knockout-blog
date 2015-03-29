var ViewModel = function() {
	this.showText = ko.observable(true);
	this.emailPlaceholder = ko.observable('example@contoso.com');
	this.url = ko.observable('http://sanderrossel.com');
	this.urlTitle = ko.observable("Sander's bits");
	this.urlTarget = ko.observable('__blank');
	this.temperature = ko.observable(15);
}

ko.applyBindings(new ViewModel());