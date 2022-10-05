let a1 = document.querySelector(".rotate");
function showMessage() {
    a1.classList.toggle("togle");
}
setInterval(showMessage, 1500);

let a2 = document.querySelectorAll(".sH2");
for (let i of a2) {
    function showMessage() {
        i.classList.toggle("togle1");
    }
    setInterval(showMessage, 1500);
}



(function () {
    let square = document.querySelector('.bylj');
    let square2 = document.querySelector('.ImgfooterLogo');


    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
                return;
            }
            if (entry.isIntersecting) {
                entry.target.classList.add('bylj-animation');
            }
        });
    });
    observer.observe(square);
})();

(function () {
    let square = document.querySelector('.ImgfooterLogo');

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
                return;
            }
            if (entry.isIntersecting) {
                entry.target.classList.add('ImgfooterLogo-animation');
            }
        });
    });
    observer.observe(square);
})();

let unicode = document.querySelector(".u8594").addEventListener("click", textYes);
        let none = document.querySelector(".none");
        function textYes(){
            none.classList.toggle("none");
        }