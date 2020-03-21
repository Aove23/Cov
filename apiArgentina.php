<?php

$str_datos = file_get_contents("https://www.clarin.com/redaccionfiler/clarin/infografia/2020/data/coronavirus/tabla-coronavirus-mundo.json");
$datos = json_decode($str_datos,true);

$i=0;
while ($datos[$i]['pais']!="Argentina")$i=$i+1;

echo json_encode($datos[$i]);
