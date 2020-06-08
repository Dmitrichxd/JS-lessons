
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    function calc() {
        return new Promise(function (resolve, reject){
        let request = new XMLHttpRequest();

        request.open('GET', 'js/current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();

        request.addEventListener('readystatechange', function() {
            if (request.readyState === 4 && request.status == 200) {
                resolve(this.response)
            } else {
                reject()
            }
        });
        })
    }
    calc()
        .then(response => {
            inputUsd.value = inputRub.value / JSON.parse(response).usd
        })
        .catch(() => inputUsd.value = "Что-то пошло не так!")

});