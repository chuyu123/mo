//功能函数
//冒泡排序
function bubbleSort(arr){
    var i=arr.length, j;
    var tempExchangVal;
    while(i>0){
        for(j=0;j<i-1;j++){
            if(arr[j]>arr[j+1]){
                tempExchangVal = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=tempExchangVal;
            }
        }
        i--;
    }
    return arr;
};
//金额取整
function roundNum(num){
    var len = String(num).length;
    var arr = [];
    for(i = 0; i < len; i++){
        var n = String(num).charAt(i);
        arr[i] = n;
        if(i == len-1){
            arr[i] = "0";
        }else if(i == len-2){
            arr[i] = "0";
        }else if(i == len-3){
            arr[i] = "0";
        };
    };
    rnum = arr.join("");
};
//初始css相关
$(function(){
    //4等分元素屏幕宽度
    $(".calc-blk").css("width",$(document).width());
    $(".j-sh-switch").click(function(){
        $(this).next().toggle();
        if($(this).hasClass("j-sh-switch-cur")){
            $(this).removeClass("j-sh-switch-cur");
        }else{
            $(this).addClass("j-sh-switch-cur");
        };
    });
});
//四屏高度取最高值
function bigHei(){
    var arrHei = [];
    $(".calc-blk").each(function(){
        arrHei.push($(this).height())
    });
    bubbleSort(arrHei);
    //absolute块赋予高度
    $(".calc-blks").css("height",arrHei[3]);
};
bigHei();
//找到nav数组赋予点击功能
$("#j-calc-nav-ul").find("li").each(function(i){
    $(this).click(function(){
        if(i == 0){
            to1(i);
        }else if(i == 1){
            to2(i);
        }else if(i == 2){
            to3(i);
        }else if(i == 3){
            to4(i);
        };
        $("body,html").animate({scrollTop:0},500);
        calc_get_height($('.calc-blk').eq(i));
    });
});

//点击底部按钮祖列
$(".stage-btn").each(function(i){
   $(this).click(function(){
       $("body,html").animate({scrollTop:0},500);
       calc_get_height($('.calc-blk').eq(i+1));
       if(i == 0){
           setTimeout(function(){to2(i + 1)},600);
       }else if(i == 1){
           setTimeout(function(){to3(i + 1)},600);
       }else if(i == 2){
           setTimeout(function(){to4(i + 1)},600);
       };
       return false;
   });
});

//==========================================功能函数，华丽丽的分割线 ヽ(●´∀`●)ﾉ==========================================
//过渡到当前的动画
function to1(i){
    $("#calc-blk-inside").children().removeClass("calc-area");
    $("#calc-blk-inside").children().eq(0).addClass("calc-area");
    $("#j-calc-nav-ul").find("li").removeClass();
    $("#j-calc-nav-ul").find("li").eq(i).addClass("cur");
};
function to2(i){
    $("#calc-blk-inside").children().removeClass("calc-area");
    $("#calc-blk-inside").children().eq(1).addClass("calc-area");
    $("#j-calc-nav-ul").find("li").removeClass();
    $("#j-calc-nav-ul").find("li").eq(i-1).addClass("cur-before");
    $("#j-calc-nav-ul").find("li").eq(i).addClass("cur");
};
function to3(i){
    $("#calc-blk-inside").children().removeClass("calc-area");
    $("#calc-blk-inside").children().eq(2).addClass("calc-area");
    calc_autosize();
    $("#j-calc-nav-ul").find("li").removeClass();
    $("#j-calc-nav-ul").find("li").eq(i-1).addClass("cur-before");
    $("#j-calc-nav-ul").find("li").eq(i).addClass("cur");
};
function to4(i){
    $("#calc-blk-inside").children().removeClass("calc-area");
    $("#calc-blk-inside").children().eq(3).addClass("calc-area");
    $("#j-calc-nav-ul").find("li").removeClass();
    $("#j-calc-nav-ul").find("li").eq(i-1).addClass("cur-before");
    $("#j-calc-nav-ul").find("li").eq(i).addClass("cur");
};

//==========================================页面select表单选择逻辑，华丽丽的分割线 ヽ(●´∀`●)ﾉ==========================================
$.extend({
    bankSelect: function (oBank, oMonth, oWay) {
        oBank.change(function () {
            var val = $(this).val();
            oMonth.children().remove();
            oWay.children().remove();
            if (val == "xy") {
                oMonth.append("<option value='0.0588' data-cycle='12'>(12期)</option><option value='0.1032' data-cycle='24'>(24期)</option><option value='0.144' data-cycle='36' selected='selected'>(36期)</option>");
                oWay.append("<option value='ftsq'>分摊收取</option>");
            }else if(val == "zx"){
                oMonth.append("<option value='0.0896' data-cycle='12'>(12期)</option><option value='0.0896' data-cycle='24'>(24期)</option><option value='0.0896' data-cycle='36' selected='selected'>(36期)</option>");
                oWay.append("<option value='ftsq'>分摊收取</option>");
            }else if(val == "js"){
             oMonth.append("<option value='0' data-cycle='12'>(12期)</option><option value='0.072' data-cycle='24'>(24期)</option><option value='0.108' data-cycle='36' selected='selected'>(36期)</option>");
             oWay.append("<option value='ycxsq'>一次性收取</option>");
             }else if(val == "gs"){
             oMonth.append("<option value='0.0358' data-cycle='12'>(12期)</option><option value='0.0705' data-cycle='24'>(24期)</option><option value='0.1043' data-cycle='36' selected='selected'>(36期)</option>");
             oWay.append("<option value='ycxsq'>一次性收取</option>");
             }else if(val == "zg"){
            oMonth.append("<option value='0.035' data-cycle='12'>(12期)</option><option value='0.075' data-cycle='24'>(24期)</option><option value='0.11' data-cycle='36' selected='selected'>(36期)</option>");
             oWay.append("<option value='ycxsq'>一次性收取</option><option value='ftsq'>分摊收取</option>");
             }else if(val == "pa"){
             oMonth.append("<option value='0.06' data-cycle='12'>(12期)</option><option value='0.12' data-cycle='24'>(24期)</option><option value='0.18' data-cycle='36' selected='selected'>(36期)</option>");
             oWay.append("<option value='ftsq'>分摊收取</option>");
             };
        });
        oWay.change(function () {
            var val = $(this).val();
            if (val == "ycxsq") {
                oMonth.children().remove();
                oMonth.append("<option value='0.035' data-cycle='12'>(12期)</option><option value='0.075' data-cycle='24'>(24期)</option><option value='0.11' data-cycle='36' selected='selected'>(36期)</option>");
            }else if(val == "ftsq"){
                oMonth.children().remove();
                oMonth.append("<option value='0.04' data-cycle='12'>(12期)</option><option value='0.08' data-cycle='24'>(24期)</option><option value='0.115' data-cycle='36' selected='selected'>(36期)</option>");
            }
        });
    }
});
$(function() {
    $.bankSelect($("#xzyh"),$("#yg"),$("#lxzffs"));
});

