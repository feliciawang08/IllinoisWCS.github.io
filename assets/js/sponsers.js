$(document).ready(function() {
    // $('a.page-scroll').bind('click', function(event) {
    //   var $anchor = $(this);
    //   $('html, body').stop().animate({
    //       scrollTop: $($anchor.attr('href')).offset().top
    //   }, 1500, 'easeInOutExpo');
    //   event.preventDefault();
    // });
    $.getJSON("../assets/js/sponsers.json", function(data) {
        var linksTemplate = Mustache.render($('#sponserCards').html(), data);
        $('#sponsersDisplay').html(linksTemplate);
    });

    Handlebars.registerHelper('ifItemSelected', function(item, block) {
        var selected = false;
        // lots of logic that determines if item is selected
        console.log(item);
        var values = JSON.parse(render(item));
        link = values.link;
        status = values.status;
        if (selected) {
            return '<a href = "' + render(link) + '" id = "card-button" class = "btn btn-primary " > PLATINUM < /a>';;
        }
    });

    Handlebars.registerHelper('ifEquals', function(v1, v2, options) {
        console.log(v1);
        console.log(v2);
        if (v1 === v2) {
            return options.fn(this);
        }
        return options.inverse(this);
    });

});



// // someFunction: function() {
// var buttonLogic = function(val, render) {
//     var values = JSON.parse(render(val));
//     console.log(values);
//     link = values.link;
//     status = values.status;
//     if (status == 'platinum')
//         return '<a href = "' + render(link) + '" id = "card-button" class = "btn btn-primary " > PLATINUM < /a>';
//     // return "I passed in this value: " + render(val);
// };