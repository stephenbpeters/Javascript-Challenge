// Assign the data from `data.js` to a descriptive variable
var people = data;

var ufos = otherData;

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#patient-form-input");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log('inputValue = ', inputValue);
  // console.log(people);

  // let's get the shape input field text
   // Select the input element and get the raw HTML node
   var inputElement2 = d3.select("#ufo-shape-input");

   // Get the value property of the input element
   var inputValue2 = inputElement2.property("value");
 
   console.log('inputValue2 = ', inputValue2);

  // let's get the date input field text
   // Select the input element and get the raw HTML node
   var inputElement3 = d3.select("#ufo-date-input");

   // Get the value property of the input element
   var inputValue3 = inputElement3.property("value");
 
   console.log('inputValue3 = ', inputValue3);

  // let's get the city input field text
   // Select the input element and get the raw HTML node
   var inputElement4 = d3.select("#ufo-city-input");

   // Get the value property of the input element
   var inputValue4 = inputElement4.property("value");
 
   console.log('inputValue4 = ', inputValue4);

  // let's get the country input field text
   // Select the input element and get the raw HTML node
   var inputElement5 = d3.select("#ufo-country-input");

   // Get the value property of the input element
   var inputValue5 = inputElement5.property("value");
 
   console.log('inputValue5 = ', inputValue5);


  var filteredOtherData = ufos.filter(ufo => ufo.state === inputValue);

  // run a second filter
  var filteredOtherData2 = filteredOtherData.filter(ufo => ufo.shape === inputValue2);

  // run a third filter
  var filteredOtherData3 = filteredOtherData2.filter(ufo => ufo.datetime === inputValue3);

    // run a fourth filter
    var filteredOtherData4 = filteredOtherData3.filter(ufo => ufo.city === inputValue4);

    // run a fifth filter
    var filteredOtherData5 = filteredOtherData4.filter(ufo => ufo.country === inputValue5);  

  // Then, select the unordered list element by class name
  var list = d3.select(".summary");

  // remove any children from the list to
  list.html("");

// print out our data
  // Get a reference to the table body
var tbody = d3.select("tbody");

// let's see if we can clear the table with this command:
tbody.html("");


// here's our working one-filter print out stuff:
  // filteredOtherData.forEach(item => {
  //   var row = tbody.append("tr");
  //   Object.entries(item).forEach(([key, value]) => {
  //     var cell = row.append("td");
  //     cell.text(value);
  //   });
  // });

  filteredOtherData5.forEach(item => {
    var row = tbody.append("tr");
    Object.entries(item).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

};
