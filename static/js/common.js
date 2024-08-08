// 引用公共头尾部
// 为了使每个栏目的导航栏正确显示，需要传递个参数

function loadPage(catindex) {
    $('#page_top').load('/html/gonggongtouweibu/gongyongtoubu/',function (){
        $('.top-nav ul li').eq(catindex).addClass('act').siblings().removeClass('act');
        let res = getCookie("targetEncodinghttp://kjtyngovcn");
        if(res == 1) {
            fytwPage();
        }
    });
    $('#page_bottom').load('/html/gonggongtouweibu/gonggongweibu/');
}

// 简繁切换
function fycninit() {
    fycnbtnObject = document.getElementById('fycn');

    if ( fycnbtnObject )
    {
        with( fycnbtnObject )
        {
            if(typeof(document.all)!="object")
            {
                href="javascript:fycnPage();";
            }
            else
            {
                href="#";
                onclick = new Function( "fycnPage(); return false;");
            }
        }

        if ( currentEncoding != targetEncoding )
        {
            setTimeout("translateBody()",translateDelay);
            if( targetEncoding == 1 ){
                fycnbtnObject.innerHTML = msgToSimplifiedChinese;
            }

        }
    }
}

function fytwinit() {
    fytwbtnObject = document.getElementById('fytw');

    if ( fytwbtnObject )
    {
        with( fytwbtnObject )
        {
            if(typeof(document.all)!="object")
            {
                href="javascript:fytwPage();";
            }
            else
            {
                href="#";
                onclick = new Function( "fytwPage(); return false;");
            }
        }

        if ( currentEncoding != targetEncoding )
        {
            setTimeout("translateBody()",translateDelay);
            if( targetEncoding == 2 ){
                fytwbtnObject.innerHTML = msgToTraditionalChinese;
            }

        }
    }
}

// 使用获得的参数进行点击跳转
function jumpLink() {
    var url = getCurrUrl();
    window.open("https://zfwzgl.www.gov.cn/exposure/jiucuo.html?site_code=5300000002&url=" + encodeURIComponent(url));
}

// 获取纠错页面所需url参数
function getCurrUrl () {
    var url = "";
    if (parent !== window) {
        try {
            url = window.top.location.href;
        } catch (e) {
            url = window.top.document.referrer;
        }
    }
    if (url.length == 0)
        url = document.location.href;
    return url;
}

// 判断catname
function catnameJudge (catname) {
    var record = 0;
    if(catname.indexOf("新闻动态") != -1) {
        record = 1;
    }else if (catname.indexOf("政务公开") != -1) {
        record = 2;
    }else if (catname.indexOf("互动交流") != -1) {
        record = 4;
    }else if (catname.indexOf("机关党建") != -1) {
        record = 5;
    }else {
        record = 0;
    }
    return record;
}

$(function (){
    // 首页banner轮播图
    var scroll1 = new zScroll({
        container: '#layer02-left-swiper',
        autoplay: true,
        button: false,
        width: 572,
        height: 359
    })
    // 首页轮播图右侧栏目导航及内容切换
    $('.layer02-right-list-title span').hover(function (){
        var index = $(this).index();
        $(this).addClass('act').siblings().removeClass('act');
        $('.layer02-right-list-content').hide().eq(index).show();
    },function (){
        return false;
    })
    // 通知公告、政策文件等栏目切换
    $('ul.wjjd-title li').hover(function (){
        var index = $(this).index();
        $(this).addClass('act').siblings().removeClass('act');
        $('ul.wjjd-content').hide().eq(index).show();
    },function (){
        return false;
    })
    // 政府信息公开栏目切换
    $('.zfxxgk ul li a').hover(function (){
        $(this).find(".white").hide();
        $(this).find(".blue").show();
    },function (){
        $(this).find(".blue").hide();
        $(this).find(".white").show();
    })
    // 互动交流栏目切换
    $('.hdjl-column li').hover(function () {
        var index = $(this).index()
        //console.log(index)
        $(this).find('.blue').show()
        $(this).find('.white').hide();
        $(this).siblings().find('.white').show()
        $(this).siblings().find('.blue').hide()
        if(index != 3) {
            $('.ldxx-wrapper').hide().eq(index).show()
        }
    },function () {
        return false
    })

    // 首页其他事项切换
    var scroll2 = new zScroll({
        container: '#other-swiper',
        previewNum: 4,
        autoplay: true,
        pagination: false,
        single: true,
        space: 12,
        breakpoints: {
            // 若宽度小于768
            1024: {
                previewNum: 3,
                space: 10
            },
            980: {
                previewNum: 3,
                space: 60
            },
            768: {
                previewNum: 2,
                space: 0
            }
        }
    })
})

// 切换字体大小
$('.wzfrom span').click(function(){
    var _el = $('.contt_cont p');
    var _ft = parseFloat(_el.css('font-size'));
    var cName = $(this).attr("class");
    if(cName === "b"){
        if( _ft<= 22 ){
            _ft += 2;
        }
    }else if(cName === "s"){
        if(_ft >= 14) {
            _ft -= 2;
        }
    }else if(cName === 'm'){
        _ft = 16;
    }
    _el.css("font-size", _ft );
})

