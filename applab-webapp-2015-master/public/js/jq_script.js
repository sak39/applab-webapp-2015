$(function($){
    // ===============================
    // Headroom動作関係
    // ===============================
    $("header").headroom({
    "tolerance": 7,
    "offset": 205,
    "classes": {
    "initial": "animated",
    "pinned": "slideDown",
    "unpinned": "slideUp",
    "top": "headroom--top",
    "notTop": "headroom--not-top"
    }
    });
});

// 以下サイト引用部
    // ===============================
    // ハンバーガーアイコン動作関係
    // ===============================
///* spNav */
//$(window).on('load',function(){
//        var conteiner = $('#container');
//        var spNavBt = $('#hamburger');
//        var spNav = $('#spNav');
//        var flag = false;
//        var sdw = $('<div id="spNavSdw"></div>');
//        conteiner.append(sdw);
//
//        spNavBt.on('touchstart click', function() {
//           if(!flag) {
//               sdw.addClass('show');
//               spNavBt.addClass('on');
//               spNav.addClass('on');
//               conteiner.addClass('on');
//               flag = true;
//           } else {
//               sdw.removeClass('show');
//               spNavBt.removeClass('on');
//               spNav.removeClass('on');
//               conteiner.removeClass('on');
//               flag = false;
//           }
//        });
//
//        sdw.on('touchstart click', function() {
//           if(flag) {
//               sdw.removeClass('show');
//               spNavBt.removeClass('on');
//               conteiner.removeClass('on');
//               spNav.removeClass('on');
//               flag = false;
//           }
//        });
//
//        conteiner.on('touchmove', function(e) {
//        if(flag) {
//          e.preventDefault();
//        }
//        });
//});