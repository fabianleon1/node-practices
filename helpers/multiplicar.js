const fs= require('fs');


const crearArchivo2= (base = 5 , listar=false) => {

  console.log("************");

  let salida = "";

  for (var x = 1; x <= 100; x++) {
    salida += `${base * x}\n`;
  }
  fs.writeFileSync(`Tabla-de-${base}.txt`, salida, (err) => {
    // if (err) throw err;
    console.log(`Archivo tabla del ${base} creado`);
  });
};

module.exports = {
  crearArchivo2
};
