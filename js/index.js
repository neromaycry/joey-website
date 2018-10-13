window.onload = function () {

    var title = document.getElementById('name');
    var txt = new TextFx(title);
    // console.log(txt);
    txt.hide();
    title.style.opacity = 1;
    txt.show('fx3');
}

var isPC = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
console.log(isPC);

var bg = document.getElementById('background');
bg.style.backgroundImage = isPC ? "url('./assets/msp_1110_0205.jpg')" : "url('./assets/msp_0903_3048.jpg')";
