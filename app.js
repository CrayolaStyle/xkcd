$(document).ready(function() {
  // created vairable to hold comic number
    var comicNumber = randomIntFromInterval(1,600);
  // logging to see if my doc is ready
    console.log('ready')
  // my get request to my API
    $.get('https://galvanize-cors.herokuapp.com/https://xkcd.com/'+comicNumber+'/info.0.json')
  // after I execute my request to the API, THEN i am passing my data(this data was recieved on my initial get request) and manipulating it with a function
      .then(function(data) {
    // creating a vairable called header to hold the new <h3> I created with JQuery
        var header = $('<h3>');
    // creating a vairable called header to hold the new <img> I created with JQuery
        var imgHolder = $('<img>');
    // setting my new <h3>data.title</h3> text
        header.text(data.title);
    // targeting the <body> in the DOM and appending the <h3>data.title</h3> to the DOM.
        $('body').append(header);
    // targeting the <img> I created in the DOM  and setting the source <img src="data.img">
        imgHolder.attr("src", data.img);
    // targeting the <body> in the DOM and appending the <img src="data.img"> to the DOM.
        $('body').append(imgHolder);
    // Here is how we can target an element with out setting it to a vairable first and use it right away.
    // we target EVERY <p> and append comicNumber to it... <p>comicNumber</p>
        $('p').append(comicNumber);
  })
})
// created a funciton to randomize the comic number. Note I can call the funciton here due to a niffty property in JS called hoisting
function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
