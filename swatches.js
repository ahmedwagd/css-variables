var swatches = document.querySelectorAll('.swatches span');
var root = document.querySelector(':root');

swatches.forEach((swatch) => {
    swatch.addEventListener('click', (e) => {
        root.style.setProperty('--theme-color', e.target.style.background);
        console.log(e.target.style.background)
    });
});
// var all = document.querySelectorAll('*');

// all.forEach((one) => {
//     one.addEventListener('click', function (e) {
//         console.log(getComputedStyle(e.target).fontSize)
//         one.style.setProperty('font-size', '+50px')
//         console.log(getComputedStyle(e.target).fontSize)
//     })
// })
