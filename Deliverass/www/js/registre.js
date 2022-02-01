function registreCredencials() {
    var id = document.getElementById("id_user").textContent;
    var password = document.getElementById("password").textContent;
    var nomCog = document.getElementById("nomCog").textContent;
    var tel = document.getElementById("tel").textContent;
    var dir = document.getElementById("dir").textContent;
    var cp = document.getElementById("cp").textContent;

    enviarRegistre(id, password, nomCog, tel, dir, cp);
}

function enviarRegistre(id, pwd, nomCog, tel, dir, cp) {
    $.post("http://192.168.1.203/registre.php", {id: id, password: pwd, nomCog: nomCog, tel: tel, dir: dir, cp: cp}, 
    function(response) {
        if (response.result == true) {
            alert("Registre correcte");
            window.open("index.html");
        }else if (response.result == false) {
            alert("Error");
        }
    }, 'json');
}
    
