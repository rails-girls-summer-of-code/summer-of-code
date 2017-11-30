$('.sponsorsBox').magnificPopup({
	type: 'image',
	closeBtnInside: false,
	mainClass: 'mfp-with-zoom mfp-img-mobile',

	image: {
		verticalFit: true,
		titleSrc: function(item) {
    return item.el.attr('title');
		}
	},
	gallery: {
	  enabled: true,
	  navigateByImgClick: true,
	  preload: [0, 1]
	}, 
});

console.log("HERE");