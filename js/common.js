//
$(function(){
    var moreBox=$(".product-info");
    moreBox.click(function(){
        if($(this).hasClass("cur")){
          moreBox.removeClass("cur"); 
          }else{
               moreBox.removeClass("cur"); 
               $(this).addClass("cur");
              }
       });
})
$(function(){
   var mySwiper = new Swiper('#jp-nav-bd',{
        pagination: '#pagination-jp-nav',
        paginationClickable: true,
        slidesPerView: 'auto'
    });
})
$(function(){
    var container = $("#Gallery");
    var headers=container.find("h3");
    var zIndex = 2;
    var containerTop = container.offset().top + parseInt(container.css('marginTop')) + parseInt(container.css('borderTopWidth'));
    var fakeHeader = headers.filter(':first').clone();
    // 2. fixed position on the h3, and fix the z-index so they increase
    headers.each(function () {
       // set position fixed, etc
       var header = $(this), height = header.outerHeight(), width = header.outerWidth();
       zIndex += 2;  
    });
    // 3. bind a scroll event and change the text of the take heading
    $(window).scroll(function () {
        headers.each(function () {
            var header = $(this);
            var top = header.offset().top;
           
            if ($(window).scrollTop() > top) {
                fakeHeader.text(header.text());
                fakeHeader.css('zIndex', parseInt(header.css('zIndex'))+1);
            }

        });
    });
    // 4. initialisation
    container.wrap('<div class="box" />');
    fakeHeader.css({ 
        zIndex: 1, 
        position: 'fixed', 
        top:"0",
        marginTop:"0",
        width: headers.filter(':first').width() 
    });
    container.before(fakeHeader.text(headers.filter(':first').text()));

})

    (function(window, $, PhotoSwipe){
            
    $(document).ready(function(){
        
        var options = {
            getToolbar: function(){
                    var _html=
                            '<div class="ps-toolbar-previous"><span><</span></div>'+
                             '<div class="ps-toolbar-close" ><span>×</span></div>'+
                            '<div class="ps-toolbar-next"><span>></span></div>';
                    return _html;
                    // NB. Calling PhotoSwipe.Toolbar.getToolbar() wil return the default toolbar HTML
                },
                captionAndToolbarFlipPosition:true,
                // preventHide: true,
                 captionAndToolbarAutoHideDelay:0
        };
        $(".gallery a").photoSwipe(options);
    
    });
    
    
}(window, window.jQuery, window.Code.PhotoSwipe));