//全款车是否自动上牌开关
function qkZdsp(){
    if($("#zdsp").val() == "yes"){
        $("#gzs2").text("0");
        $("#spfw2").val("0");
    }else{
        //全款
        //购置税
        $("#gzs2").text(($("#csj").attr("data-zvalue") / (1 + 0.17) * 0.1).toFixed(0));
//        $("#spfw2").val("1000");
    };
    var sfValue2 = $("#csj2").val();
    //必要花费
    var byhfValue2 = parseFloat($("#gzs2").text()) + parseFloat($("#spfw2").val());
    $("#settle-byhf2").text(byhfValue2);
    var csjVal = $("#csj").val();
    //指导价
    var zdjVal = $("#csj").attr("data-zvalue");
    //首付款 + 贷款金额
    var sfkVal = $("#sfk").val();
    var sfValue = (csjVal * sfkVal).toFixed(0);
    var dkjeVal = csjVal - sfValue;
    roundNum(dkjeVal);
    $("#sfk-val").text(csjVal - rnum);
    $("#dkje-val").text(rnum);
    var sfkValue=csjVal - rnum;
    var byhfValue = parseFloat($("#gzs").text()) + parseFloat($("#jrfwf").text()) + parseFloat($("#spfw").val());
    $("#settle-byhf").text(byhfValue);
    var firstValue = parseFloat(sfkValue) + parseFloat(byhfValue);
    var firstValue2 = parseFloat(sfValue2) + parseFloat(byhfValue2);
    var firstValue3 = firstValue2 - firstValue;
    $("#stage1-all-val-q").text(firstValue2);
    $("#stage1-all-val-d").text(firstValue);
    $("#stage1-all-val-c").text(firstValue3);
    $("#j-calc-nav-val1").text($("#stage1-all-val-q").text());
};

//保险购买年数
function bxns(){
    if($("#bxgmns").find("option:selected").val() == 0){
        var bxgmnsValue = (parseFloat($("#settle2-byhf").text()) + (parseFloat($("#settle2-byhf2").text()) + parseFloat($("#settle2-byhf3").text())) * 0.95).toFixed(0);
    }else if($("#bxgmns").find("option:selected").val() == 1){
        var bxgmnsValue = (parseFloat($("#settle2-byhf").text()) + (parseFloat($("#settle2-byhf2").text()) + parseFloat($("#settle2-byhf3").text())) * 0.95 + (parseFloat($("#settle2-byhf2").text()) + parseFloat($("#settle2-byhf3").text())) * 0.855).toFixed(0);
    }else if($("#bxgmns").find("option:selected").val() == 2){
        var bxgmnsValue = (parseFloat($("#settle2-byhf").text()) + (parseFloat($("#settle2-byhf2").text()) + parseFloat($("#settle2-byhf3").text())) * 0.95 + (parseFloat($("#settle2-byhf2").text()) + parseFloat($("#settle2-byhf3").text())) * 0.855 + (parseFloat($("#settle2-byhf2").text()) + parseFloat($("#settle2-byhf3").text())) * 0.855).toFixed(0);
    };
    //stage2保险合计
    $("#stage2-all-val").text(bxgmnsValue);
    $("#j-calc-nav-val2").text(bxgmnsValue);
    $("#s4-bxje").text($("#j-calc-nav-val2").text());
    $("#s4-all").text(parseFloat($("#s4-csj").text()) + parseFloat($("#s4-gzs").text()) + parseFloat($("#s4-jrfwf").text()) + parseFloat($("#s4-spfwf").text()) + parseFloat($("#s4-bxje").text()));
    $("#j-calc-nav-val4").text($("#s4-all").text());
    $("#stage5-bxnx").find("li").eq(0).remove();
    $("#stage5-bxnx").append("<li><span class='val'><b>" + $('#bxgmns').find('option:selected').text() + "</b></span><span class='tit'>已选年数</span></li>");
};

//仅运行一次的第三者责任险动态二级菜单
function seatspDszzrx(){
    var seatValue = $("#csj").attr("data-seat");
    if(seatValue < 6){
        //第三者责任险
        $("#dszzrx").children().remove();
        $("#dszzrx").append("<option value='660'>(5万)</option><option value='954'>(10万)</option><option value='1087'>(15万)</option><option value='1182'>(20万)</option><option value='1334'>(30万)</option><option value='1601' selected='selected'>(50万)</option><option value='2085'>(100万)</option>");
    }else{
        //第三者责任险
        $("#dszzrx").children().remove();
        $("#dszzrx").append("<option value='616'>(5万)</option><option value='869'>(10万)</option><option value='982'>(15万)</option><option value='1058'>(20万)</option><option value='1185'>(30万)</option><option value='1411' selected='selected'>(50万)</option><option value='1838'>(100万)</option>");
        $("#dszzrx-val").text($("#dszzrx").val());
    };
};

