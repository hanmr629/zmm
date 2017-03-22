$(function () {
    mmbApp();
    toTop('#toTop');
    function mmbApp(){
        getIndexMenu();
        getInterMenu();
    }

        var data=['商品分类','省钱省心','折扣专区','超值折扣','跳蚤市场','内部券','今日特价','更多','小件拼凑','母婴专区','品牌链接','商品Top10']
    function getIndexMenu(){
        $.ajax({
            url:"http://139.199.157.195:9090/api/getindexmenu",
            success: function (info) {
                //console.log(info);
                for(var i=0;i<12;i++){
                    info.result[i].name=data[i]
                }
                var html = template('tpl',info);
                $('#menu .row').html(html);
                //console.log(html);
                $('#menu>.row>div:nth-last-child(-n+4)').hide();
                addEvent();
            }
        })
    }
    function addEvent(){
        $('#menu>.row>div:nth-child(8)').click(function () {
            $('#menu>.row>div:nth-last-child(-n+4)').slideToggle();
        })
    }
    function getInterMenu() {
        $.ajax({
            url: 'http://139.199.157.195:9090/api/getmoneyctrl',
            success: function (res) {
                //$.get('http://139.199.157.195:9090/api/getmoneyctrl',function(res){
                    var html =   template('html',res)
                    $('section>ul').html(html)
                //})
            }
        })
    }
    function toTop(v){
        var top= document.querySelector(v);

        top.onclick=function(e){
            e.stopPropagation();

            var time= setInterval(function(){
                var t= document.body.scrollTop;
                t=t*.85;
                document.body.scrollTop=t;
                t<=0?clearInterval(time):function(){}
            },50)
        } }
})


