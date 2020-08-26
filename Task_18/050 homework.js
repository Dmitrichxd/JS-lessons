let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter((emp) => {
    return emp.length > 0 && emp.length != ''
});
employersNames = employersNames.map((item) => item.toLowerCase().trim());

let sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

function calcCash(own = 0, arg) {
    let total = 0;
    for (let i = 0; i < arg.length; i++) {
        total += +arg[i];
    }
    return total;
}

let money = calcCash(null, sponsors.cash);

function makeBusiness(owner, director = 'Victor', cash, emp) {
    let sumSponsors = [...sponsors.eu, ...sponsors.rus, 'unexpected sponsor'];
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}
    And we have a sponsors:
    sumSponsors
    Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.`);
}
makeBusiness.apply(null, ['Sam', null, money, employersNames]);