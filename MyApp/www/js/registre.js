$(document).ready(function() {
    $("#b1").click(function() {
        var id = $("#id_user").val();
        var pwd = $("#password").val();
        var nomCog = $("#nomCog").val();
        if ($.trim(id).length > 0 && $.trim(pwd).length > 0 && $.trim(nomCog).length > 0) {
            event.preventDefault();
            $.ajax({
                type: "POST",
                crossDomain: true,
                url: "http://192.168.1.203/registre.php",
                data: {
                    id_user: id,
                    password: pwd,
                    nomCog: nomCog
                },
                cache: false,
                success: function(data) {

                    if (data == "success") {
                        alert("Registre correcte!");
                        window.open('index.html');
                    } else {
                        alert("Usuari ja registrat!");

                    }
                }
            })
        } else {
            alert("Please fill all fields.");
        }
    })
})