//根据座位数判断各种保险
function seat(){
    var seatValue = $("#csj").attr("data-seat");
    if(seatValue < 6){
        //交强险值
        $("#jqx-val").text(950);
//        $("#dszzrx-val").text($("#dszzrx").val());
        //车辆损失险
        /*$("#clssx-val").text((566 + parseFloat($("#csj").val()) * 0.0135).toFixed(0));
        //全车盗抢险
        $("#qcdqx-val").text((120 + parseFloat($("#csj").val()) * 0.005).toFixed(0));
        //司机座位责任险
        $("#sjzwzrx-val").text(10000 * 0.0041);*/
    }else{
        //交强险值
        $("#jqx-val").text(1100);
//        $("#dszzrx-val").text($("#dszzrx").val());
        //车辆损失险
        /*$("#clssx-val").text((679 + parseFloat($("#csj").val()) * 0.0135).toFixed(0));
        //全车盗抢险
        $("#qcdqx-val").text((140 + parseFloat($("#csj").val()) * 0.0045).toFixed(0));
        //司机座位责任险
        $("#sjzwzrx-val").text(10000 * 0.004);*/
    };
    //乘客座位责任险
    /*$("#ckzwzrx-val").text(10000 * 0.0026 * (seatValue - 1));
    var gzjVal = $("#csj").attr("data-gzjvalue");
    //自燃损失险
    $("#zrssx-val").text((gzjVal * 0.0012).toFixed(0));
    //玻璃单独破碎险
    $("#blddpsx-val").text(($("#blddpsx").val() * gzjVal).toFixed(0));
    //车身划痕损失险
    $("#cshhssx-val").text($("#cshhssx").val());
    //涉水行驶损失险
    $("#ssxsssx-val").text(($("#clssx-val").text() * 0.05).toFixed(0));
    //指定专修厂
    $("#zdzxc-val").text(($("#clssx-val").text() * 0.5).toFixed(0));*/
};

//根据排量数判断车船使用税
function displacement(){
    var displacementValue = parseFloat($("#csj").attr("data-displacement"));
    if(displacementValue <= 1){
        $("#ccs-val").text(180);
    }else if(1 < displacementValue && displacementValue <= 1.6){
        $("#ccs-val").text(300);
    }else if(1.6 < displacementValue && displacementValue <= 2){
        $("#ccs-val").text(360);
    }else if(2 < displacementValue && displacementValue <= 2.5){
        $("#ccs-val").text(720);
    }else if(2.5 < displacementValue && displacementValue <= 3){
        $("#ccs-val").text(1500);
    }else if(3 < displacementValue && displacementValue <= 4){
        $("#ccs-val").text(2640);
    }else{
        $("#ccs-val").text(3900);
    };
};

//费用结算部分
function brief(){
    //基本险种不计免赔险
    if($(".in-bjmpx").hasClass("cur")){
        $("#bjmpx-val").text((
            (
                parseFloat($("#clssx-val").text()) +
                parseFloat($("#dszzrx-val").text()) +
                parseFloat($("#sjzwzrx-val").text()) +
                parseFloat($("#ckzwzrx-val").text())
                ) * 0.15 +
            parseFloat($("#qcdqx-val").text()) * 0.2
            ).toFixed(0));
    }else{
        $("#bjmpx-val").text("0");
    };
    //附加险种不计免赔险
    if($(".in-bjmpx2").hasClass("cur")){
        $("#bjmpx2-val").text(((parseFloat($("#zrssx-val").text()) + parseFloat($("#cshhssx-val").text()) + parseFloat($("#ssxsssx-val").text())) * 0.15).toFixed(0));
    }else{
        $("#bjmpx2-val").text("0");
    }
    //必要花费小计
    $("#settle2-byhf").text(parseFloat($("#jqx-val").text()) + parseFloat($("#ccs-val").text()));
    //商业保险基本险种小计
    $("#settle2-byhf2").text(parseFloat($("#dszzrx-val").text()) + parseFloat($("#clssx-val").text()) + parseFloat($("#qcdqx-val").text()) + parseFloat($("#sjzwzrx-val").text()) + parseFloat($("#ckzwzrx-val").text()) + parseFloat($("#bjmpx-val").text()));
    //商业保险附加险种小计
    $("#settle2-byhf3").text(parseFloat($("#zrssx-val").text()) + parseFloat($("#blddpsx-val").text()) + parseFloat($("#cshhssx-val").text())+ parseFloat($("#bjmpx2-val").text()));
};

