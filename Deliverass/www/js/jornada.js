$(document).ready(function() {
    $("#jornadaInici").click(function() {
        var id = localStorage.getItem("id");
        var estat = 1;
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: "http://192.168.1.203/jornada.php",
            crossDomain: true,
            data: {
                id_user: id,
                estat: estat

            },
            cache: false,
            success: function(data) {
                alert(data);
            }
        })

    })
})
$(document).ready(function() {
    $("#jornadaFinal").click(function() {
        var id = localStorage.getItem("id");
        var estat = 0;
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: "http://192.168.1.203/jornada.php",
            crossDomain: true,
            data: {
                id_user: id,
                estat: estat

            },
            cache: false,
            success: function(data) {
                alert(data);
            }
        })

    })
})