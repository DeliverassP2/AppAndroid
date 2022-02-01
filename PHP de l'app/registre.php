<?php

$db_connection = pg_connect("host=192.168.1.203 dbname=Deliverass user=postgres password=Fat/3232");

$id = $_POST['id'];
$password = $_POST['password'];
$nomCog = $_POST['nomCog'];
$tel = $_POST['tel'];
$dir = $_POST['dir'];
$cp = $_POST['cp'];

if ($id !="" && $password !="" && $nomCog !="" && $tel !="" && $dir !="" && $cp !="") {
    $insert = pg_query($db_connection, "INSERT INTO DEL_usuaris (id_usuari, password, nom_cognom, telefon, direccio, codi_postal) VALUES ('".$id."', '".$password."', '".$nomCog."', '".$tel."', '".$dir."', '".$cp."')");

    $result = pg_query($db_connection, "SELECT * FROM DEL_usuaris WHERE id_usuari = '".$id."' AND password = '".$password."'");
    $row = pg_fetch_array($result);
    if($row['id_usuari'] == $id && $row['password'] == $password){
        echo json_encode(array('result' => true));
    }else{
        echo json_encode(array('result' => false));
    }

}

?>