//===== headroom.jp =====
$(document).ready(function () {
    $('.drawer').drawer();
});

//===== headroom.jp =====
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
