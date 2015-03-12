var main = function()
{
	"use strict";
	
	var url = "http://api.flickr.com/services/feeds/photos_public.gne?" +
              "tags=dogs&format=json&jsoncallback=?";
	var url2 = "https://api.github.com/search/repositories?q=tetris"+
				"language:assembly&sort=stars&order=desc";
	$.getJSON(url2,function(flickrResponse){
		
		flickrResponse.items.forEach(function(photo){
			
			console.log(flickrResponse);
			//var $linkss = $("<a>");
			//$linkss.attr("href", photo.media.m);
			//var linkText = document.createTextNode(photo.media.m);
			//$linkss.append(linkText);
			var $text = "<li><a href=\""+photo.svn_url +" \">"+photo.svn_url+"</a></li>";
			console.log($text);
			//$("main .photos").append("<p>",$linkss);
			$("main .photos").append($text);
			//var $img = $("<img>").hide();
			//$img.attr("src", photo.media.m);
			//$("main .photos").append($img);	
			//$img.fadeIn();
			
		});
	});
}

$(document).ready(main);