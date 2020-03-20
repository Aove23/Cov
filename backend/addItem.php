<?php

if( isset($_POST)){
  $str_datos = file_get_contents("GAMES.json");
  $datos = json_decode($str_datos,true);

  $key= substr(md5(time()), 0, 16);
  while(isset($datos[$key]));
  $datos[$key]=$_POST;
  $fh = fopen("GAMES.json", 'w')
        or die("Error al abrir fichero de salida");
  fwrite($fh, json_encode($datos,JSON_UNESCAPED_UNICODE));
  fclose($fh);
  echo json_encode("true");
}
else {
  echo json_encode("false");

}

 ?>
