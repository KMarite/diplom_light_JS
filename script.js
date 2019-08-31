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
            //     const  btn = document.querySelectorAll('.button.construct-btn');    
            //     btn.forEach((item) => {
            //     item.addEventListener('click', () => {
            //     let target = event.target;
            //     console.log(target);
            //     });
            //     }); 

        });

    };

    accordionTwo();

  























});