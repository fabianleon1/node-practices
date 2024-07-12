const fs = require("fs");

const crearArchivo2 = async (base = 5 , listar=false, hasta=1) => {


  try {

    let salida = "";
  
    for (var x = 1; x <= hasta; x++) {
      salida += `${base * x}\n`;
    }
    if(listar){
 
      console.log("=========================");
      console.log("Tabla de ", base);
      console.log("=========================")
      console.log(salida);
    }

    fs.writeFileSync(`./salida/Tabla-de-${base}.txt`, salida);
    // if (err) throw err;
    return `Archivo tabla del ${base} creado`;
  } catch (err) {
    throw err;
  }
 
};

module.exports = {
  crearArchivo2,
};
