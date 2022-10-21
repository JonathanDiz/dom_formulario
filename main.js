function enviarSaludo() {
  let $saludo = document.getElementById('saludo'),
  $nombre = document.getElementById('nombre').value,
  $apellido = document.getElementById('apellido').value,
  cl = console.log

  cl($nombre)
  cl($apellido)

  if($nombre === '' || $apellido === ''){
    $saludo.classList.remove('confirm')
    $saludo.classList.add('alert')
    $saludo.innerHTML='Debe ingresar ambos campos'
  }else{
    $saludo.classList.remove('alert')
    $saludo.classList.add('confirm')
    $saludo.innerHTML=`hola ${$nombre} ${$apellido}, gracias por rellenar el formulario`
  }
}