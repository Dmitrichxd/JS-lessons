let money = +prompt("Ваш бюджет в месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    savings: false
};
let exp = prompt("Введите обязательную статью расходов в этом месяце", "");
let cost = prompt("Во сколько обойдется?", "");
appData.expenses[exp] = cost;

exp = prompt("Введите обязательную статью расходов в этом месяце", "");
cost = prompt("Во сколько обойдется?", "");
appData.expenses[exp] = cost;
alert("Бюджет за 1 день:" + appData.budget / 30);
console.log(appData.expenses);
console.log(appData.timeData);