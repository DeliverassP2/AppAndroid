$(document).ready(function() {
    $("#b1").click(function() {
        var id = $("#id").val();
        var pwd = $("#password").val();
        if ($.trim(id).length > 0 && $.trim(pwd).length > 0) {
            event.preventDefault();
            $.ajax({
                type: "POST",
                crossDomain: true,
                url: "http://192.168.1.203/login.php",
                data: {
                    id_user: id,
                    password: pwd
                },
                cache: false,
                success: function(data) {

                    if (data == "successC") {
                        localStorage.setItem("id", id);
                        localStorage.setItem("password", pwd);
                        localStorage.setItem("usuari", "C");
                        window.open('perfilClient.html');
                    } else if (data == "successT") {
                        localStorage.setItem("id", id);
                        localStorage.setItem("password", pwd);
                        localStorage.setItem("usuari", "T");
                        window.open('menu.html');
                    } else {
                        alert(data);
                        alert("Credencials incorrectes!");

                    }
                }
            })
        } else {
            alert("Please fill all fields.");
        }
    })
})