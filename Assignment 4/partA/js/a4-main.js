//Callum Dodge
//100229178
//July 10, 2018

var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)


function loadTableWithFilters() {
    
    var myRows = document.querySelector("#main-table-body");
    var row = "";
    
    if (filterType == "") {
        row = '<tr>';
    
        for (var cnt = 0; cnt < petData.length; cnt++) {
            if (filterAgeMin <= petData[cnt].age && filterAgeMax >= petData[cnt].age) {
                row += '<td>';
                row += '<img src="' + petData[cnt].image.src +
                    '" alt = "' + petData[cnt].image.alt +
                    '" width = "' + petData[cnt].image.width + '" height = "' + petData[cnt].image.height +
                    '">';
                row += '</td>';
        
                row += '<td>'; 
                row += '<h3>' + petData[cnt].name + '</h3>';
                row += '<p>' + petData[cnt].description + '<br>' + '<br>' + '</p>';
                row += '<p>' + "Age: " + petData[cnt].age + " Years Old" + '</p>';
                
                row += '</td>';
                row += '</tr>';
            }
        }
        myRows.innerHTML = row;
    }

    if (filterType == "Dog") {
        myRows.innerHTML = "";
        row = '<tr>';

        for (var cnt = 0; cnt < petData.length; cnt++) {
            if (petData[cnt].type == "dog") {
                
                if (filterAgeMin <= petData[cnt].age && filterAgeMax >= petData[cnt].age) {
                    row += '<td>';

                    row += '<img src="' + petData[cnt].image.src +
                            '" alt = "' + petData[cnt].image.alt + 
                            '" width = "' + petData[cnt].image.width + '" height = "' + petData[cnt].image.height +
                            '">';
                    row += '</td>';
        
                    row += '<td>'; 
                    row += '<h3>' + petData[cnt].name + '</h3>';
                    row += petData[cnt].description + '<br>' + '<br>';
                    row += '<p>' + "Age: " + petData[cnt].age + " Years Old" + '</p>';    
                    row += '</td>';
                    row += '</tr>';
                }
                
            }
        }
        myRows.innerHTML = row;
    }

    if (filterType == "Cat") {
        myRows.innerHTML = "";
        row = '<tr>';

        for (var cnt = 0; cnt < petData.length; cnt++) {
            if (petData[cnt].type == "cat") {
                   
                if (filterAgeMin <= petData[cnt].age && filterAgeMax >= petData[cnt].age) {
                    row += '<td>';

                    row += '<img src="' + petData[cnt].image.src +
                        '" alt = "' + petData[cnt].image.alt +
                        '" width = "' + petData[cnt].image.width + '" height = "' + petData[cnt].image.height +
                        '">';
                    row += '</td>';
        
                    row += '<td>'; 
                    row += '<h3>' + petData[cnt].name + '</h3>';
                    row += petData[cnt].description + '<br>' + '<br>';
                    row += '<p>' + "Age: " + petData[cnt].age + " Years Old" + '</p>';
    
                    row += '</td>';
                    row += '</tr>';
                }
            }
        }
        myRows.innerHTML = row;
    }

    if (filterType == "Bird") {
        myRows.innerHTML = "";
        row = '</tr>';

        for (var cnt = 0; cnt < petData.length; cnt++) {
            if (petData[cnt].type == "bird") {
                   
                if (filterAgeMin <= petData[cnt].age && filterAgeMax >= petData[cnt].age) {
                    row += '<td>';

                    row += '<img src="' + petData[cnt].image.src +
                        '" alt = "' + petData[cnt].image.alt +
                        '" width = "' + petData[cnt].image.width + '" height = "' + petData[cnt].image.height +
                        '">';
                    row += '</td>';
        
                    row += '<td>'; 
                    row += '<h3>' + petData[cnt].name + '</h3>';
                    row += petData[cnt].description + '<br>' + '<br>';
                    row += '<p>' + "Age: " + petData[cnt].age + " Years Old" + '</p>';
                    
                    row += '</td>';
                    row += '</tr>';
                }
                
            }
        }
        myRows.innerHTML = row;
    }
}

function filterDog() {
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    filterType = "Dog";
    loadTableWithFilters();
}

function filterCat() {
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    filterType = "Cat";
    loadTableWithFilters();
}

function filterBird() {
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    filterType = "Bird";
    loadTableWithFilters();
}

function filter_zero_1() {
    filterAgeMin = 0;
    filterAgeMax = 1;
    loadTableWithFilters();
}

function filter_1_3() {
    filterAgeMin = 1;
    filterAgeMax = 3;
    loadTableWithFilters();
}

function filter_4_plus() {
    filterAgeMin = 4;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}

function filterAllPets() {
    filterType = "";
    filterTypeMin = 0;
    filterTypeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}

window.onload = function() {
    filterAllPets();
}