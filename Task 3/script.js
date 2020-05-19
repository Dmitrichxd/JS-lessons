let money = +prompt("Ваш бюджет в месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

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
appData.moneyPerDay = appData.budget / 30;
alert("Бюджет за 1 день:" + appData.moneyPerDay);
if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка.');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка.');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка.');
} else {
    console.log('Произошла ошибка.');
}
