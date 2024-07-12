

const deadpool={
    nombre: 'Wade',
    apellido:'Wilson',

    poder:'Regeneracion',

    getNombre: function(){
        return `${this.nombre} ${this.apellido}`;
    }
}

function imprimeHeroe({nombre, apellido,poder,edad=0}){

    console.log(nombre,apellido,poder,edad);
}
// imprimeHeroe(deadpool);


//const {nombre, apellido,poder,edad=0} =deadpool;
//console.log(nombre,apellido,poder,edad);
const heroes=['Deadpool', 'Superman', 'Batman'];
const [,,h3]=heroes;
console.log(h3)


const persona={
    nombre:'Fabian',
    apellido:'Leon'
}
function imprimeprops({nombre,apellido}){
    console.log(nombre + apellido);
}
imprimeprops(persona);