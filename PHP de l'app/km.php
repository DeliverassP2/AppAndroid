	<?php

$kmInici = trim($_POST['kmInici']);
$kmFin = trim($_POST['kmFin']);
$id = trim($_POST['id_user']);
$kmDia = $kmFin - $kmInici;

$conn = pg_connect("host=192.168.1.203 port=5432 dbname=Deliverass user=postgres password=Fat/3232");

//echo "SELECT \"euroKM\" FROM \"DEL_repartidors\" WHERE \"Dni\" = '".$id."'";
//echo "SELECT MAX(\"KmFinals\") FROM \"DEL_nomines\" WHERE \"DniRep\"='".$id."'";
//echo $kmInici;
$resultKm = pg_query($conn, "SELECT MAX(\"KmFinals\") FROM \"DEL_nomines\" WHERE \"DniRep\"='".$id."'");

while($row = pg_fetch_row($resultKm)){
	echo $row[0];
	if($row[0] > $kmInici){
		echo "Els km inicials no poden ser inferiors a: " . $row[0];
	}else{
		//echo "Correcte!";
		$result = pg_query($conn, "SELECT \"euroKm\" FROM \"DEL_repartidors\" WHERE \"Dni\" = '".$id."'");

		while($rowR = pg_fetch_row($result)){

			if($rowR[0]){
				$result = pg_query($conn, "INSERT INTO \"DEL_nomines\" (\"DniRep\", \"KmInicials\", \"KmFinals\", \"KmDia\", \"Data\", \"SouDia\") VALUES ('".$id."', ".$kmInici.", ".$kmFin.", ".$kmDia.", CURRENT_DATE, ".$rowR[0].")");
//				echo "INSERT INTO \"DEL_nomines\" (DniRep, KmInicials, KmFinals, KmDia, Data, SouDia) VALUES ('".$id."', ".$kmInici.", ".$kmFin.", ".$kmDia.", CURRENT_DATE, ".$rowR[0].")";
				echo "Success";
			}else{
				echo "Mal";
			}
		}		
	}
}



//if ($kmInici != "" && $kmFin != ""){
//echo "Perfecte";
//}else{
//echo "Malament";
//}


?>
