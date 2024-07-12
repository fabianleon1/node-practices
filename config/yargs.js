const { number } = require("yargs");

const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: "true",
    describe:"Muestra la base a multiplicar"
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: "false",
    describe:"Te pregunta si quieres mostrar la lista que se multiplico"
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    demandOption:true,
    describe:"Hasta que numero quieres que se multiplique"
  })

  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    } 
      return true;
    
  })
  .check((argv, options) => {
    if (isNaN(argv.h)) {
      throw "La base tiene que ser un numero";
    } 
      return true;
    
  })
  .argv;

module.exports =argv;