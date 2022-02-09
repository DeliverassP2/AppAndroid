<?php

$db_connection = pg_connect("host=192.168.1.203 port=5432 dbname=Deliverass user=postgres password=Fat/3232");

$id = $_POST['id'];
$password = $_POST['password'];
$resultats = array();
    if(isset($_POST['login'])){
        $login = pg_query($db_connection, "SELECT * FROM DEL_usuaris WHERE id_usuari = '".$id."' AND password = '".$password."'");
        $row = pg_fetch_array($login);
        if($row != 0){
            $resultats["reult"] = true;
        }else{
            $resultats["reult"] = false;
        }
            echo "error";
    }
pg_close($db_connection);

?>