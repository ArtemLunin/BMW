//  выбираем все ссылки, которые начинаются с #, но содержат не только ее саму
const smothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])')

smothScrollElems.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        // получим атрибут ссылки
        const id = link.getAttribute('href').substring(1);
        // сделаем плавную прокрутку к ссылке
        const blockScroll = document.getElementById(id).scrollIntoView({
            behavior: 'smooth'
        });
    });
})