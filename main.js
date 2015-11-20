// 基本的な記述です。コンテンツ部分のID名を書いておきましょう。
var snapper = new Snap({
    element: document.getElementById('content'),
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
 
// ボタンのID名と揃えておきましょう。
addEvent(document.getElementById('open-right'), 'click', function(){
    snapper.open('right');
});

