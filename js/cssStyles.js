let cssStyles = [];
let textAlign = {
    name: 'text-align',
    value: 'center'
};
let color = {
    name: 'color',
    value: '#5474fd'
};

let fontSize = {
    name: 'font-size',
    value: '240px'
};

let textDecoration = {
    name: 'text-decoration',
    value: 'underline'
};

cssStyles.push (textAlign, color, fontSize, textDecoration);

let userText = prompt ( 'Enter some text and programm will transform it with some css styles.' );
let textTransform = function(text){
    document.write ( '<p style="'+cssStyles[0].name+': '+cssStyles[0].value+'; '+cssStyles[1].name+': '+cssStyles[1].value+'; '+cssStyles[2].name+': '+cssStyles[2].value+'; '+cssStyles[3].name+': '+cssStyles[3].value+'">'+text+'</p>' );
}
textTransform(userText);