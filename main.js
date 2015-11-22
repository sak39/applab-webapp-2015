//==== snap.js ======
// 基本的な記述です。コンテンツ部分のID名を書いておきましょう。
var snapper = new Snap({
    element: document.getElementById('slide'), //この部分が動きます
    disable: 'left',
    minPosition: -200,
    transitionSpeed: 0.4
});
 
// 以下はフリックやドラッグだけでなく、ボタンでも開いたり閉じたりできるようにする記述です。
var addEvent = function addEvent(element, eventName, func) {
    if (element.addEventListener) {
        return element.addEventListener(eventName, func, false);
    } else if (element.attachEvent) {
        return element.attachEvent("on" + eventName, func);
    }
};
 
//==呼びたすボタン== ボタンのID名と揃えておきましょう。 
addEvent(document.getElementById('open-right'), 'click', function(){
    snapper.open('right')
});


//===== headroom.jp =====
var target = document.getElementById("base");
var headroom  = new Headroom(target);
headroom.init();
