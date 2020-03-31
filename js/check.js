let oranges = {
    name: 'oranges',
    amount: 4,
    price: 1.25
};
let whiskey = {
    name: 'whiskey',
    amount: 1,
    price: 22.50
};
let cheese = {
    name: 'cheese',
    amount: 2,
    price: 8.50
};
let redFish = {
    name: 'redFish',
    amount: 1,
    price: 14.20
};
let avocado = {
    name: 'avocado',
    amount: 3,
    price: 4
};
let hummus = {
    name: 'hummus',
    amount: 2,
    price: 5
};

let check = [];

check.push ( oranges, whiskey, cheese, redFish, avocado, hummus );

let totalAmount = 0;
let mostExpenciveProduct = '';
let averagePrice = 0;
let priceContainer = 1;
let checkList = '';

check.forEach(function(item, index, array) {
    totalAmount += item.price * item.amount;
    averagePrice += item.price;
    if ( priceContainer < item.price ){
        priceContainer = item.price;
        mostExpenciveProduct = item.name + " - " + priceContainer;
    };
    checkList = checkList + document.write("<li>" + item.name+ ": "+item.price+"$ * "+item.amount+"</li>");
});

averagePrice = ( averagePrice / check.length ).toFixed(2);


let totalCheck = ( document.write ( "<p></p>" ) + checkList + document.write ( "<li>Total amount:" + totalAmount + "$</li>" + "<li>Most expencive product: \
" + mostExpenciveProduct + "$ " + "</li>" + "<li>Average price:" + averagePrice + "$</li>" ));
document.write("<ul>");
totalCheck;
document.write("</ul>");
print(totalCheck);