//保险部分默认选中状态
function insuranceSelected(){
    //含二级选项的窄栏点击
    $(".insurance-sclick").find(".pitch").each(function(){
        //初始
        if($(this).parent().hasClass("cur")){
            sclickHastoNone($(this));
        }else{
            sclickNonetoHas($(this));
        };
        //点击
        $(this).on("click",function(){
            if($(this).parent().hasClass("cur")){
                sclickHastoNone($(this));
            }else{
                sclickNonetoHas($(this));
            };
            brief();
            bxns();
        });
        brief();
        bxns();
    });
    //不含二级选项的宽栏点击
    $(".insurance-wclick").each(function(){
        //初始
        if($(this).hasClass("cur")){
            wclickHastoNone($(this));
        }else{
            wclickNonetoHas($(this));
        };
        //特殊，涉水行驶损失险初始不需要选中
        if($(this).hasClass("in-ssxsssx")){
            wclickHastoNone($(this));
        };
        //特殊，指定专修厂初始不需要选中
        if($(this).hasClass("in-zdzxc")){
            if(!($("#csj").attr("data-brand") == "奔驰" || $("#csj").attr("data-brand") == "宝马" || $("#csj").attr("data-brand") == "奥迪" || $("#csj").attr("data-brand") == "捷豹" || $("#csj").attr("data-brand") == "路虎")){
                wclickHastoNone($(this));
            };
        };
        //点击
        $(this).on("click",function(){
            if($(this).hasClass("cur")){
                wclickHastoNone($(this));
            }else{
                wclickNonetoHas($(this));
            };
            brief();
            bxns();
        });
        brief();
        bxns();
    });
    //遍历规则
    function sclickNonetoHas(obj){
        obj.parent().addClass("cur");
        if(obj.parent().hasClass("in-dszzrx")){
            obj.parent().find("#dszzrx").removeAttr("disabled");
            $("#dszzrx-val").text($("#dszzrx").val());
            $("#stage4-jbxz").append("<li class='c1'><span class='val'>￥<b id='s4-dszzrx-val'>" + $("#dszzrx-val").text() + "</b></span><span class='tit'>第三者责任险</span></li>");
        };
        if(obj.parent().hasClass("in-blddpsx")){
            obj.parent().find("#blddpsx").removeAttr("disabled");
            var gzjVal = $("#csj").attr("data-gzjvalue");
            $("#blddpsx-val").text(($("#blddpsx").val() * gzjVal).toFixed(0));
            $("#stage4-fjxz").append("<li class='c2'><span class='val'>￥<b id='s4-blddpsx-val'>" + $("#blddpsx-val").text() + "</b></span><span class='tit'>玻璃单独破碎险</span></li>");
        };
        if(obj.parent().hasClass("in-cshhssx")){
            obj.parent().find("#cshhssx").removeAttr("disabled");
            $("#cshhssx-val").text($("#cshhssx").val());
            $("#stage4-fjxz").append("<li class='c3'><span class='val'>￥<b id='s4-cshhssx-val'>" + $("#cshhssx-val").text() + "</b></span><span class='tit'>车身划痕损失险</span></li>");
        };
    };
    function sclickHastoNone(obj){
        obj.parent().removeClass("cur");
        obj.parent().find(".value-box > b").text("0");
        if(obj.parent().hasClass("in-dszzrx")){
            obj.parent().find("#dszzrx").attr("disabled","disabled");
            $("#stage4-jbxz").find("li.c1").remove();
        };
        if(obj.parent().hasClass("in-blddpsx")){
            obj.parent().find("#blddpsx").attr("disabled","disabled");
            $("#stage4-fjxz").find("li.c2").remove();
        };
        if(obj.parent().hasClass("in-cshhssx")){
            obj.parent().find("#cshhssx").attr("disabled","disabled");
            $("#stage4-fjxz").find("li.c3").remove();
        };
    };
    function wclickNonetoHas(obj){
        obj.addClass("cur");
        if(obj.hasClass("in-clssx")){
            if($("#csj").attr("data-seat") < 6){
                $("#clssx-val").text((566 + parseFloat($("#csj").val()) * 0.0135).toFixed(0));
            }else{
                $("#clssx-val").text((679 + parseFloat($("#csj").val()) * 0.0135).toFixed(0));
            };
            $("#stage4-jbxz").append("<li class='c2'><span class='val'>￥<b id='s4-clssx-val'>" + $("#clssx-val").text() + "</b></span><span class='tit'>车辆损失险</span></li>");
        };
        if(obj.hasClass("in-qcdqx")){
            if($("#csj").attr("data-seat") < 6){
                $("#qcdqx-val").text((120 + parseFloat($("#csj").val()) * 0.005).toFixed(0));
            }else{
                $("#qcdqx-val").text((140 + parseFloat($("#csj").val()) * 0.0045).toFixed(0));
            };
            $("#stage4-jbxz").append("<li class='c3'><span class='val'>￥<b id='s4-qcdqx-val'>" + $("#qcdqx-val").text() + "</b></span><span class='tit'>全车盗抢险</span></li>");
        };
        if(obj.hasClass("in-sjzwzrx")){
            if($("#csj").attr("data-seat") < 6){
                $("#sjzwzrx-val").text(10000 * 0.0041);
            }else{
                $("#sjzwzrx-val").text(10000 * 0.004);
            };
            $("#stage4-jbxz").append("<li class='c4'><span class='val'>￥<b id='s4-sjzwzrx-val'>" + $("#sjzwzrx-val").text() + "</b></span><span class='tit'>司机座位责任险</span></li>");
        };
        if(obj.hasClass("in-ckzwzrx")){
            var seatValue = $("#csj").attr("data-seat");
            $("#ckzwzrx-val").text(10000 * 0.0026 * (seatValue - 1));
            $("#stage4-jbxz").append("<li class='c5'><span class='val'>￥<b id='s4-ckzwzrx-val'>" + $("#ckzwzrx-val").text() + "</b></span><span class='tit'>乘客座位责任险</span></li>");
        };
        if(obj.hasClass("in-bjmpx")){
            brief();
            $("#stage4-jbxz").append("<li class='c6'><span class='val'>￥<b id='s4-bjmpx-val'>" + $("#bjmpx-val").text() + "</b></span><span class='tit'>不计免赔险</span></li>");
        };
        if(obj.hasClass("in-zrssx")){
            var gzjVal = $("#csj").attr("data-gzjvalue");
            $("#zrssx-val").text((gzjVal * 0.0012).toFixed(0));
            $("#stage4-fjxz").append("<li class='c1'><span class='val'>￥<b id='s4-zrssx-val'>" + $("#zrssx-val").text() + "</b></span><span class='tit'>自燃损失险</span></li>");
        };
        if(obj.hasClass("in-ssxsssx")){
            $("#ssxsssx-val").text(($("#clssx-val").text() * 0.05).toFixed(0));
            $("#stage4-fjxz").append("<li class='c4'><span class='val'>￥<b id='s4-ssxsssx-val'>" + $("#ssxsssx-val").text() + "</b></span><span class='tit'>涉水行驶损失险</span></li>");
        };
        if(obj.hasClass("in-zdzxc")){
            $("#zdzxc-val").text(($("#clssx-val").text() * 0.5).toFixed(0));
            $("#stage4-fjxz").append("<li class='c5'><span class='val'>￥<b id='s4-zdzxc-val'>" + $("#zdzxc-val").text() + "</b></span><span class='tit'>指定专修厂</span></li>");
        };
        if(obj.hasClass("in-bjmpx2")){
            brief();
            $("#stage4-fjxz").append("<li class='c6'><span class='val'>￥<b id='s4-bjmpx2-val'>" + $("#bjmpx2-val").text() + "</b></span><span class='tit'>不计免赔险</span></li>");
        };
    };
    function wclickHastoNone(obj){
        obj.removeClass("cur");
        obj.find(".value-box > b").text("0");
        if(obj.hasClass("in-clssx")){
            $("#stage4-jbxz").find("li.c2").remove();
        };
        if(obj.hasClass("in-qcdqx")){
            $("#stage4-jbxz").find("li.c3").remove();
        };
        if(obj.hasClass("in-sjzwzrx")){
            $("#stage4-jbxz").find("li.c4").remove();
        };
        if(obj.hasClass("in-ckzwzrx")){
            $("#stage4-jbxz").find("li.c5").remove();
        };
        if(obj.hasClass("in-bjmpx")){
            $("#stage4-jbxz").find("li.c6").remove();
        };
        if(obj.hasClass("in-zrssx")){
            $("#stage4-fjxz").find("li.c1").remove();
        };
        if(obj.hasClass("in-ssxsssx")){
            $("#stage4-fjxz").find("li.c4").remove();
        };
        if(obj.hasClass("in-zdzxc")){
            $("#stage4-fjxz").find("li.c5").remove();
        };
        if(obj.hasClass("in-bjmpx2")){
            $("#stage4-fjxz").find("li.c6").remove();
        };
    };
};

