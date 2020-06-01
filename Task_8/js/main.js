let buttonStart = document.getElementById('start'),
    values = document.querySelectorAll('body > div > div.main > div.result > div.result-table > div[class*="-value"]'),
    inputFields = document.getElementsByClassName('expenses-item'),
    approveButton1 = document.getElementsByTagName('button')[0],
    approveButton2 = document.getElementsByTagName('button')[1],
    calculateButton = document.getElementsByTagName('button')[2],
    optionalExpenses = document.querySelectorAll('body > div > div.main > div.data > input.optionalexpenses-item'),
    possibleIncome = document.getElementById('income'),
    savings = document.getElementById('savings'),
    sum = document.getElementById('sum'),
    percent = document.getElementById('percent'),
    year = document.querySelector('body > div > div.main > div.result > div.time-data > div.year > input'),
    month = document.querySelector('body > div > div.main > div.result > div.time-data > div.month > input'),
    day = document.querySelector('body > div > div.main > div.result > div.time-data > div.day > input'),
    money, time;

approveButton1.disabled = true;
approveButton2.disabled = true;
calculateButton.disabled = true;

buttonStart.addEventListener('click', function(){
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет в месяц?", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет в месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    values[0].textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();
    approveButton1.disabled = false;
    approveButton2.disabled = false;
    calculateButton.disabled = false;
});

approveButton1.addEventListener('click', function() {
    let sum = 0;

    for( let i = 0; i < inputFields.length; i++ ) {
        let exp = inputFields[i].value,
            cost = inputFields[++i].value;

        if ((typeof (exp)) != null && (typeof (cost)) != null
            && exp !== '' && cost !== '' && exp.length < 50) {
            appData.expenses[exp] = cost;
            sum += +cost;
        } else {
            i--;
        }
    }
    values[3].textContent = sum;
});

approveButton2.addEventListener('click', function() {
    for( let i = 0; i < optionalExpenses.length; i++ ) {
        let exp = optionalExpenses[i].value;
        if (typeof(exp) != null && exp !== '' && exp.length < 50 ) {
            appData.optionalExpenses[i] = exp;
            values[4].textContent += appData.optionalExpenses[i] + ' ';
        } else {
            i--;
        }
    }
})

calculateButton.addEventListener('click', function () {

    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - values[3].textContent) / 30).toFixed();
        values[1].textContent += appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            values[2].textContent = 'Минимальный уровень достатка';
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <= 2000) {
            values[2].textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay > 2000) {
            values[2].textContent = 'Высокий уровень достатка';
        } else {
            values[2].textContent = 'Произошла ошибка';
        }
    } else {
        values[1].textContent = 'Произошла ошибка';
    }
})

possibleIncome.addEventListener('input', function () {
    let items = possibleIncome.value;
    appData.income = items.split(',');
    values[5].textContent = appData.income;
})

savings.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
})

sum.addEventListener('input', function () {
    if (appData.savings == true) {
        let sumValue = +sum.value,
            percentValue = +percent.value;
        appData.monthIncome = sumValue / 100 / 12 * percentValue;
        appData.yearIncome = sumValue / 100 * percentValue;
        values[6].textContent = appData.monthIncome.toFixed(1);
        values[7].textContent = appData.yearIncome.toFixed(1);
    }
})

percent.addEventListener('input', function () {
    if (appData.savings == true) {
        let sumValue = +sum.value,
            percentValue = +percent.value;
        appData.monthIncome = sumValue / 100 / 12 * percentValue;
        appData.yearIncome = sumValue / 100 * percentValue;
        values[6].textContent = appData.monthIncome.toFixed(1);
        values[7].textContent = appData.yearIncome.toFixed(1);
    }
})

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};
