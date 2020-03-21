<?php

if( isset($_POST)){
  $str_datos = file_get_contents("card.json");
  $datos = json_decode($str_datos,true);
  unset($datos[$_GET['id']]);
  $fh = fopen("card.json", 'w')
        or die("Error al abrir fichero de salida");
  fwrite($fh, json_encode($datos,JSON_UNESCAPED_UNICODE));
  fclose($fh);
  echo json_encode("true");
  header("Location:dash.php");
}
else {
  echo json_encode("false");

}

 ?>
