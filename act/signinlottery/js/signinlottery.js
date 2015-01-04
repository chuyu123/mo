//响应函数
function response(){
    //首页lotteryArea弹性宽高
    (function(){
        var lotteryArea = document.getElementById("lottery-area");
        var lotteryBox = document.getElementById("lottery-box");
        if(!lotteryBox) return false;
        lotteryBox.style.height = lotteryArea.offsetHeight*1.103 + "px";
    })();
    //落地页pubilcity-banner弹性宽高
    (function(){
        var pubilcityBanner = document.getElementById("pubilcity-banner");
        if(!pubilcityBanner) return false;
        pubilcityBanner.style.height = pubilcityBanner.offsetWidth * 0.851 + "px";
    })();
    //signinlotterypublicity页用slide
    (function(){
        if(!document.getElementById("j-slide-ver2")) return false;
        if(document.body.clientWidth < 767){
            var slide = document.getElementById("j-slide-ver2"),
                swiperSlide = document.getElementsByClassName("swiper-slide"),
                slideHeight = slide.offsetWidth * 0.42;//640*270
            slide.style.height = slideHeight + "px";
            for(i = 0; i < swiperSlide.length; i++){
                swiperSlide[i].style.height = slideHeight + "px";
            };
        };
    })();
};
window.onload = window.onresize = response;
//click模拟函数
function clickDelay(el) {
    this.element = typeof el == 'object' ? el : document.getElementById(el);
    if (window.Touch)  this.element.addEventListener('touchstart', this, false);
}
clickDelay.prototype = {
    handleEvent: function (e) {
        switch (e.type) {
            case 'touchstart':
                this.onTouchStart(e);
                break;
            case 'touchmove':
                this.onTouchMove(e);
                break;
            case 'touchend':
                this.onTouchEnd(e);
                break;
        }
    },
    onTouchStart: function (e) {
        e.preventDefault();
        this.moved = false;
        this.theTarget = document.elementFromPoint(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
        if (this.theTarget.nodeType == 3) this.theTarget = theTarget.parentNode;
        this.theTarget.className += ' pressed';
        this.element.addEventListener('touchmove', this, false);
        this.element.addEventListener('touchend', this, false);
    },
    onTouchMove: function (e) {
        this.moved = true;
        this.theTarget.className = this.theTarget.className.replace(/ ?pressed/gi, '');
    },
    onTouchEnd: function (e) {
        this.element.removeEventListener('touchmove', this, false);
        this.element.removeEventListener('touchend', this, false);
        if (!this.moved && this.theTarget) {
            this.theTarget.className = this.theTarget.className.replace(/ ?pressed/gi, '');
            var theEvent = document.createEvent('MouseEvents');
            theEvent.initEvent('click', true, true);
            this.theTarget.dispatchEvent(theEvent);
        }
        this.theTarget = undefined;
    }
};
//签到按钮
(function(){
    var qdBtn = document.getElementById("qd_btn");
    if(!qdBtn) return false;
    new clickDelay(qdBtn);
    qdBtn.addEventListener("click", function(){
        popupQd();
    }, false);
})();
//签到函数
function popupQd() {
    var popup = document.getElementById("popup-qd"),
        inside = popup.getElementsByClassName("inside")[0],
        box = popup.getElementsByClassName("box")[0],
        close = popup.getElementsByClassName("close")[0];
    popup.style.display = "block";
    popup.style.height = document.body.clientHeight + "px";
    inside.style.top = ( document.documentElement.clientHeight - inside.offsetHeight ) / 2 + "px";
    box.style.MozTransform = "scale(1)";
    box.style.WebkitTransform = "scale(1)";
    box.style.transform = "scale(1)";
    show_num($("#cute").text());
    new clickDelay(close);
    close.addEventListener("click", function () {
        box.style.MozTransform = "scale(0)";
        box.style.WebkitTransform = "scale(0)";
        box.style.transform = "scale(0)";
        var clo = setTimeout(function () {
            popup.style.display = "none"
        }, 400);
    }, false);
};
//前往报名车型按钮
(function(){
    var bmBtn = document.getElementById("bm_btn");
    if(!bmBtn) return false;
    new clickDelay(bmBtn);
    bmBtn.addEventListener("click", function(){
        popupBm();
    }, false);
})();
//前往报名车型函数
function popupBm() {
    var popup = document.getElementById("popup-bm"),
        inside = popup.getElementsByClassName("inside")[0],
        box = popup.getElementsByClassName("box")[0],
        close = popup.getElementsByClassName("close")[0];
    popup.style.display = "block";
    popup.style.height = document.body.clientHeight + "px";
    inside.style.top = ( document.documentElement.clientHeight - inside.offsetHeight ) / 2 + "px";
    box.style.MozTransform = "scale(1)";
    box.style.WebkitTransform = "scale(1)";
    box.style.transform = "scale(1)";
    show_num($("#cute").text());
    new clickDelay(close);
    close.addEventListener("click", function () {
        box.style.MozTransform = "scale(0)";
        box.style.WebkitTransform = "scale(0)";
        box.style.transform = "scale(0)";
        var clo = setTimeout(function () {
            popup.style.display = "none"
        }, 400);
    }, false);
};
//填写信息按钮
(function(){
    var xxBtn = document.getElementsByClassName("xx-btn");
    if(!xxBtn) return false;
    for(i = 0; i < xxBtn.length; i++){
        new clickDelay(xxBtn[i]);
        xxBtn[i].addEventListener("click", function(){
            popupXx();
            var newHref = this.getAttribute("data-href"); //这个带入的href真实字符串
        }, false);
    }
})();
//填写信息函数
function popupXx() {
    var popup = document.getElementById("popup-xx"),
        inside = popup.getElementsByClassName("inside")[0],
        box = popup.getElementsByClassName("box")[0],
        close = popup.getElementsByClassName("close")[0];
    popup.style.display = "block";
    popup.style.height = document.body.clientHeight + "px";
    inside.style.top = ( document.documentElement.clientHeight - inside.offsetHeight ) / 2 + "px";
    box.style.MozTransform = "scale(1)";
    box.style.WebkitTransform = "scale(1)";
    box.style.transform = "scale(1)";
    new clickDelay(close);
    close.addEventListener("click", function () {
        box.style.MozTransform = "scale(0)";
        box.style.WebkitTransform = "scale(0)";
        box.style.transform = "scale(0)";
        var clo = setTimeout(function () {
            popup.style.display = "none"
        }, 400);
    }, false);
};
//animateValueBackground效果
function show_num(n){
    var it = $("#jj-card i");
    var len = String(n).length;
    for(var i = 0; i < len; i++){
        if(it.length <= i){
            $("#jj-card").append("<i></i>");
        }
        var num=String(n).charAt(i);
//             var y = -parseInt(num)*30;
        var y = -(360 - parseInt(num)*36);
        var obj = $("#jj-card i").eq(i);
        obj.each(function(){
            $(this).animate({
                    backgroundPosition :'(0 '+String(y)+'px)'
                }, 2000 - i * 300,'swing',function(){}
            );
        });
    }
    setTimeout("$('#jj-info').fadeIn('slow',function(){})",2200);
};
