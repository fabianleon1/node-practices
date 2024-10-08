const { read } = require('fs');

require('colors');



const mostrarMenu = ()=>{


    return new Promise(resolve =>{
        console.clear();
        console.log('====================='.green);
        console.log('Selecciona una opcion'.green);
        console.log('====================='.green);
    
        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listar Tareas Completadas`);
        console.log(`${'4.'.green} Listar Tareas Pendientes`);
        console.log(`${'5.'.green} Completar Tarea(s)`);
        console.log(`${'6.'.green} Borrar Tarea(s)`);
        console.log(`${'0.'.green} Salir \n`);
    
    
        const readline= require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        })
        readline.question('Seleccione una opcion :', (opt)=>{
            console.log(opt);
            readline.close();
            resolve(opt);
        })

    });
   

   
}
const pausa=() => {

    return new Promise(resolve=>{
        const readline= require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        })
        readline.question(`\n Presione ${'ENTER'.blue} para continuar \n`, (opt)=>{
      
            readline.close();
            resolve();
        })
    });
   
}
module.exports ={
    mostrarMenu,
    pausa,
}