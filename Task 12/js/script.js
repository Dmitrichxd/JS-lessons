window.addEventListener('DOMContentLoaded', function(){

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b){
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    })

    // Timer

    let deadline = '2020-05-30';

    function getTimeRemaining(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));
        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            function zeroCheck(num) {
                if (num <= 9) {
                    return '0' + num;
                } else return num;
            }
            hours.textContent = zeroCheck(t.hours);
            minutes.textContent = zeroCheck(t.minutes);
            seconds.textContent = zeroCheck(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadline);

    // modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    // class Options {
    //     constructor(height, width, bg, fontSize, textAlign) {
    //         this.height = height;
    //         this.width = width;
    //         this.bg = bg;
    //         this.fontSize = fontSize;
    //         this.textAlign = textAlign;
    //     }
    //     createElem () {
    //         let elem = document.createElement('div');
    //         elem.style.cssText = `height: ${this.height}px; width: ${this.width}px; font-size: ${this.fontSize}px; background: ${this.bg}; text-align: ${this.textAlign};`;
    //         return elem;
    //     }
    // }
    //
    // let divElement = new Options(100,200,'none',12,'left');
    // document.getElementById('timer').appendChild(divElement.createElem());
});