
const empleados=[

    {
        id:1,
        nombre:'Fernando'
    },

    {
        id:2,
        nombre:'Linda'
    },

    {
        id:3,
        nombre:'Karen'
    }
]

const salarios=[

    {
        id:1,
        salario:1000
    },

    {
        id:2,
        salario:2000
    },

]
//funcion salarios
const id=3;
const getSalario= (id , callback)=>{
    const salario= salarios.find(s=> s.id===id)?.salario;


    if(salario){
        callback(null,salario);
    }
    else{
    callback(`El salario del empleado con id ${id} no existe`) 
    }

}
const getEmpleado= (id , callback)=>{
    const empleado= empleados.find(e=> e.id===id)?.nombre


    if(empleado ){
        callback(null,empleado);
    }
    else{
    callback(`El empleado con id ${id} no existe`) 
    }

}
getEmpleado(id, (err, empleado)=>{

    if(err){console.log('Error!')
        return console.log(err)
    }else{
        console.log('Empleado existe su nombre es :')
        console.log(empleado)
    }
    getSalario(id, (err, salario)=>{

        if(err){console.log('Error!')
            return console.log(err)
        }




            console.log('El empleado ' ,empleado, 'tiene un salario de : ' ,salario)
          //  console.log(salario.salario)
        
       
    })
})

 




