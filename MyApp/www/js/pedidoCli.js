window.addEventListener("load", inici, false);

var locations = [];

function inici() {
    //var today = new Date();
    // var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var id = localStorage.getItem("id");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            lecturaxml(this);
        }
    };
    xhttp.open("GET", "http://192.168.1.203/PedidosClients/" + id + ".xml", true);
    xhttp.send();
}

function lecturaxml(xml) {
    var xmlDoc = xml.responseXML;
    var pedido = document.getElementsByName("pedidos");
    for (var i = 0; i < xmlDoc.getElementsByTagName("pedido").length; i++) {
        id_enviament = xmlDoc.getElementsByTagName("id_enviament")[i].childNodes[0].nodeValue;
        latitud = xmlDoc.getElementsByTagName("latitud")[i].childNodes[0].nodeValue;
        longitud = xmlDoc.getElementsByTagName("longitud")[i].childNodes[0].nodeValue;
        direccio = xmlDoc.getElementsByTagName("direccio")[i].childNodes[0].nodeValue;
        pes = xmlDoc.getElementsByTagName("pes")[i].childNodes[0].nodeValue;
        // intents = xmlDoc.getElementsByTagName("intents")[i].childNodes[0].nodeValue;
        dataEnv = xmlDoc.getElementsByTagName("dataEnv")[i].childNodes[0].nodeValue;
        estat = xmlDoc.getElementsByTagName("estat")[i].childNodes[0].nodeValue;
        locations.push([i, latitud, longitud, id_enviament, direccio, dataEnv, estat]);
        console.log(locations);
        pedido[0].innerHTML += "<div id=" + id_enviament + " class='comanda'>" +

            "<h3>Id enviament: " + id_enviament + "</h3>" +
            "<p>Direcció: " + direccio + "</p>" +
            "<p>Data envio: " + dataEnv + "</p>" +
            "<p>Pes: " + pes + "</p>" +
            "<p>Estat: " + estat + "</p>" +
            // "<p>Intents: " + intents + "</p>" +
            "<input type='button' onclick=\"window.location.href = 'seguiment.html?id=" + id_enviament + "'\" value='SEGUIMENT' name='seguiment' id='seguiment'></a></div>";

    }
}