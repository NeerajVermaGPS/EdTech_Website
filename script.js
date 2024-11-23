function opensrch() {
    document.getElementById("srchbarid").style.height = "47px";
}
function closesrch() {
    document.getElementById("srchbarid").style.height = "0px";
}
function menuopen() {
    document.getElementById("mopen").style.display = "none";
    document.getElementById("mclose").style.display = "block";
    document.getElementById("menudiv").style.height = "325px";
}
function menuclose() {
    document.getElementById("mopen").style.display = "block";
    document.getElementById("mclose").style.display = "none";
    document.getElementById("menudiv").style.height = "0";
}
function callopen() {
    document.getElementById("copen").style.display = "none";
    document.getElementById("cclose").style.display = "block";
    document.getElementById("callid").style.height = "70px";
}
function callclose() {
    document.getElementById("copen").style.display = "block";
    document.getElementById("cclose").style.display = "none";
    document.getElementById("callid").style.height = "0";
}
window.onscroll = function(){hideApply()};
function hideApply() {
    if (document.documentElement.scrollTop > 2500) {
        document.getElementById("appid").style.opacity = "0";
    } else {
        document.getElementById("appid").style.opacity = "1";
    }
}