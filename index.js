document.addEventListener('click', function (event) {
    var target = event.target;
    var menu = document.querySelector('.menu');
    var btn = target.classList.contains('services-button');

    if (!menu.contains(target) && !btn) {
        menu.style.display = 'none';
    }
});

let btn = document.querySelector('.services-button');
btn.addEventListener('click', function () {
    var menu = document.querySelector('.menu');
    if (!menu.classList.contains('on')) {
        menu.style.display = 'block';
        menu.classList.add('on');
    } else {
        menu.style.display = 'none';
        menu.classList.remove('on');
    }
});
