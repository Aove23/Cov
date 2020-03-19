
const JSON_CLARIN = "apiArgentina.php";

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
        </ul><br>
        ${horaImprimible}`;
    });
}

 
setInterval(function(){ initCifras(); }, 1000);


var region = "";
    var country = "";
    function getLocation()
    {
        if (navigator.geolocation)
          {
              navigator.geolocation.getCurrentPosition(showPosition);
          } else {
              alert('No soporta geolocalizacion');
          }
    }
function showPosition(position)
    {
      var geocoder = new google.maps.Geocoder();
      var latlong = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
      geocoder.geocode({'latLng': latlong}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          if (results[0]) {
            for (var i = 0; i < results[0].address_components.length; i++)
            {
              alert(results[0].address_components[1].types.administrative_area_level_1);
              var longname = results[0].address_components[i].long_name;
              var type = results[0].address_components[i].types;
              
              if (type.indexOf("administrative_area_level_1") != -1)
              {
                region = longname;
              }
              if (type.indexOf("country") != -1)
              {
                country = longname;
              }
            }
          }
        }
      });
      alert("ffsdsfd"+region + country);
    }
    