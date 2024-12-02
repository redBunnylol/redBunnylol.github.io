let myBtn = document.getElementById("btntop");

function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        myBtn.style.display = "block";
    } else {
        myBtn.style.display = "none";
    }
}

window.onscroll = function() {
    scrollFunction();
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}