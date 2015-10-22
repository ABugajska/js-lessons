$(document).ready(function(){
    var validation = {
        name: function(){
            var name = $('input[name="name"]');
            if (name.val() == "") {
                return "name is required";
            }
            return null;
        },
        surname: function () {
            var surname = $('input[name="surname"]');
            if (surname.val() == "") {
                return "surname is required";
            }
            return null;
        }
    };
    $('form').on('submit', function(event){
        event.preventDefault();
        window.location.href = "https://google.com";
    });
    $('button').attr('disabled', 'disabled');


    $('form').on('keyup', function(){
        console.log(validation.surname());
        console.log(validation.name());
        if (validation.surname() == null && validation.name() == null) {
            $('button').removeAttr('disabled');
        }
        else {
            $('button').attr('disabled', 'disabled');
        }

    });

});