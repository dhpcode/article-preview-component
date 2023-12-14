const elShare = document.querySelector('.share-img');
const elBottomBlock = document.querySelector('.article-container__bottom-bottom');

elShare.addEventListener('click', function() {
    elBottomBlock.classList.add('article-container__bottom--open');
});