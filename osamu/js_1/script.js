function load_video(){

	$.ajax({
		url: 'http://217.71.129.139:4733/osamu/get_videos.php ',
		method: 'get',
		dataType: 'json',
		success: function(data){
	
			data['videos'].forEach(function(video){
				
				let div = $('<div>')
				div.append('<img src="'+video['logo']+'" >')
				div.append('<h3 align="center">'+video['title']+'</h3>')
				div.append('<h4 align="justify">'+video['description']+'</h4>')		
				$('#videos').append(div)
			})
		},
	});
}