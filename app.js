$(document).ready(function() {
    console.log('ready')
    const variable = randomIntFromInterval(1,600);
    $.get('https://galvanize-cors.herokuapp.com/https://xkcd.com/'+variable+'/info.0.json').then(function(data) {
    console.log(data);
    const imgHolder = $('<img>');
    imgHolder.attr("src", data.img)
    $('body').append(imgHolder)

  })


})
function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}