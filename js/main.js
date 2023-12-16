const elBody = document.querySelector('#body');
const elShare = document.querySelector('.share-img');
const elBottomBlock = document.querySelector('.article-container__bottom-bottom');
const elShareBlockImg = document.querySelector('.share-block__img');

elShare.addEventListener('click', function() {
    elBottomBlock.classList.add('article-container__bottom--open');
});

// elBody.addEventListener('onclick', function() {
//     elBottomBlock.classList.remove('article-container__bottom--open');
// });

elShareBlockImg.addEventListener('click', function() {
    elBottomBlock.classList.remove('article-container__bottom--open');
});

