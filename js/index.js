window.onload = function() {
    var title = document.getElementById('name');
    var txt = new TextFx(title);
    // console.log(txt);
    txt.hide();
    title.style.opacity = 1;
    txt.show('fx3');
}

