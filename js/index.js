$(function() {

	$.get("config/blogConfig.json", function(data) {

		$.each(data, function(index, item) {
			console.log(item)
		});

	})

})