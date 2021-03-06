// HTML 엘리먼트의 css 클래스를 조작하기 위한 유틸리티

var CSSClass = {};

CSSClass.is = function (e, c) {
    if (typeof e == "string") e = document.getElementById(e);

    var classes = e.className;
    if (!classes) return false;

    if (classes == c) return true;

    return e.className.search("\\b" + c + "\\b") != -1;
};

CSSClass.add = function(e, c) {
    if (typeof e == "string") e = document.getElementById(e);
    if (CSSClass.is(e, c)) return;
    if (e.className) c = " " + c;
    e. className += c;
};

CSSClass.remove = function(e, c) {
    if (typeof e == "string") e = document.getElementById(e);
    e.className = e.className.replace(new RegExp("\\b" + c + "\\b\\s*", "g"), "");
};