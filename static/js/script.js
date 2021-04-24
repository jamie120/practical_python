$(document).ready(function(){

   
   // Slide in home elements

    $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

    $(window).scroll(function(event) {
  
        $(".info").each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(
                    function() 
                    {
                        el.addClass("come-in"); 
                    }, 1000);
            }
        });


        $("#portfolio-item-2").each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(
                    function() 
                    {
                        el.addClass("come-up");
                    }, 900);
                
            } 
        });

        $("#portfolio-item-3").each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                 setTimeout(
                    function() 
                    {
                        el.addClass("come-in-right");
                    }, 1000);
            } 
        });

        $("#portfolio-item-1").each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                 setTimeout(
                    function() 
                    {
                        el.addClass("come-in-left");
                    }, 800);
            } 
        });

        $(".tech-element").each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(
                    function() 
                    {
                    el.addClass("fade-in");
                    }, 800);
            } 
        });

    });

});