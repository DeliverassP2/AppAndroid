<?php
$id = trim($_POST['id_user']);
$pwd = trim($_POST['password']);
$conn = pg_connect("host=192.168.1.203 port=5432 dbname=Deliverass user=postgres password=Fat/3232");
$result = pg_query($conn, "SELECT * FROM public.\"DEL_usuaris\" WHERE dni='".$id."' AND password='".$pwd."';");
//$update = pg_query($conn, "UPDATE public.\"DEL_usuaris\" SET id=3");

while($row = pg_fetch_row($result)){
	if($row[3]==$id && $row[2] == $pwd && $row[4] == 1){
		echo "successC";
	}elseif($row[3]==$id && $row[2] == $pwd && $row[4] == 2){
		echo "successT";
	}else{
		echo "L'usuari no existeix";
	}
}


?>
