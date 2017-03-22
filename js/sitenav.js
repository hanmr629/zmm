$(function() {

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


    setSiteNav()

    function setSiteNav() {
        $.ajax({
            url: "http://139.199.157.195:9090/api/getsitenav",
            success: function(data) {
                var html = template('siteNav', data);
                $('.site-nav').html(html);
            }
        })
    }
})
