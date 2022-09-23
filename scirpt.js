var btn = $('#toggle').click(function(event){

    console.log("click");
    $("body").toggleClass('darkMode');
    event.defaultPrevented;
});
