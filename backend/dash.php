<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panel Admin</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <script src="https://kit.fontawesome.com/f77068196a.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css?family=Baloo+Bhai+2&display=swap" rel="stylesheet">
</head>
<body>
    <style>
        body{
            font-family: 'Baloo Bhai 2', cursive;
        }

        .cabecera2 .salir{
            width: 40px;
            color: white;
            cursor: pointer;
        }
        #items{
          max-height: 400px;
          overflow-y:  scroll;
        }
    </style>

<header>
    <nav class="navbar"  style="height: 100px; background: #34495e;">
        <div class="cabecera1">
            <h2 class="text-white mr-4">Desarrollado por Qbit</h2>
            <!-- <img class="ml-2" src="spring-swing-rocket.svg" alt="" width="5%"> -->
        </div>
        <div class="cabecera2 d-flex flex-row">
             <p class="text-white mr-2">Salir</p>
             <!-- <img src="logout.svg" alt="" width=""> -->
            <i class="salir fas fa-sign-out-alt float-left"></i>
        </div>
        <!-- <div class="conatiner">
            <div class="contenedor" ></div>
        </div> -->
    </nav>
</header>




</form>


<main class="container">
    <div class="row py-4 ">
        <div class="col-8" style="height: h-100; border-radius: 10px; background: #34495e;">
            <form  class="p-4" method="post" action="addItem.php">
                <div class="form-group">
                  <label class="font-weight-bold text-white" for="exampleInputEmail1">Guia de Supervivencia</label>
                  <input type="text" class="form-control" placeholder="Titulo" aria-label="Titulo" name="titulo1">
                </div>

                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Info" aria-label="Info" name="info1">
                </div>

                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Img" aria-label="Info" name="img">
                </div>

                <div class="form-group">
                    <label class="font-weight-bold text-white" for="exampleInputEmail1">Modal</label>
                    <input type="text" class="form-control" placeholder="Titulo" aria-label="Titulo" name="titulo2">
                </div>

                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Info" aria-label="Info" name="info2">
                </div>


                <button type="submit" class="btn btn-info btn-lg mr-2"><i class="material-icons float-left mr-2">
                    gamepad
                    </i>Crear</button>
                    <button type="" class="btn btn-dark btn-lg"><i class="material-icons float-left mr-2">
                        cancel</i>Cancelar</button>
              </form>
              <form  class="p-4" method="post" action="addItem0.php">


                  <div class="form-group">
                      <label class="font-weight-bold text-white" for="exampleInputEmail1">Collapse</label>
                      <input type="text" class="form-control" placeholder="Titulo" aria-label="Titulo" name="titulo3">
                  </div>

                  <div class="form-group">
                      <input type="text" class="form-control" placeholder="Info" aria-label="Info" name="info3">
                  </div>


                  <button type="submit" class="btn btn-info btn-lg mr-2"><i class="material-icons float-left mr-2">
                      gamepad
                      </i>Crear</button>
                      <button type="" class="btn btn-dark btn-lg"><i class="material-icons float-left mr-2">
                          cancel</i>Cancelar</button>
                </form>
        </div>

        <div class="col-4 pt-2 " >
          <form class="form-inline my-2 my-lg-0 w-100">
             <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
             <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Filtrar Game</button>
           </form>
          <div class="my-4" id="items">

<?php
$str_datos = file_get_contents("card.json");
$datos = json_decode($str_datos,true);


foreach ($datos as $i => $value) { ?>

              <div class="contenedor d-flex align-items-end flex-column bd-highlight">
                  <div class="alert alert-primary" role="alert">
                      <?php echo($datos[$i]['titulo1']); ?>
                      <div class="botones bd-highlight mt-2">
                          <a class="btn btn-primary" onclick="functionName('<?php echo($i); ?>')"  role="button"><i class="material-icons mr-2 float-left">
                              edit</i>Editar</a>
                          <a class="btn btn-primary" href="deleteItem.php?id=<?php echo($i); ?>" role="button"><i class="material-icons mr-2 float-left">
                          delete</i>Eliminar </a>
                      </div>
                  </div>
              </div>


<?php } ?>


              </div>
        </div>
    </div>
</main>

<script src="update.js">

</script>
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

</body>
</html>
