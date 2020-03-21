<?php 


$str_datos = file_get_contents("https://www.clarin.com/redaccionfiler/clarin/infografia/2020/data/coronavirus/tabla-coronavirus-mundo.json");
$datos = json_decode($str_datos,true);
 
echo json_encode($datos[57]);