var Album = function(artist, name, genre) {
	this.artist = ko.observable(artist);
	this.name = ko.observable(name);
	this.genre = ko.observable(genre);
}

var ViewModel = function() {
	var self = this;
	
	self.albums = ko.observableArray([
		new Album('The Beatles', "Sgt. Pepper's Lonely Hearts Club Band", 'Rock'),
		new Album('Led Zeppelin', 'Led Zeppelin III', 'Rock'),
		new Album('The Prodigy', 'The Fat Of The Land', 'Dance')
	]);
	
	self.add = function() {
		self.albums.push(new Album());
	};
	
	self.remove = function() {
		self.albums.remove(this);
	};
};

ko.applyBindings(new ViewModel());