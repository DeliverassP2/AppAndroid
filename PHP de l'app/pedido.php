<?php
$dlat 		= 6;
$divlat 	= pow(10, $dlat);
$latitud 	= mt_rand(40 * $divlat, 42 * $divlat) / $divlat;

$dlon 		= 6;
$divlon 	= pow(10, $dlon);
$longitud 	= mt_rand(1 * $divlon, 1.3 * $divlon)/ $divlon;

$start 		= strtotime(date("d-m-Y"));
$end		= strtotime("31-12-2022");
$timestamp 	= mt_rand($start, $end);
$entrega 	= date("d-m-Y", $timestamp);

$dir = trim($_POST['direccio']);
$pes = trim($_POST['pes']);
$id = trim($_POST['id']);

$conn = pg_connect("host=192.168.1.203 dbname=Deliverass user=postgres password=Fat/3232");

$result = pg_query($conn, "INSERT INTO \"DEL_paquets\" (latitud, longitud, pes, cp, data, estat, data_entrega, direccio, dnirep, dnicli) VALUES (".$latitud.", ".$longitud.", '".$pes."KG', 25300, CURRENT_DATE, 'false', '".$entrega."', '".$dir."', (SELECT \"Dni\" FROM \"DEL_repartidors\" ORDER BY RANDOM() LIMIT 1), '".$id."');");
//echo "INSERT INTO public.\"DEL_paquets\" (latitud, longitud, pes, cp, data, estat, data_entrega, direccio, dnirep, dnicli) VALUES (".$latitud.", ".$longitud.", '".$pes."KG', 25300, CURRENT_DATE, 'false', '".$entrega."', '".$dir."', (SELECT	\"Dni\" FROM \"DEL_repartidors\" ORDER BY RANDOM() LIMIT 1), '".$id."');";
if(!$result){
echo "error";
}else{
echo "success";
}


?>
