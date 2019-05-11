$(function() {

	$.get("config/blogConfig.json", function(data) {

		$.each(data, function(index, item) {
			$(".list").append('<div class="item"> ' +
				'<h3><a  href="' + item.href + '"  target="_blank">' + item.title + '</a><small>&nbsp;更新时间:' + item.date + '</small></h3>' +
				'<p>' + item.desc + '</p>' +
				'</div>')
		});

	})

})