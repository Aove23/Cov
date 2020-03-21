const accordion = document.querySelector('#accordion');

    function traer(){
        fetch('backend/collapse.json')
            .then( res => res.json() )
            .then( datos => {
                collapse(datos);
            })
    }

    function collapse(datos){
        console.log(datos)
        accordion.innerHTML = ''
        i=0;
        for(let valor in datos){
          i++;
            // console.log(valor.titulo)
            accordion.innerHTML += `
          <div class="card tarj">
            <div class="card-header cabecera" id="heading${i}">
              <h5 class="mb-0">
                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
              ${datos[valor].titulo3}
                </button>
              </h5>
            </div>
            <div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#accordion">
              <div class="card-body cuerpo text-white">
                ${datos[valor].info3}
              </div>
            </div>
          </div>


        `
        }
    }













// fetch('admin/php/apis/abogadosApi.php')
// .then(function(res){
//  return res.json();
// })
// .then(data =>{

//  arreglo = data;
//  miembros.innerHTML=``
//  for(var i=0;i<data.length;i++){
//    miembros.innerHTML+=`<li onclick="show(${i})" class="d-flex justify-content-between lh-condensed smb-1 py-2 ">
//    <div>
//      <h6>${data[i].nombre}</h6>
//      <small class="text-muted">${data[i].descripcion}</small>
//    </div>
//  </li>`;
//  };
//  show(0);
//  }

// )
