window.addEventListener("load", inici, false);


function inici() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            lecturaxml(this);
        }
    };
    xhttp.open("GET", "http://192.168.1.203/" + date + "/arxiu" + date + ".xml", true);
    xhttp.send();
}

function lecturaxml(xml) {
    var xmlDoc = xml.responseXML;
    var seccio = document.getElementsByName("llista");
    for (var i = 0; i < xmlDoc.getElementsByTagName("pedido").length; i++) {
        id_enviament = xmlDoc.getElementsByTagName("id_enviament")[i].childNodes[0].nodeValue;
        latitud = xmlDoc.getElementsByTagName("latitud")[i].childNodes[0].nodeValue;
        longitud = xmlDoc.getElementsByTagName("longitud")[i].childNodes[0].nodeValue;
        direccio = xmlDoc.getElementsByTagName("direccio")[i].childNodes[0].nodeValue;
        pes = xmlDoc.getElementsByTagName("pes")[i].childNodes[0].nodeValue;
        intents = xmlDoc.getElementsByTagName("intents")[i].childNodes[0].nodeValue;
        dataEnv = xmlDoc.getElementsByTagName("dataEnv")[i].childNodes[0].nodeValue;
        estat = xmlDoc.getElementsByTagName("estat")[i].childNodes[0].nodeValue;

        seccio[0].innerHTML += "<div id=" + id_enviament + " class='comanda' style='width: 100%; border: 1px solid black; padding: 5px;'>" +

            "<h3 style='margin-top: 15px;'>Id enviament: " + id_enviament + "</h3>" +
            "<p><strong>Direcció: </strong>" + direccio + "</p>" +
            "<p><strong>Data envio: </strong>" + dataEnv + "</p>" +
            "<p><strong>Pes: </strong>" + pes + "</p>" +
            "<p><strong>Estat: </strong>" + estat + "</p>" +
            "<p style='margin-bottom: 15px;'><strong>Intents: </strong>" + intents + "</p>" +
            "</div>";

    }
}