//保险部分二级窄栏点击对应第四栏动态生成效果
function incredible(){
    if($(this).parents(".in-dszzrx")){
        $("#stage4-jbxz").find(".c1").remove();
        $("#stage4-jbxz").append("<li class='c1'><span class='val'>￥<b id='s4-dszzrx-val'>" + $("#dszzrx-val").text() + "</b></span><span class='tit'>第三者责任险</span></li>");
    };
    if($(this).parents(".in-blddpsx")){
        $("#stage4-fjxz").find(".c2").remove();
        $("#stage4-fjxz").append("<li class='c2'><span class='val'>￥<b id='s4-blddpsx-val'>" + $("#blddpsx-val").text() + "</b></span><span class='tit'>玻璃单独破碎险</span></li>");
    };
    if($(this).parents(".in-cshhssx")){
        $("#stage4-fjxz").find(".c3").remove();
        $("#stage4-fjxz").append("<li class='c3'><span class='val'>￥<b id='s4-cshhssx-val'>" + $("#cshhssx-val").text() + "</b></span><span class='tit'>车身划痕损失险</span></li>");
    };
};


//==========================================计算逻辑，华丽丽的分割线 ヽ(●´∀`●)ﾉ==========================================
//taxTmp = [];
$(function(){
    seatspDszzrx();
    add();
    insuranceSelected();
    qkZdsp();
    $(".change").on("change",function(){
        add();
        incredible();
        qkZdsp();
    });
    $(".spchange").on("change",function(){
        if($(this).attr("id") == "dszzrx"){
            $("#dszzrx-val").text($("#dszzrx").val());
        };
        if($(this).attr("id") == "blddpsx") {
            var gzjVal = $("#csj").attr("data-gzjvalue");
            $("#blddpsx-val").text(($("#blddpsx").val() * gzjVal).toFixed(0));
        };
        if($(this).attr("id") == "cshhssx") {
            $("#cshhssx-val").text($("#cshhssx").val());
        };
        incredible();
        brief();
        $("#stage4-jbxz").find(".c6").remove();
        $("#stage4-jbxz").append("<li class='c6'><span class='val'>￥<b id='s4-bjmpx-val'>" + $("#bjmpx-val").text() + "</b></span><span class='tit'>不计免赔险</span></li>");
        $("#stage4-fjxz").find(".c6").remove();
        $("#stage4-fjxz").append("<li class='c6'><span class='val'>￥<b id='s4-bjmpx2-val'>" + $("#bjmpx2-val").text() + "</b></span><span class='tit'>不计免赔险</span></li>");
    });
    $("#j-stage1-tab").find("li").each(function(){
        $(this).click(function(){
            add();
        });
    });
    function add(){
        //第一屏
        //车身价
        var csjVal = $("#csj").val();
        //指导价
        var zdjVal = $("#csj").attr("data-zvalue");
        //首付款 + 贷款金额
        var sfkVal = $("#sfk").val();
        var sfValue = (csjVal * sfkVal).toFixed(0);
        var dkjeVal = csjVal - sfValue;
        roundNum(dkjeVal);
        $("#sfk-val").text(csjVal - rnum);
        $("#dkje-val").text(rnum);
        var sfkValue=csjVal - rnum;
        var dkjeValue=rnum;
        //购置税
        $("#gzs").text((zdjVal / (1 + 0.17) * 0.1).toFixed(0));
        //金融服务费
        $("#jrfwf").text((rnum * 0.03).toFixed(0));
        //必要花费
        var byhfValue = parseFloat($("#gzs").text()) + parseFloat($("#jrfwf").text()) + parseFloat($("#spfw").val());
        $("#settle-byhf").text(byhfValue);

        //全款
        //购置税
        $("#gzs2").text((zdjVal / (1 + 0.17) * 0.1).toFixed(0));
        //必要花费
        var byhfValue2 = parseFloat($("#gzs2").text()) + parseFloat($("#spfw2").val());
        $("#settle-byhf2").text(byhfValue2);
        //车身价
        var sfValue2 = $("#csj2").val();

        //文案类别变更
        function tabSelect(){
            qkZdsp();
            var firstValue = parseFloat(sfkValue) + parseFloat(byhfValue);
            var firstValue2 = parseFloat(sfValue2) + parseFloat(byhfValue2);
            var firstValue3 = firstValue2 - firstValue;
            $("#stage1-all-val-q").text(firstValue2);
            $("#stage1-all-val-d").text(firstValue);
            $("#stage1-all-val-c").text(firstValue3);
            if($("#j-stage1-tab").find("li").eq(0).hasClass("cur")){
                statsFkfs = "贷款";
                $("#stage1-p").html("贷款购车，首付" + $("#sfk").find("option:selected").text() + "，" + $("#xzyh").find("option:selected").text() + "，贷款按" + $("#yg").find("option:selected").text() + "计算，需首付" + $("#sfk-val").text() + "元 + 必要花费" + $("#settle-byhf").text() + "元，月还款" + $("#lxje-val").text() + "元");
                $("#stage1-all-val").text(firstValue);
                $("#j-calc-nav-val1").text(firstValue);
                $("#j-settle-box-ul3").find(".daikuan").css("display","block");
                //首付合计
                $("#s4-all").text(parseFloat($("#s4-csj").text()) + parseFloat($("#s4-gzs").text()) + parseFloat($("#s4-jrfwf").text()) + parseFloat($("#s4-spfwf").text()) + parseFloat($("#s4-bxje").text()));
                //车身首付
                $("#s4-csj-tit").text("车身首付");
                $("#s4-csj").text($("#sfk-val").text());
            }else{
                statsFkfs = "全款";
                $("#stage1-p").html("全款购车，车身价" + $("#csj2").val() + "元 + 必要花费" + $("#settle-byhf2").text() + "元");
                $("#stage1-all-val").text(firstValue2);
                $("#j-calc-nav-val1").text(firstValue2);
                $("#j-settle-box-ul3").find(".daikuan").css("display","none");
                //首付合计
                $("#s4-all").text(parseFloat($("#s4-csj").text()) + parseFloat($("#s4-gzs").text()) + parseFloat($("#s4-spfwf").text()) + parseFloat($("#s4-bxje").text()));
                //车身首付
                $("#s4-csj-tit").text("车身金额");
                $("#s4-csj").text($("#csj").val());
            };
            bigHei();
        };
        tabSelect();
        //银行利率及利息金额
        var yhllVal = $("#yg").val();
        if($("#lxzffs").val() == "ftsq" && $("#j-stage1-tab").find("li").eq(0).hasClass("cur")){
            var lxValue = (dkjeValue * (1 + parseFloat(yhllVal)) / $("#yg").find("option:selected").attr("data-cycle")).toFixed(0);
            $("#lxje-val").text(lxValue);
            $("#stage1-p").html("贷款购车，首付" + $("#sfk").find("option:selected").text() + "，" + $("#xzyh").find("option:selected").text() + "，贷款按" + $("#yg").find("option:selected").text() + "计算，需首付" + $("#sfk-val").text() + "元 + 其他费用" + $("#settle-byhf").text() + "元，月还款" + $("#lxje-val").text() + "元");
            $("#lxje-txt").text("分摊至月供中");
        };
        if($("#lxzffs").val() == "ycxsq" && $("#j-stage1-tab").find("li").eq(0).hasClass("cur")){
            var lxValue = (dkjeValue / $("#yg").find("option:selected").attr("data-cycle")).toFixed(0);
            var ycxLxValue = (dkjeValue * yhllVal).toFixed(0);
            $("#lxje-val").text(lxValue);
         $("#stage1-p").html("贷款购车，首付" + $("#sfk").find("option:selected").text() + "，" + $("#xzyh").find("option:selected").text() + "，贷款按" + $("#yg").find("option:selected").text() + "计算，需首付" + $("#sfk-val").text() + "元 + 其他费用" + $("#settle-byhf").text() + "元，月还款" + $("#lxje-val").text() + "元" + "<span>，贷款利息一次性支付：" + ycxLxValue + "元</span>");
            $("#lxje-txt").text(ycxLxValue + "元");

            var firstValue = parseFloat(sfkValue) + parseFloat(byhfValue) + parseFloat(ycxLxValue);
            $("#stage1-all-val").text(firstValue);
            $("#j-calc-nav-val1").text(firstValue);
        };




        //第二屏
        seat();
        displacement();
        brief();



        //第四屏
        $("#to-stage1-p").text($("#stage1-p").text() + "。首付" + $("#stage1-all-val").text() + "元。");
        if($('#j-jzjp-select-normal').length==0){
            $("#to-stage2-p").text($(".stage3-p").eq(1).text());
        }else{
            $("#to-stage2-p").text($(".stage3-p").eq(0).text() + "+" + $(".stage3-p").eq(1).text());
        }
        $("#s4-jqx-val").text($("#jqx-val").text());
        $("#s4-ccs-val").text($("#ccs-val").text());
        //购置税
        $("#s4-gzs").text($("#gzs").text());
        //金融服务费
        $("#s4-jrfwf").text($("#jrfwf").text());
        //上牌服务费
        $("#s4-spfwf").text($("#spfw").val());
        //抵押服务费
        //$("#s4-dyfwf").text($("#dyfw").text());
        //保险金额
        $("#s4-bxje").text($("#j-calc-nav-val2").text());
        //关联第三关 + 加装精品
        $(".jzjp-select").bind("click",function(){
            $("#to-stage2-p").text($(".stage3-p").eq(0).text());
            if($(".stage3-p").eq(0).text() == ""){
                $("#to-stage2-p").text($(".stage3-p").eq(1).text());
            }else if($(".stage3-p").eq(1).text() != ""){
                if($('#j-jzjp-select-normal').length==0){
                    $("#to-stage2-p").text( $(".stage3-p").eq(1).text());
                }else{
                    $("#to-stage2-p").text($(".stage3-p").eq(0).text() + "+" + $(".stage3-p").eq(1).text());
                }
                
            };
            $("#s4-jzjp").text($("#j-calc-nav-val3").text());
            if($("#j-stage1-tab").find("li").eq(0).hasClass("cur")) {
                $("#s4-all").text(parseFloat($("#s4-csj").text()) + parseFloat($("#s4-gzs").text()) + parseFloat($("#s4-jrfwf").text()) + parseFloat($("#s4-spfwf").text()) + parseFloat($("#s4-bxje").text()) + parseFloat($("#s4-jzjp").text()));
            }else{
                $("#s4-all").text(parseFloat($("#s4-csj").text()) + parseFloat($("#s4-gzs").text()) + parseFloat($("#s4-spfwf").text()) + parseFloat($("#s4-bxje").text()) + parseFloat($("#s4-jzjp").text()));
            }
            $("#j-calc-nav-val4").text($("#s4-all").text());
        });
        $("#to-stage2-p").text($(".stage3-p").eq(0).text());
        if($('#j-jzjp-select-normal').length==0){
            $("#to-stage2-p").text($(".stage3-p").eq(1).text());
        };
        if($(".stage3-p").eq(1).text() != ""){
            if($('#j-jzjp-select-normal').length==0){
                $("#to-stage2-p").text($(".stage3-p").eq(1).text());
            }else{
                 $("#to-stage2-p").text($(".stage3-p").eq(0).text() + "+" + $(".stage3-p").eq(1).text());
            }
           
        };
        $("#s4-jzjp").text($("#j-calc-nav-val3").text());
        //首付合计
        if($("#j-stage1-tab").find("li").eq(0).hasClass("cur")){
            $("#s4-all").text(parseFloat($("#s4-csj").text()) + parseFloat($("#s4-gzs").text()) + parseFloat($("#s4-jrfwf").text()) + parseFloat($("#s4-spfwf").text()) + parseFloat($("#s4-bxje").text()) + parseFloat($("#s4-jzjp").text()));
            $(".jzjp-select").bind("click",function(){
                $("#s4-all").text(parseFloat($("#s4-csj").text()) + parseFloat($("#s4-gzs").text()) + parseFloat($("#s4-jrfwf").text()) + parseFloat($("#s4-spfwf").text()) + parseFloat($("#s4-bxje").text()) + parseFloat($("#s4-jzjp").text()));
            });
            $("#s4-tit").text("首付合计");
        }else{
            $("#s4-all").text(parseFloat($("#s4-csj").text()) + parseFloat($("#s4-gzs").text()) + parseFloat($("#s4-spfwf").text()) + parseFloat($("#s4-bxje").text()) + parseFloat($("#s4-jzjp").text()));
            $("#s4-tit").text("购车合计");
        };
        $("#j-calc-nav-val4").text($("#s4-all").text());
        $(".j-sh-switch").click(bigHei);



        var employees = [
            {"cheshengjia":csjVal ,//车身价
            "fukuanfangshi":statsFkfs ,//付款方式
            "shoufukuan":sfkValue ,//首付款
            "shoufukuanbili":sfkVal ,//首付款比例
            "daikuanjine":rnum ,//贷款金额
            "xuanzeyinghang":$("#xzyh").find("option:selected").text() ,//选择银行
            "lixizhifufangshi":$("#lxzffs").find("option:selected").text() ,//选择支付方式
            "lixijine":ycxLxValue ,//利息金额
            "yuegongqishu":$("#yg").find("option:selected").text() ,//月供期数
            "yuegongjine":lxValue ,//月供金额
            "gouzhishui":$("#gzs").text() ,//购置税
            "jinrongfuwufei":$("#jrfwf").text() ,//金融服务费
            "shangpaifuwu":$("#spfw").find("option:selected").text() ,//上牌服务
            "jiaoqiangxianleixing":$("#jqx").find("option:selected").text() ,//交强险类型
            "jiaoqiangxian":$("#jqx").val() ,//交强险
            "chechuanshiyongshuileixing":$("#ccs").find("option:selected").text() ,//车船使用税类型
            "chechuanshiyongshui":$("#ccs").val() ,//车船使用税
            "disanzhezerenxianleixing":$("#dszzrx").find("option:selected").text() ,//第三者责任险类型
            "disanzhezerenxian":$("#dszzrx").val() ,//第三者责任险
            "cheliangsunshixian":$("#clssx-val").attr("data-value") ,//车辆损失险
            "quanchedaoqiangxian":$("#qcdqx-val").attr("data-value") ,//全车盗抢险
            "shijizuoweizerenxian":$("#sjzwzrx-val").attr("data-value") ,//司机座位责任险
            "chekezuoweizerenxian":$("#ckzwzrx-val").attr("data-value") ,//乘客座位责任险
            "bujimianpeixian":$("#bjmpx-val").attr("data-value") ,//不计免赔险
            "ziransunshixian":$("#zrssx-val").attr("data-value") ,//自然损失险
            "bolidanduposuixianleixing":$("#blddpsx").find("option:selected").text() ,//玻璃单独破碎险类型
            "bolidanduposuixian":$("#blddpsx-val").attr("data-value") ,//玻璃单独破碎险
            "cheshenhuahensunshixianleixing":$("#cshhssx").find("option:selected").text() ,//车身划痕损失险类型
            "cheshenhuahensunshixian":$("#cshhssx-val").attr("data-value") ,//车身划痕损失险
            "sheshuixingshisunshixian":$("#ssxsssx-val").attr("data-value") ,//涉水行驶损失险
            "zhidingzhuanxiuchang":$("#zdzxc-val").attr("data-value") ,//指定专修厂
            "bujimianpeixian":$("#bjmpx2-val").attr("data-value") ,//不计免赔险
            "baoxiangoumainianshu":$("#bxgmns").find("option:selected").text() ,//保险购买年数
            "baoxianheji":$("#stage2-all-val").text() ,//保险合计
            "jiazhuangjingping":$("#to-stage2-p").text() ,//精品组合
            "jiazhuangjingpingjiage":$("#stage3-all-val").text()//精品组合价格
            }
        ];
        bxns();
        $("#s4-bxje").text($("#stage2-all-val").text());
        if($("#j-stage1-tab").find("li").eq(0).hasClass("cur")) {
            $("#s4-all").text(parseFloat($("#s4-csj").text()) + parseFloat($("#s4-gzs").text()) + parseFloat($("#s4-jrfwf").text()) + parseFloat($("#s4-spfwf").text()) + parseFloat($("#s4-bxje").text()) + parseFloat($("#s4-jzjp").text()));
        }else{
            $("#s4-all").text(parseFloat($("#s4-csj").text()) + parseFloat($("#s4-gzs").text()) + parseFloat($("#s4-spfwf").text()) + parseFloat($("#s4-bxje").text()) + parseFloat($("#s4-jzjp").text()));
        }
        $("#j-calc-nav-val4").text($("#s4-all").text());
        bigHei();

        //保险金额
        $("#s4-bxje").text($("#j-calc-nav-val2").text());
    };
});

