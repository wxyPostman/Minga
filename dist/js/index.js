$(function() { //加载进度

    var img = $("img");
    var imgSize = $("img").length;
    var num = 0;
    img.each(function(i) {
        var oImg = new Image();
        oImg.onload = function() {
            oImg.onload = null;
            num++;
            $('#preloader h2').html(~~(num / imgSize * 100) + "%");
            if (imgSize == num) {
                $('#preloader').fadeOut(500);
            }
        };
        oImg.src = img[i].src;
    });
});

window.onload = function() {
    var play = document.getElementById('musicMove');
    var bgm = document.getElementById('musicMing');
    play.onclick = function() {

        if (bgm.paused) {
            bgm.play();
            $("#musicMove").css("background", "url(images/musicClose.jpg) no-repeat");
            $("#musicMove").css("background-size", "cover");
        } else {
            bgm.pause();
            $("#musicMove").css("background", "url(images/music.jpg) no-repeat");
            $("#musicMove").css("background-size", "cover");
        }
    }
}