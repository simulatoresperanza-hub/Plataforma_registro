

const URL = "https://script.google.com/macros/s/AKfycbwyyxJWC6AgadUg750MkQDwmbrjwaHvByIewlujeS3C87744Of0iBrGQyG4Vf1XpYQb/exec" ;



fetch(URL)
  .then(res => res.json())
  .then(data => console.log(data));


// GUARDAR REGISTRO
// ===============================

document.getElementById("guardarBtn").addEventListener("click", guardarRegistro);

async function guardarRegistro() {

  const datos = {
    fechaJornada: document.getElementById("fechaJornada").value,
    sede: document.getElementById("sede").value,
    municipioSede: document.getElementById("municipioSede").value,
    tipoServicio: document.getElementById("tipoServicio").value,
    empleado: document.getElementById("empleado").value,
    personaCaptura: document.getElementById("personaCaptura").value,
    apellidoPaterno: document.getElementById("apellidoPaterno").value,
    apellidoMaterno: document.getElementById("apellidoMaterno").value,
    nombre: document.getElementById("nombre").value,
    fechaNacimiento: document.getElementById("fechaNacimiento").value,
    curp: document.getElementById("curp").value,
    genero: document.getElementById("genero").value,
    lugarNacimiento: document.getElementById("lugarNacimiento").value,
    calle: document.getElementById("calle").value,
    numero: document.getElementById("numero").value,
    colonia: document.getElementById("colonia").value,
    municipio: document.getElementById("municipio").value,
    codigopostal: document.getElementById("codigopostal").value,
    telefonocasa: document.getElementById("telefonocasa").value,
    telefonocelular: document.getElementById("telefonocelular").value,
    adultoNino: document.getElementById("adultoNino").value
  };

  try {

  const respuesta = await fetch(URL, {
    method: "POST",
    body: JSON.stringify(datos)
  });

  

  const texto = await respuesta.text();
  console.log("Respuesta Apps Script:", texto);
  alert("Registro guardado correctamente");
  document.getElementById("registroForm").reset();
} catch (error) {
  console.error("Error:", error);
  alert("Error al guardar: " + error.message);
}

// ===============================
// CONVERTIR A MAYÚSCULAS
// ===============================

const inputsMayusculas = document.querySelectorAll(
  'input[type="text"], textarea'
);

inputsMayusculas.forEach(input => {
  input.addEventListener("input", () => {
    input.value = input.value.toUpperCase();
  });
});
}
