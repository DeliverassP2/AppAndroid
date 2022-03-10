<?php

$conn = pg_connect("host=192.168.1.203 dbname=Deliverass user=postgres password=Fat/3232");

$id = trim($_POST['id_user']);
$pwd = trim($_POST['password']);
$nomCog = trim($_POST['nomCog']);

$insert = pg_query($conn, "INSERT INTO public.\"DEL_usuaris\" (nom, password, dni, tipo) VALUES ('".$nomCog."', '".$pwd."', '".$id."', 1 )");


if($insert){

          echo "success";
}else{
echo "error";
  }




?>
