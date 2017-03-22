/**
 * Created by Administrator on 2017-2-14.
 */
$(function () {

        var path=0;
        document.body.addEventListener("touchmove", function (e) {
            path= e.touches[0].clientX;

        })

        document.body.addEventListener("touchend", function (e) {
            var width=document.body.offsetWidth;
            if(path>width*0.4){
                // window.location=document.referrer;
            }


        })


        var num = 1;

        console.log($('.right')[0])

        getInterMenu($('.money'), 1)
        function getInterMenu(dom, pageid) {
            var str = 'http://139.199.157.195:9090/api/getmoneyctrl?pageid=' + (pageid);
            $.get(str, function (res) {
                    res.num = Math.floor(res.totalCount / res.pagesize)
                    res.pageid = pageid || 1;
                    res.page = []
                    for (var i = 0; i < res.num; i++) {
                        res.page.push({'pageid': i + 1, 'pageCount': res.num})
                        var html = template('html', res)
                        dom.html(html)

                    }
                    $('.right').on('click', function () {

                        if (num < Math.floor(res.totalCount / res.pagesize)) {
                            num++
                        }else{
                            alert("已经是最后一页")
                        }
                        getInterMenu($('.money'), num)
                    })
                    $('.left').on('click', function () {
                        if(num<1){
                            alert("这是第一页")
                        }else{
                            num--
                        }
                        getInterMenu($('.money'),num )
                        console.log(pageid)
                    })
                    $('#selectPage').on('change', function (e) {
                        num = $(this).val();
                        $(this).attr('selected', "selected");
                            getInterMenu($('.money'), num);
                    })
                }
            )
        }

    }
)