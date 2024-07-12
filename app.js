const { options } = require("yargs");
var colors = require('colors');
const { crearArchivo2 } = require("./helpers/promesa-multiplicar");
const argv = require("./config/yargs");
console.clear();
console.log(argv.l);
var colors = require('colors/safe');

const user= {

  nombre:"Fabian",
  edad:20
}

const {nombre,edad}= user;
console.log(nombre,edad)
console.log(colors.green('Hola'))


console.log("base : ", argv.b);

crearArchivo2(argv.b,argv.l, argv.h)
  .then()
  .then((nombreArchivo) => console.log(nombreArchivo))
  .catch((err) => console.log(err));

/* const argv=require('yargs')

            .option('b',{
                alias:'base',
                type:'number',
                demandOption:'true'


            })
            .check((argv,options)=>{
                if(isNaN(argv.b)){
                    throw 'La base tiene que ser un numero'
                }

                return true;
            })
            .argv;

console.clear();
console.log(argv);

console.log('base : ', argv.b);


crearArchivo2(argv.b)
.then(nombreArchivo =>console.log(nombreArchivo))
.catch(err=>console.log(err)); */
