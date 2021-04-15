$(function () {

    /* //////////// 메인 슬라이드쇼 Back 버튼 //////////// */
    $("#Back").click(function () {

        $("#slideImg:last-child").insertBefore("#slideImg:first-child")
        $("#shuttleFrame").css({
            "margin-left": "-100px"
        });
        $("#shuttleFrame").animate({
                "margin-left": "0"
            },
            150,
            "swing");
    });
    /* //////////// 메인 슬라이드쇼 Back 버튼 //////////// */



    /* //////////// 메인 슬라이드 Next 버튼 //////////// */

    $("#Next").click(function () {
        $("#shuttleFrame").animate({
                "margin-left": "-295px"
            },
            150,
            "swing",
            function () {
                $("#slideImg:first-child").insertAfter("#slideImg:last-child");
                $("#shuttleFrame").css({
                    "margin-left": "0"
                });
            });

    });
    /* //////////// 메인 슬라이드 Next 버튼 //////////// */


    /* //////////// 공지사항 & 보도자료 멀티탭 ////////////*/

    $("#noticeBtn").click(function () {
        $("#noticeBtn").addClass("select");
        $("#noticeBtn").removeClass("noSelect");
        $("#newsBtn").addClass("noSelect");
        $("#newsBtn").removeClass("select");


        $("#notice").css({
            "display": "block"
        });
        $("#news").css({
            "display": "none"
        });
        $("#noticeBtn>.tabIcon2").css({
            "display": "none"
        });
    });

    $("#newsBtn").click(function () {
        $("#newsBtn").addClass("select");
        $("#newsBtn").removeClass("noSelect");
        $("#noticeBtn").addClass("noSelect");
        $("#noticeBtn").removeClass("select");

        $("#notice").css({
            "display": "none"
        });
        $("#news").css({
            "display": "block"
        });
    });
    /* //////////// 공지사항 & 보도자료 멀티탭 ////////////*/









    /* ////////// 푸터 슬라이드 버튼 조작 /////////*/

    /* 스타트 버튼 */


    $("#pasNstr>img:last-child").click(function () {
        clearInterval(slideGo);

        $(this).css({
            "display": "none"
        });
        $("#pasNstr>img:first-child").css({
            "display": "block"
        });


        $("#pasNstr img:first-child").css({
            "margin-bottom": "-4px"
        });
        $("#pasNstr img:last-child").css({
            "margin-bottom": "-5px"
        });
    });

    $("#pasNstr>img:first-child").click(function () {
        slideGo = setInterval(fnSlide, 3000);

        $(this).css({
            "display": "none"
        });
        $("#pasNstr>img:last-child").css({
            "display": "block"
        });
        $("#pasNstr img:first-child").css({
            "margin-bottom": "-4px"
        });
        $("#pasNstr img:last-child").css({
            "margin-bottom": "-5px"
        });
    });


    //    $("#pasNstr>img").click(function () {
    //        var srcPlay = "images/control_play.png";
    //        $(this).attr("src", srcPlay);
    //    });
    //    $("#pasNstr>img").click(function () {
    //        var srcPause = "images/control_pause.png";
    //        $(this).attr("src", srcPause);
    //    });




    /* Prev 버튼 */
    $("#left").click(function () {

        $("#shuttleFrame2 a:last-child").insertBefore("#shuttleFrame2 a:first-child");
        $("#shuttleFrame2").css({
            "margin-left": "-373px"
        });

        $("#shuttleFrame2").animate({
                "margin-left": "0"
            },
            400,
            "swing");

    });

    /* Next 버튼 */
    $("#right").click(function () {
        $("#shuttleFrame2").animate({
                "margin-left": "-373px"
            },
            400,
            "swing",
            function () {
                $("#shuttleFrame2 a:first-child").insertAfter("#shuttleFrame2 a:last-child");
                $("#shuttleFrame2").css({
                    "margin-left": "0"
                });
            });

    });
    /* ////////// 푸터 슬라이드 버튼 조작 /////////*/




    /* //////////// 푸터 슬라이드 쇼 ////////////*/

    var slideGo = setInterval(fnSlide, 3000);

    function fnSlide() {
        $("#shuttleFrame2").animate({
                "margin-left": "-373px"
            },
            1000,
            "swing",
            function () {
                $("#shuttleFrame2 a:first-child").insertAfter("#shuttleFrame2 a:last-child");
                $("#shuttleFrame2").css({
                    "margin-left": "0"
                });
            });
    }

    /* //////////// 푸터 슬라이드 쇼 ////////////*/


});
