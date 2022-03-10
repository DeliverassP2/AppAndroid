<?php
$id = trim($_POST['id_user']);
$estat = trim($_POST['estat']);
//echo $estat;
$conn = pg_connect("host=192.168.1.203 port=5432 dbname=Deliverass user=postgres password=Fat/3232");
//echo "Abans de while";

$result = pg_query($conn, "SELECT \"dniTreb\", \"dataAcc\", \"estat\" FROM \"DEL_historial_repartidor\" WHERE \"dataAcc\" =(SELECT MAX(\"dataAcc\") FROM \"DEL_historial_repartidor\" WHERE \"dniTreb\" = '".$id."')");
while($row = pg_fetch_row($result)){
	
	if($row[2] == $estat){
		if($row[2] == 0){
			echo "La jornada ja estava tancada";
		}else{
			echo "Ja s'havia iniciat la jornada";
		}
	}else{
	//echo "INSERT INTO \"DEL_historial_repartidor\" (\"dniTreb\", \"dataAcc\", estat) VALUES ('".$id."', CURRENT_DATE, ".$estat.")";
		$resultEstat = pg_query($conn, "INSERT INTO \"DEL_historial_repartidor\" (\"dniTreb\", \"dataAcc\", estat) VALUES ('".$id."', CURRENT_DATE, ".$estat.")");
			echo "S'ha cambiat l'estat de la jornada!";		

	}
}

?>
