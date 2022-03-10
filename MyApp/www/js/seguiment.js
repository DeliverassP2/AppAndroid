window.addEventListener("load", seguiment, false);

var locations = [];

function seguiment() {
    var queryString = window.location.href;
    var urlParams = queryString.split("?")[1];
    var id_enviament = urlParams.split("=")[1];
    // alert(id_enviament);

    var idC = localStorage.getItem("id");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            seguimentxml(this, id_enviament);
        }
    };
    xhttp.open("GET", "http://192.168.1.203/PedidosClients/" + idC + ".xml", true);
    xhttp.send();
}

function seguimentxml(xml, id) {
    var xmlDoc = xml.responseXML;
    var seguiment = document.getElementsByName("seguiment");
    for (var i = 0; i < xmlDoc.getElementsByTagName("pedido").length; i++) {
        var idXml = xmlDoc.getElementsByTagName("pedido")[i].getAttribute('id');
        if (idXml == id) {
            data = xmlDoc.getElementsByTagName("dataEnv")[i].childNodes[0].nodeValue;
            estat = xmlDoc.getElementsByTagName("estat")[i].childNodes[0].nodeValue;
            longitud = xmlDoc.getElementsByTagName("longitud")[i].childNodes[0].nodeValue;
            latitud = xmlDoc.getElementsByTagName("latitud")[i].childNodes[0].nodeValue;
            intents = xmlDoc.getElementsByTagName("intents")[i].childNodes[0].nodeValue;
            dataI1 = xmlDoc.getElementsByTagName("dataI1")[i].childNodes[0].nodeValue;
            dataI2 = xmlDoc.getElementsByTagName("dataI2")[i].childNodes[0].nodeValue;
            locations.push([i, latitud, longitud, idXml, data, estat, intents, dataI1, dataI2]);
            if (intents == "0") {

                seguiment[0].innerHTML += "<tr>" +
                    "<td>" + data + "</td>" +
                    "<td>S'ha enviat</td>" +
                    "</tr>";
            } else if (intents == "1") {
                seguiment[0].innerHTML += "<tr>" +
                    "<td>" + data + "</td>" +
                    "<td>S'ha enviat</td>" +
                    "</tr>" +
                    "<tr>" +
                    "<td>" + dataI1 + "</td>" +
                    "<td>S'ha intentat entregar</td>" +
                    "</tr>";
            } else if (intents == "2") {
                seguiment[0].innerHTML += "<tr>" +
                    "<td>" + data + "</td>" +
                    "<td>S'ha enviat</td>" +
                    "</tr>" +
                    "<tr>" +
                    "<td>" + dataI1 + "</td>" +
                    "<td>S'ha intentat entregar</td>" +
                    "</tr>" +
                    "<tr>" +
                    "<td>" + dataI2 + "</td>" +
                    "<td>S'ha tornat a intentar entregar!<br> El paquet el trobaràs a la central!</td>" +
                    "</tr>";
            } else if (intents == "0" && estat == "Entregat") {
                seguiment[0].innerHTML += "<tr>" +
                    "<td>" + data + "</td>" +
                    "<td>S'ha enviat</td>" +
                    "</tr>" +
                    "<tr>" +
                    "<td>" + data + "</td>" +
                    "<td>" + estat + "</td>" +
                    "</tr>";
            } else if (intents == "1" && estat == "Entregat") {
                seguiment[0].innerHTML += "<tr>" +
                    "<td>" + data + "</td>" +
                    "<td>S'ha enviat</td>" +
                    "</tr>" +
                    "<tr>" +
                    "<td>" + dataI1 + "</td>" +
                    "<td>S'ha intentat entregar</td>" +
                    "</tr>" +
                    "<tr>" +
                    "<td>" + data + "</td>" +
                    "<td>" + estat + "</td>" +
                    "</tr>";
            } else if (intents == "2" && estat == "Entregat") {
                seguiment[0].innerHTML += "<tr>" +
                    "<td>" + data + "</td>" +
                    "<td>S'ha enviat</td>" +
                    "</tr>" +
                    "<tr>" +
                    "<td>" + dataI1 + "</td>" +
                    "<td>S'ha intentat entregar</td>" +
                    "</tr>" +
                    "<tr>" +
                    "<td>" + dataI2 + "</td>" +
                    "<td>S'ha tornat a intentar entregar!<br> El paquet el trobaràs a la central!</td>" +
                    "</tr>" +
                    "<tr>" +
                    "<td>" + data + "</td>" +
                    "<td>" + estat + "</td>" +
                    "</tr>";
            }

        }

    }
    app.init();
}

var app = {
    init: function() {
        navigator.geolocation.getCurrentPosition(app.onSuccess);
    },
    onSuccess: function(position) {
        var map = L.map('zona_mapa').setView([locations[0][1], locations[0][2]], 17);
        mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
        L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; ' + mapLink + ' Contributors',
                maxZoom: 18,
            }).addTo(map);


        // Colors
        var greenIcon = new L.Icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });

        var redIcon = new L.Icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });

        for (var i = 0; i < locations.length; i++) {
            if (locations[i][5] == 'No entregat') {
                marker = new L.marker([locations[i][1], locations[i][2]], { icon: redIcon }).addTo(map);
            } else {
                marker = new L.marker([locations[i][1], locations[i][2]], { icon: greenIcon }).addTo(map);
            }

        }
    }
}