//stage3
$(function(){
    isSingle();
    calc_autosize();
    $('.jzjp-list').each(function(){
        $(this).find('li:last').addClass('last');
    });
    $('#j-jzjp-tab li').click(function(){
        calc_get_height(this);
    });
    $('.jzjp-list li .point2,.calc-list-ul-jzjp-li .point2').bind('click',function(){
        //$(this).parents('li').siblings().find('.point2').removeClass('point2-cur');
        var jse=$('.point2-cur').parents('li');
        var total=getTotal($(jse).find('.price-final'));
        var html=getTaozhuang(jse,'.title');
        if(html=='')html='暂无选择';
        $(this).parents('.calc-con').find('.calc-settle #stage1-p').html(html);
        $(this).parents('.calc-con').find('.calc-settle .js .val').html(total);
        getTotalALL();
        calc_get_height(this);
    });
    $('.jzjp-select').each(function(){
        var jse=this;
        var comput=function(){
            try{
                var cur=$(jse).parents('.calc-con').find('dl.cur');
                var total=getTotal(cur.find('big.fr'));
                var html=getTaozhuang(cur);
                $(jse).parents('.calc-con').find('.calc-settle').find('#stage1-p').html(html);
                $(jse).parents('.calc-con').find('.calc-settle').find('.js .val').html(total);
                getTotalALL();
            }catch(err){}
        }
        $(this).find('dt').bind('click',function(){
            var dl=$(this).parent();
            dl.siblings().removeClass('cur');
            if(dl.hasClass('cur')){
                dl.removeClass('cur');
            }
            else{
                dl.addClass('cur');
            }
            if(dl.parents('#j-jzjp-select-normal').length==0){calc_get_height(this);return;}
            var ml=dl.parents('.calc-cons').offset().left-dl.find('dd').offset().left;
            var oml=dl.find('dd').css('margin-left');
            if(oml=='0px'){dl.find('dd').css({'margin-left':ml});}
            comput();
            calc_get_height(this);
        });
        $(this).find('dl').each(function(){
            price_sum=getTotal($(this).find('.price-final'));
            $(this).find('.jzjp-list-total .hl span').html(price_sum);
        });
        comput();
    });
    $('.jzjp-select').find('.duibi').bind('click',function(){
        if($(this).find('a').hasClass('show'))$(this).find('a').removeClass('show');
        else $(this).find('a').addClass('show');
        $(this).siblings('.price-area').toggle();
    });
});
function getTaozhuang(obj,hobj){
    var html='';
    var hobj=hobj||'dt span';
    $(obj).each(function(n){
        var prex=n==0?'':'+';
         var hobjValue=$(this).find(hobj).html();
         if(typeof(hobjValue)=='undefined'){
         html=html+'';
         }else{
         html=html+prex+hobjValue;
         }
       // html+=prex+$(this).find(hobj).html();
    });
    return html;
}

