chain_array_color = ['Red', 'Blue', 'Green', 'Yellow'];
chain_array_font = ['Arial', 'Roboto', 'Impact'];

$(document).ready(function(){
    //This will fetch the edits from local storage and apply them.
    $('*').css("font-family", (localStorage.getItem('font')));
    $('body').css("background-color", (localStorage.getItem('color')));
    $('*').css("text-shadow", localStorage.getItem('Shadow'));


    //customizes the elements of the settings page.
    $('.selector').css("background-color", 'transparent');
    $('#color-h').text("Set Color Theme " + "(" + localStorage.getItem('color') + ")")
    $('#font-h').text("Set Font " + "(" + localStorage.getItem('font') + ")")
    $('#shadow-h').text("Text Shadow " + "(" + localStorage.getItem('Shadow') + ")")
    $('#chain-h').text("Chained Effect " + "(" + localStorage.getItem('chain') + ")")

    //when save button is clicked.
    $('#SaveTheme').click(function(e){

        switch($('#color').val()){//checks which selctor type was picked.
            case '0':
                localStorage.setItem("color", "White");
            break;
            case '1':
                localStorage.setItem("color", "LightGrey");
            break;
            case '2':
                localStorage.setItem("color", "LightBlue");
            break;
            case '3':
                localStorage.setItem("color", "Pink");
            break;
            case '4':
                localStorage.setItem("color", "Red");
            break;
        }

        switch($('#font').val()){//checks which selctor type was picked.
            case '0':
                localStorage.setItem("font", "Comic Sans MS");
            break;
            case '1':
                localStorage.setItem("font", "Arial");
            break;
            case '2':
                localStorage.setItem("font", "Roboto");
            break;
            case '3':
                localStorage.setItem("font", "Courier");
            break;
            case '4':
                localStorage.setItem("font", "Impact");
            break;
        }

        switch($('#shadow').val()){//checks which selctor type was picked.
            case 'True':
                localStorage.setItem("Shadow", "2px 2px #FFFAFA");
            break;
            case 'False':
                localStorage.setItem("Shadow", "false");
            break;
        }

        switch($('#chain').val()){//checks which selctor type was picked.
            case 'True':
                localStorage.setItem('chain', 'True')
            break;

            case 'False':
                localStorage.setItem("chain", 'false');
            break;
        }

        location.reload();//reloads the page when clicked.
    })

    //chain effect just for gags :).
    if(localStorage.getItem('chain') == 'True'){
        let count = 0;
        $(function () {
            count = 0;
            setInterval(function () {
              count++;
              $("*").css({
                  color: chain_array_color[count],
                  fontFamily: chain_array_font[count]
              });
            }, 2000);
        });
    }

})