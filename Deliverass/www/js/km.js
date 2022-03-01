$(document).ready(function() {
    $("#b1").click(function() {
        var kmInici = $("#kmInici").val();
        var kmFin = $("#kmFin").val();
        var id = localStorage.getItem("id");
        //alert(kmInici + " " + kmFin + " " + id);
        if ($.trim(kmInici) > 0 && $.trim(kmFin) > 0) {
            event.preventDefault();
            $.ajax({
                type: "POST",
                url: "http://192.168.1.203/km.php",
                crossDomain: true,
                data: {
                    kmInici: kmInici,
                    kmFin: kmFin,
                    id_user: id
                },
                cache: false,
                success: function(data) {
                    alert(data);
                }
            })
        }
    })
})