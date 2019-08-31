window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // модальное окно

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

      // аккордеон калькулятор

      const accordionCalc = () => {
   
        document.addEventListener('click', (event) => {
            const panelHeading = event.target.closest('.panel-heading');
            if (panelHeading) {
                event.preventDefault();
                const collapse = panelHeading.nextElementSibling;
                panelHeading.closest('.panel-group').querySelectorAll('.panel-default').forEach(now => {
                    now.classList.toggle('in', now === collapse && !now.classList.contains('in'));
                });
            }
        });
    
    };

    accordionCalc();
































});