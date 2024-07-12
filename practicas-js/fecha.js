
const fecha = new Date();

const year=fecha.getFullYear();
const mes= fecha.getMonth();
const dia= fecha.getDate();
const textoHora= `

El año es : ${year}

`
console.log(textoHora, "El mes es ", mes , "El dia", dia);