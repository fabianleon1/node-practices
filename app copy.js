
//const {crearArchivo}=require('./helpers/multiplicar')
const {crearArchivo2}=require('./helpers/promesa-multiplicar')

//console.clear();
//  const base=50;

/*  crearArchivo2(base)
 .then(nombreArchivo =>console.log(nombreArchivo,'creado'))
 .catch(err=>console.log(err)); */

    const yargs=require('yargs').argv;
 const [, , arg3='base=5']=process.argv;

 const [,base]= arg3.split("=");
 console.log(base)

 crearArchivo2(base);

// console.log(salida);

//La diferencia entre tener el Sync al final, es que necesitariamos un try y catch para el sync, 
// de otra forma se puede hacer como anteriormente se hace

/* fs.writeFileSync(`Tabla-de-${xa}.txt`,salida, (err)=>
{
    if(err) throw err;
    console.log(`Archivo tabla del ${xa} creado`);
}) */


