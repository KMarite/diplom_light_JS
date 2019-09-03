window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // модальнoe окнo popup-call

    const togglePopup = () => {

        const callBtn = document.querySelectorAll('.call-btn'),
            popupCall = document.querySelector('.popup-call'),
            popupClose = document.querySelector('.popup-close'),
            popupContent = popupCall.querySelector('.popup-content');

        callBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popupCall.style.display = 'block';
            });
        });
        popupClose.addEventListener('click', () => {
            popupCall.style.display = 'none';
            event.preventDefault();

        });
        popupCall.addEventListener('click', (event) => {
            let target = event.target;
            if (target.classList.contains('popup-close')) {
                popupCall.style.display = 'none';
                popupContent.removeAttribute('style');
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    popupCall.style.display = 'none';
                }
            }
        });

    };
    togglePopup();

    // модальнoe окнo popup-check

    const check = () => {

        const checkBtn = document.querySelectorAll('.check-btn'),
            popupCheck = document.querySelector('.popup-check'),
            popupClose = popupCheck.querySelector('.popup-close'),
            popupContent = popupCheck.querySelector('.popup-content');

        checkBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popupCheck.style.display = 'block';
            });
        });

        popupClose.addEventListener('click', () => {
            popupCheck.style.display = 'none';
            event.preventDefault();

        });
        popupCheck.addEventListener('click', (event) => {
            let target = event.target;
            if (target.classList.contains('popup-close')) {
                popupCheck.style.display = 'none';
                popupContent.removeAttribute('style');
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    popupCheck.style.display = 'none';
                }
            }
        });

    };
    check();

    // модальнoe окнo popup-discount

    const discount = () => {

        const discountBtn = document.querySelectorAll('.discount-btn'),
            popupDiscount = document.querySelector('.popup-discount'),
            popupClose = popupDiscount.querySelector('.popup-close'),
            popupContent = popupDiscount.querySelector('.popup-content');

        discountBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popupDiscount.style.display = 'block';
            });
        });

        popupClose.addEventListener('click', () => {
            popupDiscount.style.display = 'none';
            event.preventDefault();

        });
        popupDiscount.addEventListener('click', (event) => {
            let target = event.target;
            if (target.classList.contains('popup-close')) {
                popupDiscount.style.display = 'none';
                popupContent.removeAttribute('style');
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    popupDiscount.style.display = 'none';
                }
            }
        });

    };
    discount();


    // аккордеон 2

    const accordionTwo = () => {

        document.addEventListener('click', (event) => {
            const panelHeading = event.target.closest('.panel-heading');
            if (panelHeading) {
                event.preventDefault();
                const collapse = panelHeading.nextElementSibling;
                panelHeading.closest('.panel-group').querySelectorAll('.panel-collapse').forEach(now => {
                    now.classList.toggle('in', now === collapse && !now.classList.contains('in'));
                });
            }          
        });
    };

    accordionTwo();

    // кнопка больше

    const buttonMore = () => {
        const buttonAdd = document.querySelector('.add-sentence-btn');

        buttonAdd.addEventListener('click', (event) => {
            event.target.parentNode.querySelectorAll('.hidden, .visible-sm-block').forEach(i => {
                i.classList.remove('hidden');
                i.classList.remove('visible-sm-block');
            });
            buttonAdd.style.display = 'none';
        });

    };
    buttonMore();























});