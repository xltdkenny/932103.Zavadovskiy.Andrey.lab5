const wrapper = document.querySelector('.wrapper');
const newsBtns = document.querySelectorAll('.news_btn');
const popups = document.querySelectorAll('.popup_box');

newsBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const popup = document.querySelector(`.popup_box-${index + 1}`);
        popup.classList.add('opened');
    });
});

popups.forEach((popup) => {
    popup.addEventListener('click', () => {
        popup.classList.remove('opened');
    });
});
