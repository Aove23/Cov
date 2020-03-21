function functionName(code){
  fetch('update.php', {
	method: 'POST',
  id:"sd",
	mode: 'cors',
	redirect: 'follow',
	headers: new Headers({
		'Content-Type': 'text/plain'
	})
})

      .then( res => res.text() )
      .then( datos => {
          console.log(datos);
      })

}
