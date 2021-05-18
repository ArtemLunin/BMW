//  способ обращения к DOM после загрузки страницы
// document.addEventListener('DOMContentLoaded', () => {

// });

const featureLinkElems = document.querySelectorAll('.feature__link');
const featureSubElems = document.querySelectorAll('.feature-sub');

// перебирать элементы можем в цикле for, и методом forEach
for (let i = 0; i< featureLinkElems.length; i++) {
    featureLinkElems[i].addEventListener('click', () => {
        let needToggle = featureSubElems[i].classList.contains('hidden');
        featureSubElems.forEach((featureSubElem) => {
            featureSubElem.classList.add('hidden');
        });
        featureLinkElems.forEach((featureLinkElem) => {
            featureLinkElem.classList.remove('feature__link_active');
        });
        if (needToggle) {
            featureSubElems[i].classList.remove('hidden');
            featureLinkElems[i].classList.add('feature__link_active');
            needToggle = false;
        }
    });
}