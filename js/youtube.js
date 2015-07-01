/**
 * Fluid Media
 *
 * Fluid multimedia with default embed codes makes it easy for content owners to copy-paste the embed code right out of YouTube or other sites without having to know HTML or make modifications to the code).
 *
 * Adapted from Chris Coyier’s Fluid Width Video script.
 * See: http://css-tricks.com/NetMag/FluidWidthVideo/demo.php
 */
function fluidMedia(media){
  media.each(function(){
	  //Get the width of the containing element
    $dataWidth = $(this).parent().width();
    $(this)
      //jQuery .data does not work on object/embed elements
      .attr('data-width', $dataWidth)  //Set the target width
      .attr('data-aspectRatio', this.height / this.width);  //Set the video's aspect ratio
    fluidMediaResize(media);
  });
};
function fluidMediaResize(media){
  media.each(function(){
    var $el = $(this);
    $el  //Set the height and width of the element
			.attr('data-width', $(this).parent().width())
			.width($el.attr('data-width'))
			.height($el.attr('data-width') * $el.attr('data-aspectRatio'));
  });
};

/**
 * Lazy Loading
 *
 * Don’t load embedded YouTube content until user clicks on it.
 */
$(".lazy-load").click(function(e){
	e.preventDefault();  //Disable the link
	var src = $(this).attr("href").split("="),  //Get the unique video ID from the URL
      width = $(this).width(),  //Get the dimensions of the current block for a seamless replacement
      height = $(this).height(),
      embededMedia = $("<iframe width='" + width + "' height='" + height + "' src='http://www.youtube-nocookie.com/embed/" + src[1] + "?autohide=1&autoplay=1&rel=0' frameborder='0' allowfullscreen></iframe>");
      //autohide hides the player controls, autoplay allows one-click video access, rel disables related content
	$(this).replaceWith(embededMedia);  //Replace the link with the video
  $allVideos = $("iframe[src*='http://player.vimeo'], iframe[src*='http://www.youtube'], object, embed");  //Get all videos again (with new video added in)
  fluidMedia(embededMedia);  //Make it fluid for responsiveness!
});

/**
 * Document Ready
 */
$(document).ready(function(){
  //Make all existing embeded content fluid for responsiveness
  window.$allVideos = $("iframe[src*='http://player.vimeo'], iframe[src*='http://www.youtube'], object, embed");  //Get all videos
  fluidMedia($allVideos);

  //Maintain aspect ratio during screen resizing
  $(window).resize(function(){
    fluidMediaResize($allVideos);
	});
});