function getTotalALL(){
    var all=getTotal($('.calc-blk:eq(2) .calc-settle'),'.js .val');
    $('.calc-nav-ul #j-calc-nav-val3').html(all);
}
function getTotal(obj,vobj){
    var sum=0,vobj=vobj||'.hl span';
    $(obj).each(function(){
        sum+=parseFloat($(this).find(vobj).html());
    });
    return sum;
}
function calc_autosize(){
    function run(){
        $('.jzjp-select').each(function(){
            $(this).find('dl').each(function(){
                var win_w=$(document.body).width();
                var w=$(this).find('dt').width();
                $(this).find('dd').css({'width':win_w});
                if($(this).parents('#j-jzjp-select-normal').length==0)return;
                $(this).css({'width':w});
            });
        });
    }
    run();
    $(window).resize(run);
}
function isSingle(){
    if($('#j-jzjp-select-normal').length==0){
        $("#j-jzjp-cons").children().eq(0).css("display","none");
        $("#j-jzjp-cons").children().eq(1).css("display","block");
        $("#j-jzjp-tab").find("li").eq(0).css("display","none");
        $("#j-jzjp-tab").find("li").eq(1).addClass("calc-single-tab");
    }
}
function calc_get_height(me){
    obj=$(me).hasClass('calc-blk')?me:$(me).parents('.calc-blk');
    $('.calc-blks').css('height',$(obj).height());
}


