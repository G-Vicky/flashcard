
function createFlashCard() {
    $("#ccc").fadeIn();
}

function learnFlashCard() {
    $("#learn-card").fadeIn();
}

$('#reveal').click(function(){
    $('.flip').find('.card').toggleClass('flipped');
});

$('#again').click(function(){
    $('.flip').find('.card').toggleClass('flipped');
});

$(document).mouseup(function(e) 
{
    var learnCard = $("#learnCard");
    var createCard = $("#createCard");

    if (!learnCard.is(e.target) && learnCard.has(e.target).length === 0) 
    {
        $("#learn-card").fadeOut();
    }
    if (!createCard.is(e.target) && createCard.has(e.target).length === 0) 
    {
        $("#ccc").fadeOut();
    }
});