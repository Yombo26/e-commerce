// show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change icon
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'fa-light fa-plus') {
            icon.className = "fa-solid fa-minus";
        } else (
            icon.className = "fa-light fa-plus"
        )
    })
})

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

/*sproduct js */
var MainImge = document.getElementById('mainimg');
var smalling = document.getElementsByClassName('small-img');

smalling[0].onclick = function() {
    MainImge.src = smalling[0].src;
}
smalling[1].onclick = function() {
    MainImge.src = smalling[1].src;
}
smalling[2].onclick = function() {
    MainImge.src = smalling[2].src;
}
smalling[3].onclick = function() {
    MainImge.src = smalling[3].src;
}
