let oranges = {
    name: 'oranges',
    amount: 4,
    bought: false
};
let whiskey = {
    name: 'whiskey',
    amount: 1,
    bought: false
};
let cheese = {
    name: 'cheese',
    amount: 2,
    bought: false
};
let redFish = {
    name: 'redFish',
    amount: 1,
    bought: false
};
let avocado = {
    name: 'avocado',
    amount: 3,
    bought: true
};
let hummus = {
    name: 'hummus',
    amount: 2,
    bought: false
};

let shoppingList = [];

shoppingList.push ( oranges, whiskey, cheese, redFish, avocado, hummus );

let newListItemName = prompt( 'Enter the name of product that you want to buy.' );
let newListItemAmount = prompt( 'Enter amount of this product.' );

let itemExists = false;
shoppingList.forEach(function(item, index, array) {
    if( newListItemName == item.name ){
        itemExists = true;
        item.amount += parseInt( newListItemAmount );
        return;
   }
})

if(!itemExists) {
    shoppingList.push ( {
        name:newListItemName,
        amount: parseInt( newListItemAmount ),
        bought: false
    });
}
let shoppingListDisplay = function(){
    shoppingList.forEach ( function( item, index, array ) {
        if (item.bought == false){
            document.write ( '<li style="color:red;">' +item.name+ ': ' +item.amount+ '</li>' );

        }else if ( item.bought == true ){
            document.write ( "<li>" +item.name+ ': ' +item.amount+ "</li>" );

        }
        shoppingList.sort ((prev, next) => {
            if ( prev.bought < next.bought ) return -1;
            if ( prev.bought < next.bought ) return 1;
        });

    });
};
// let markAsBought = '';
// shoppingList.forEach ( function( item, index, array ) {
//     markAsBought = prompt( "enter the name of product that you allready buy" );
//     if ( markAsBought == item.name ){
//         item.bought = true;
//     }
// })
document.write( "<ol>" );
shoppingListDisplay();
document.write( "</ol>" );

