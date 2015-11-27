//===== headroom.jp =====
$(document).ready(function () {
    $('.drawer').drawer();
});


//===== headroom.jp =====
var target = document.getElementById("target");
var headroom  = new Headroom(target, {
    offset: 10,
    tolerance: 10,
    classes: {
        initial: "initial",
        pinned: "pinned",
        unpinned: "unpinned"
    },
    onPin: function() {console.log("onPin")},
    onUnpin: function() {console.log("onUnpin")},
});
headroom.init();

