const BackToTop = document.getElementById("btn_BackToTop");

BackToTop.addEventListener("click", function () {
    window.scrollTo ({
        top: 0,
        behavior: "smooth"
    });
});
