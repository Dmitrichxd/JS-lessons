let money, time;

function start() {
    money = +prompt("Ваш бюджет в месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет в месяц?", "");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

function chooseExpenses() {
    for( let i = 0; i < 2; i++ ) {
        let exp = prompt("Введите обязательную статью расходов в этом месяце", ""),
            cost = prompt("Во сколько обойдется?", "");
        if (typeof(exp) === "string" && typeof(exp) != null && typeof(exp) != null
            && exp !== '' && cost !== '' && exp.length < 50 ) {
            appData.expenses[exp] = cost;
        } else {
            alert("Данные не сохранились, повторите ввод");
            i--;
        }
    }
}
chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Бюджет за 1 день:" + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка.');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка.');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка.');
    } else {
        console.log('Произошла ошибка.');
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накомлений?", ""),
            percent = +prompt("Под какой процент?", "");
        appData.monthIncome = save / 100 / 10 * percent;
        alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {
    for( let i = 1; i < 4; i++ ) {
        let exp = +prompt("Статья необязательных расходов?", "");
        if (typeof(exp) === "number"  && typeof(exp) != null && typeof(exp) != null
            && exp !== '' && exp.length < 50 ) {
            appData.optionalExpenses[i] = cost;
        } else {
            alert("Данные не сохранились, повторите ввод");
            i--;
        }
    }
}
