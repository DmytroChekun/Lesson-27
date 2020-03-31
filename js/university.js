
let audiences = [];

let audience1 = {
    name: "number1",
    places: 18,
    faculty: "philological",
    facultyID: 1
}
let audience2 = {
    name: "number2",
    places: 15,
    faculty: "historical",
    facultyID: 2
}
let audience3 = {
    name: "number3",
    places: 14,
    faculty: "philological",
    facultyID: 1
}
let audience4 = {
    name: "number4",
    places: 17,
    faculty: "historical",
    facultyID: 2
}

let group = {
    name: "english department",
    studentsQuantity: 18,
    faculty: "philological",
    facultyID: 1
}


audiences.push ( audience1, audience2, audience3, audience4 );

let audiencesDisplay = '';
audiences.forEach ( function( item, index, array ){
    audiencesDisplay += ( item.name+'\n' );
});
alert( "Audiences in our honorable univercity:\n" + audiencesDisplay );



let philologicalAudiences = '';
let historicalAudiences = '';

let facultyAudiencesSearch = function(){
    for (i=0; i < audiences.length; i++){
        if (audiences[i].faculty == philological){
            philologicalAudiences =+ "audiences[i].name";
        }else if(audiences[i].faculty == historical){
            historicalAudiences =+ "audiences[i].name";
        }
    }
}
facultyAudiencesSearch;
audiences.forEach ( function( item, index, array ){
    if ( item.facultyID == 2 ){
        historicalAudiences = historicalAudiences + item.name + "\n";
    } else if ( item.facultyID == 1 ){
        philologicalAudiences = philologicalAudiences + item.name + "\n";
    }
});

let userFaculty = prompt( 'Enter the faculty, and i display relevant audiences for this.' );

if ( userFaculty == 'historical' ) {
    alert ( historicalAudiences );
}else if( userFaculty == 'philological' ) {
    alert ( philologicalAudiences );
}else{
    alert( 'This faculty is not exist. *-*' )
};

alert("We have " + group.name + " group with " + group.studentsQuantity + " students. Theirs faculty is " +group.faculty+". Let`s see which audiences comparible with that group.");

let relevantAudiences = '';

audiences.forEach ( function( item, index, array ){
    if (item.facultyID == group.facultyID && item.places >= group.studentsQuantity){
        relevantAudiences = relevantAudiences + item.name+"\n";
    }
    
});

alert("There is list of audiences comparible with that group: \n"+relevantAudiences);


function sortByPlaces(audiences) {
    audiences.sort((a, b) => a.places > b.places ? 1 : -1);
  };

sortByPlaces(audiences);

let sortedByPlaces = '';
audiences.forEach ( function( item, index, array ){
    sortedByPlaces += ( item.name+'\n' );
});
alert( "Audiences sorted by places:\n" + sortedByPlaces );

function sortByAlphabet(audiences) {
    audiences.sort((a, b) => a.name > b.name ? 1 : -1);
  };

sortByAlphabet(audiences);

let sortedByAlphabet = '';
audiences.forEach ( function( item, index, array ){
    sortedByAlphabet += ( item.name+'\n' );
});
alert( "Audiences sorted by alphabet:\n" + sortedByAlphabet );

