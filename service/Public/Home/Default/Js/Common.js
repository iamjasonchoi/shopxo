console.log("%c\u5b89\u5168\u8b66\u544a\uff01","font-size:50px;color:red;-webkit-text-fill-color:red;-webkit-text-stroke: 1px black;");
console.log("%c\u6b64\u6d4f\u89c8\u5668\u529f\u80fd\u4e13\u4f9b\u5f00\u53d1\u8005\u4f7f\u7528\u3002\u8bf7\u4e0d\u8981\u5728\u6b64\u7c98\u8d34\u6267\u884c\u4efb\u4f55\u5185\u5bb9\uff0c\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u60a8\u7684\u8d26\u6237\u53d7\u5230\u653b\u51fb\uff0c\u7ed9\u60a8\u5e26\u6765\u635f\u5931 \uff01","font-size: 20px;color:#333");
console.log("\u6280\u672f\u652f\u6301\uff1a\u0068\u0074\u0074\u0070\u003a\u002f\u002f\u0067\u006f\u006e\u0067\u002e\u0067\u0067\u002f");

$(function()
{
    //鼠标悬停信息
    $("#wrap .item").mouseenter(function(){
        $(this).children(".mp_tooltip").animate({left:-92,queue:true});
        $(this).children(".mp_tooltip").css("visibility","visible");
        $(this).children(".ibar_login_box").css("display","block");
    });
    $("#wrap .item").mouseleave(function(){
        $(this).children(".mp_tooltip").css("visibility","hidden");
        $(this).children(".mp_tooltip").animate({left:-121,queue:true});
        $(this).children(".ibar_login_box").css("display","none");
    });
    $(".quick_toggle li").mouseover(function(){
        $(this).children(".mp_qrcode").show();
        $(this).children(".mp_tooltip").animate({left:-92,queue:true});
        $(this).children(".mp_tooltip").css("visibility","visible");
    });
    $(".quick_toggle li").mouseleave(function(){
        $(this).children(".mp_qrcode").hide();
        $(this).children(".mp_tooltip").css("visibility","hidden");
        $(this).children(".mp_tooltip").animate({left:-121,queue:true});        
    });

    $(".return_top").click(function(){
        ds.scrollTo(0, 0);
        hideReturnTop();
    });
    
});