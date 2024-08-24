const inquirer= require('inquirer');

const preguntas=[
    {
        type:'list',
        name:'opcion',
        message: '¿Que desea hacer?',
        choices:['opt1', 'opt2', 'opt3', 'opt4', 'Salir alv']
    }
];
require('colors');

const inquirerMenu = async() => {
    console.clear();
        console.log('====================='.green);
        console.log('Selecciona una opcion'.green);
        console.log('====================='.green);
    
      /*   console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listar Tareas Completadas`);
        console.log(`${'4.'.green} Listar Tareas Pendientes`);
        console.log(`${'5.'.green} Completar Tarea(s)`);
        console.log(`${'6.'.green} Borrar Tarea(s)`);
        console.log(`${'0.'.green} Salir \n`); */
    
    const opt= await inquirer.prompt(preguntas);
    return opt;
}



module.exports= {
    inquirerMenu,
}