<?php

$db_connection = pg_connect("host=192.168.1.203 port=5432 dbname=Deliverass user=postgres password=Fat/3232");

// $id = $_POST['id'];
// $password = $_POST['password'];

// if ($id !="" && $password !=""){
//     $result = pg_query($db_connection, "SELECT * FROM DEL_usuaris WHERE id_usuari = '".$id."' AND password = '".$password."'");
//     $row = pg_fetch_array($result);
//     if ($row['id_usuari'] == $id && $row['password'] == $password){
//         echo json_encode(array('result' => true));
//     }else{
//         echo json_encode(array('result' => false));
//     }
    
// }

$id = $_POST['id'];
$password = $_POST['password'];
    if(isset($_POST['register'])){   
        $register = mysqli_num_rows(mysqli_query($con, "SELECT * FROM `users` WHERE `email`='$email'"));
        if($register == 0)
        {
            $insert = mysqli_query($con,"INSERT INTO `users` (`email`,`password`) VALUES ('$email','$password')");
            if($insert)
                echo "success";
            else
                echo "error";
        }
        else if($register != 0)
            echo "exist";
    }
    else if(isset($_POST['login'])){
        $login = pg_query($db_connection, "SELECT * FROM DEL_usuaris WHERE id_usuari = '".$id."' AND password = '".$password."'");
        
        // $login = mysqli_num_rows(mysqli_query($con, "SELECT * FROM `users` WHERE `email`='$email' AND `password`='$password'"));
        if($login != 0)
            echo "success";
        else
            echo "error";
    }

// echo $id . " " . $password;
// if (isset($_POST['login'])) {

//     if($login != 0){
//         echo "success";
//     }else{
//         echo "success";
//     }
// }



pg_close($db_connection);
?>