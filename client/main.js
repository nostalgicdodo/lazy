
Router.route("/", {

	name: "home",
	template: "first",

	controller: PreloadController,
	preload: {
		styles: "first.css"
	}

});

Router.route("/second", {

	name: "second",
	template: "second",

	controller: PreloadController,
	preload: {
		styles: "second.css"
	}

});
