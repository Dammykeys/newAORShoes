var toggleStatus = 0;
var button1 = document.getElementById('navButton__button1');
var button2 = document.getElementById('navButton__button2');
// var first = jQuery(".first");
// var second = jQuery(".second");

function toggleMenu() {
    if (toggleStatus == 0) {
        button1.style.display = 'none';
        button2.style.display = 'block';
        toggleStatus = 1;
    } else if (toggleStatus == 1) {
        button2.style.display = 'none';
        button1.style.display = 'block';
        toggleStatus = 0;
    };
};


//Service Worker
if (navigator.serviceWorker) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').then(reg => {
        }).catch(swErr => {
            console.log(`Service Worker Installation Error: ${swErr}}`)
        });
    });
}