/// <reference path="jquery-3.1.1.js" />

$(document).ready(function () {
    $('#slideNext').click(nextSlide);
    $('#slideBack').on('click', previousSlide);
    $('.icon').click(toggleCollapse);
    
    slideshowInit();
    window.setInterval(nextSlide, 5000)
    $("header").load("header.html");
    $("nav").load("nav.html") 
    $("footer").load("footer.html");
    menuInit(); 
});

var slideNum;
var n;
function slideshowInit() {
    slideNum = 1;
    n = $('.slide').length;
    $('#slide_1').fadeIn(1000);
   
    for (i = 2; i <= n; i++) {
        $('#slide_' + i).fadeOut(1000);
    }
}
function nextSlide() {
    var $slide = $('#slide_' + slideNum);
    var $next;
    $slide.fadeOut(2000);
    if (slideNum == n) {
        slideNum = 1;
        $next = $('#slide_1');
    } else {
        $next = $('#slide_' + (slideNum + 1));
        slideNum++;
    }
    $next.fadeIn(2000);
}

function previousSlide() {

    var $slide = $('#slide_' + slideNum);
    var $next;
    $slide.fadeOut(2000);
    if (slideNum == 1) {
        slideNum = n;
        $next = $('#slide_' + slideNum);
    } else {
        $next = $('#slide_' + (slideNum - 1));
        slideNum--;
    }
    $next.fadeIn(2000);
}

function toggleCollapse() {
    $('.navbar').toggleClass('collapse');
}

// function menuInit() {

// var menu = document.getElementById("menu");
// var btns = menu.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//     $("#main").load(this.attr('data'));
//   });
// }}



function menuInit() {
    var path = window.location.pathname;
    path = path.replace(/\/$/, "");
    path = decodeURIComponent(path);
    var href2 = ''
    $(".navbar a").each(function () {
        var href = $(this).attr('href');
        href2 = href;
        console.log('href=' + href);
        console.log(path.substring(0, href.length) === href);
        if (path.substring(0, href.length) === href) {
            $(this).closest('li').addClass('active');
            
            
        }
    });
    console.log(href2);
    console.log('path='+path);
    
    

}

