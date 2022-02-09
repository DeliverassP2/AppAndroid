// $(document).ready(function () {
//     var xml;
//     $('#b1').click(function () {
//         $.get('http://192.168.1.20/repartidors.xml', null, function (data, textStatus) {
//             xml = data;
//             $(xml).find('repartidor').each(function () {
//                 var item = $(this);

//                 if (item.find('id_treballador').text() == $('#id_treballador').val() && item.find('contrasenya').text() == $('#password').val()) {
//                     window.open('menu.html');
//                     window.localStorage.setItem("id_treballador", document.getElementById("id_treballador").val());
//                     window.localStorage.setItem("contrasenya", document.getElementById("contrasenya").val());
//                 }
//             });
//         });
//     });
// });

// $(document).ready(function() {
//     $('#b1').click(function() {
//         var user = $('#id_user').val();
//         var pass = $('#password').val();
//         $.post("http://192.168.1.203/login.php", { id: user, password: pass }, function(data) {
//             if (data == true) {
//                 window.location.href = "menu.html";
//             } else {
//                 alert("Usuario o contraseña incorrectos");
//             }
//         });
//     });
// });



// function loginCredencials() {
//     // var xhttp = new XMLHttpRequest();
//     var id = document.getElementById("id_user").value;
//     var password = document.getElementById("password").value;
//     console.log(id + password); 
//     enviarLogin(id, password);
// }

// function enviarLogin(id_usuari, pwd) {
//     $.post("http://192.168.1.203/login.php", {id_usuari: id_usuari, pwd: pwd}, 
//     function(response) {
//         if (response.result == true) {
//             window.location.href("menu.html");
//         }else if (response.result == false) {
//             alert("Error");
//         }
//     }, 'json');
// }


// $.('#form').submit(function() {
//         var id_user = $('#id_user').val();
//         var password = $('#password').val();

//         $.postJSON('http://192.168.1.203/login.php', { id: id_user, pwd: password }).done(function(data) {
//             if (data.result == true) {
//                 window.location.href("menu.html");
//             } else if (data.result == false) {
//                 alert("Error");
//             }
//         })
//         return false;
//     })
// $(document).ready(function () {
// var url = "http://192.168.1.203/login.php";
// $("#b1").click(function () {
//     var id = $.trim($("#id_user").val());
//     var pw = $.trim($("#password").val());
//     var loginString = "id=" + id + "&password=" + pw;
//     $.ajax({
//         type: "POST", crossDomain: true, cache: false,
//         url: url,
//         data: loginString,
//         success: function (data) {
//             if (data == "success") {
//                 localStorage.loginStatus = "true";
//                 console.log("Envia dades");
//                 window.location.href = "menu.html";
//             } else if(data == "error") {
//                 alert("Error, les credencials no son correctes.");
//                 console.log(loginString);
//             }
//         }
//     });
// });
// });