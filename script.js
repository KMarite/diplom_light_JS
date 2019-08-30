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

    const accordion = () => {
        const accordionTwo = document.getElementById('accordion-two'),
            panel = accordionTwo.querySelectorAll('.panel-heading');

        panel.forEach((item) => {
            item.addEventListener('click', () => {
                item.classList.contains('in');
                let content = item.nextElementSibling;
                if (content.classList.toggle('in')) {
                    content.style.display = 'none';
                } else {
                    content.style.display = 'block';
                }
           
                panel.forEach((elem) => {
                    let contentOtherPanel = elem.nextElementSibling;
                    if(!(contentOtherPanel.classList.toggle('in'))) {
                        contentOtherPanel.style.display = 'none';
                    }
            
                });           

            });

        });












    };
    accordion();
































});