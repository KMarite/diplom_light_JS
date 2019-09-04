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


    // аккордеон 

    const accordion = () => {

        document.addEventListener('click', (event) => {
            const target = event.target,
                heading = target.closest('.panel-heading'),
                nextStep = target.closest('.construct-btn');
    
            const collapse = heading ? heading.nextElementSibling : 
                nextStep ? target.closest('.panel').nextElementSibling.querySelector('.panel-collapse') : null;
    
            if (collapse) {
                event.preventDefault();
                target.closest('.panel-group').querySelectorAll('.panel-collapse').forEach(n => {
                    n.classList.toggle('in', n === collapse && !n.classList.contains('in'));
                });
            }
        });
        
    };

    accordion();

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

 // модальнoe окнo consultation

 const consultation = () => {

    const directorBtn = document.querySelectorAll('.director-btn'),
        popupConsultation = document.querySelector('.popup-consultation'),
        popupClose = popupConsultation.querySelector('.popup-close'),
        popupContent = popupConsultation.querySelector('.popup-content');

        directorBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            popupConsultation.style.display = 'block';
        });
    });

    popupClose.addEventListener('click', () => {
        popupConsultation.style.display = 'none';
        event.preventDefault();

    });
    popupConsultation.addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('popup-close')) {
            popupConsultation.style.display = 'none';
            popupContent.removeAttribute('style');
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                popupConsultation.style.display = 'none';
            }
        }
    });

 };
 consultation();

  




});