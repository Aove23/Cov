var tel = `            <!-- Categories Widget -->
            <div class="card my-4">

              <div class="card-body">
                <div class="media-body    " > <h4>0800-222-1002</h4> <p><small> 0800 Salud Responde, opción 1. Teléfono gratuito para llamados desde todo el país.</small> <br> <a href="tel:08002221002" title="" class="btn btn-primary btn-sm w-100">Si estás en tu celular, llamá ahora</a></p><p></p></div>
                <div class="row">



                  <div class="col-auto w-100 ">
                    <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="filtrar" onkeyup="ppp(this.value)">
                  </div>

                  <ul id="telefonoss" class="list-group list-group-flush w-100">
                  <li class="list-group-item" ><img class="mr-2" src="imgs/call.svg" alt="" width="8%"> Provincia de Buenos Aires: <strong>148</strong></li><li class="list-group-item" ><img class="mr-2" src="imgs/call.svg" alt="" width="8%"> Catamarca: <strong>383 154238872</strong></li><li class="list-group-item" ><img class="mr-2" src="imgs/call.svg" alt="" width="8%"> Chaco: <strong>0800 444 0829</strong></li><li class="list-group-item" ><img class="mr-2" src="imgs/call.svg" alt="" width="8%"> Chubut: <strong>0800 222 2676</strong></li><li class="list-group-item" ><img class="mr-2" src="imgs/call.svg" alt="" width="8%"> Ciudad Autónoma de Buenos Aires: <strong>107</strong> / <strong>11 5050 0147</strong> (whatsapp)</li><li class="list-group-item" ><img class="mr-2" src="imgs/call.svg" alt="" width="8%"> Córdoba : <strong>0800 122 1444</strong></li><li class="list-group-item" ><img class="mr-2" src="imgs/call.svg" alt="" width="8%"> Corrientes: <strong>0379 4974811</strong> (fijo) / <strong>379 4895124</strong> (celular)</li><li class="list-group-item" ><img class="mr-2" src="imgs/call.svg" alt="" width="8%"> Entre Ríos: <strong>107</strong></li><li class="list-group-item" ><img class="mr-2" src="imgs/call.svg" alt="" width="8%"> Formosa: <strong>107</strong></li><li class="list-group-item" ><img class="mr-2" src="imgs/call.svg" alt="" width="8%"> Jujuy: <strong>0800 888 4767</strong></li><li class="list-group-item" ><img class="mr-2" src="imgs/call.svg" alt="" width="8%"> La Pampa: <strong>0800 333 1135</strong> / <strong>2954 604986</strong> (celular) / <strong>2954 619130</strong> (celular) / <strong>2302 531304</strong> (celular)</li><li class="list-group-item" ><img class="mr-2" src="imgs/call.svg" alt="" width="8%"> La Rioja: <strong>107</strong> / <strong>911</strong></li><li class="list-group-item" ><img class="mr-2" src="imgs/call.svg" alt="" width="8%"> Mendoza: <strong>0800 800 26843</strong></li><li class="list-group-item" ><img class="mr-2" src="imgs/call.svg" alt="" width="8%"> Misiones: <strong>0800 444 3400</strong></li><li class="list-group-item" ><img class="mr-2" src="imgs/call.svg" alt="" width="8%"> Neuquén: <strong>0800 333 1002</strong></li><li class="list-group-item" ><img class="mr-2" src="imgs/call.svg" alt="" width="8%"> Río Negro: <strong>911</strong></li><li class="list-group-item" ><img class="mr-2" src="imgs/call.svg" alt="" width="8%"> Salta: <strong>911</strong></li><li class="list-group-item" ><img class="mr-2" src="imgs/call.svg" alt="" width="8%"> San Luis: <strong>107</strong></li><li class="list-group-item" ><img class="mr-2" src="imgs/call.svg" alt="" width="8%"> San Juan: <strong>107</strong></li><li class="list-group-item" ><img class="mr-2" src="imgs/call.svg" alt="" width="8%"> Santa Cruz: <strong>107</strong></li><li class="list-group-item" ><img class="mr-2" src="imgs/call.svg" alt="" width="8%"> Santa Fe: <strong>0800 555 6549</strong></li><li class="list-group-item" ><img class="mr-2" src="imgs/call.svg" alt="" width="8%"> Santiago del Estero: <strong>107</strong> / <strong>385 4213006</strong> / <strong>385 5237077</strong></li><li class="list-group-item" ><img class="mr-2" src="imgs/call.svg" alt="" width="8%"> Tierra del Fuego, Antártida e Islas del Atlántico Sur: <strong>107</strong></li><li class="list-group-item" ><img class="mr-2" src="imgs/call.svg" alt="" width="8%"> Tucumán: <strong>0800 555 8478</strong> / <strong>0381 4302228</strong> (lunes a viernes 7 a 17 horas)</li></div>

                  </ul>

                </div>
              </div>
            </div>`;


const JSON_CLARIN = "apiArgentina.php";
cardPintar();
initCifras();
traer();
document.getElementById('telefonos').innerHTML = tel;

setInterval(function(){ initCifras(); }, 100000);

function initCifras() {

momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    horaImprimible = hora + " : " + minuto + " : " + segundo



  fetch(JSON_CLARIN)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
     console.log(myJson);

          document.getElementById('numbers').innerHTML = `<ul class="numbers__argentina">
          <li>
            <p>${myJson.casos} <span>Confirmados</span></p>
          </li>
          <li>
            <p class="--dead">${myJson.muertes} <span>Muertos</span></p>
          </li>
          <li>
            <p class="--recovered">${myJson.recuperados} <span>Recuperados</span></p>
          </li>
        </ul><br>`;
    });
}


function modalScript(title,data){
  var mdl = document.getElementById('mdl');
  mdl.classList.add("d-block");
  document.querySelector('#mdl h3').innerHTML = title;
  document.querySelector('#mdl p').innerHTML = data;
}
function modalScriptClose(){
  document.getElementById('mdl').classList.remove("d-block");
}


function ppp(valor){
  var lis = document.querySelectorAll('#telefonoss .list-group-item');

  for (var variable in lis) {
    if( lis[variable].innerHTML.toLowerCase().includes(valor)){
      lis[variable].classList.remove("d-none");
    }else {
        lis[variable].classList.add("d-none");
    }
  }

}

function cardPintar(){
  data= document.getElementById('cardinfo');

  fetch('backend/card.json')
      .then( res => res.json() )
      .then( datos => {
        for(let valor in datos){
          console.log(datos[valor]);
          data.innerHTML+=`<div class="col-md-4 mb-2">
                          <div class="card text-center h-100 ">
                            <div class="card-body">
                              <div class="contenedor d-flex flex-row-reverse bd-highlight">
                                <img class=" bd-highlight" src="imgs/${datos[valor].img}" alt="" width="15%">
                              </div>
                              <img class="mb-2" src="imgs/question.svg" alt="" width="20%">
                              <h5 class="card-title">${datos[valor].titulo1}</h5>
                              <p class="card-text">${datos[valor].info1}</p>
                              <span class="btn btn-primary btn-sm"  onclick="modalScript('${datos[valor].titulo2}','${datos[valor].info2}')" >Mas Info</span>
                            </div>
                          </div>
                        </div>`;

        }

      })




}


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
