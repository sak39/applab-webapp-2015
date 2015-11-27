var target = document.getElementById("target");
var headroom  = new Headroom(target,{
    offset: 100,
    tolerance: 10,
    classes: {
        initial: "headroom",
        pinned: "headroom--pinned",
        unpinned: "headroom--unpinned"
    },
});
headroom.init();
