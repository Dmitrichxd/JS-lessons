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
    savings: false,
    chooseExpenses: function () {
        for( let i = 0; i < 2; i++ ) {
            let exp = prompt("Введите обязательную статью расходов в этом месяце", ""),
                cost = prompt("Во сколько обойдется?", "");
            if (typeof (exp) === "string" && typeof (exp) != null && typeof (exp) != null
                && exp !== '' && cost !== '' && exp.length < 50) {
                this.expenses[exp] = cost;
            } else {
                alert("Данные не сохранились, повторите ввод");
                i--;
            }
        }
    },
    detectDayBudget: function () {
        this.moneyPerDay = (this.budget / 30).toFixed();
        alert("Бюджет за 1 день:" + this.moneyPerDay);
    },
    detectLevel: function () {
        if (this.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка.');
        } else if (this.moneyPerDay > 100 && this.moneyPerDay < 2000) {
            console.log('Средний уровень достатка.');
        } else if (this.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка.');
        } else {
            console.log('Произошла ошибка.');
        }
    },
    checkSavings: function () {
        if (this.savings == true) {
            let save = +prompt("Какова сумма накомлений?", ""),
                percent = +prompt("Под какой процент?", "");
            this.monthIncome = save / 100 / 10 * percent;
            alert("Доход в месяц с Вашего депозита: " + this.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for( let i = 1; i < 4; i++ ) {
            let exp = prompt("Статья необязательных расходов?", "");
            if (typeof(exp) != null && exp !== '' && exp.length < 50 ) {
                this.optionalExpenses[i] = exp;
            } else {
                alert("Данные не сохранились, повторите ввод");
                i--;
            }
        }
    },
    chooseIncome: function () {
        let items;
        do {
            items = prompt('Что принесет дополнительный доход? (через запятую)', '');
        } while (items == '' || typeof(items) != 'string' || items == null );
        this.income = items.split(',');
        this.income.push(prompt('Может что-то еще?',''));
        this.income.sort();
        this.income.forEach(function (key, i) {
            console.log("Способы доп. заработка: " + (i+1) + ') ' + key)
        });
    }
};
for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key);
}
