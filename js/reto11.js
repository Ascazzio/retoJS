let laborables = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
let festivo = ['sabado', 'domingo'];
let contadorDia = 0;

let dia = prompt('Que dia quiere consultar?');

laborables.forEach(element => {
    if (dia.toLowerCase() == element) {
        alert(dia + ' es un dia laborable');
    } else 
        contadorDia++;
});

festivo.forEach(element => {
    if (dia.toLowerCase() == element) {
        alert(dia + ' es un dia no laborable');   
    } else
        contadorDia++;
});

if (contadorDia >= 7) {
    alert('Creo que ' + dia + ' no es un dia de la semana');   
}

//  Cada vez que "dia" no concuerda con "element", se agrega 1 al contadorDia
//  si tiene 7 o mas, quiere decir que "dia" no concuerda con ningun dia de la
//  semana, por lo tanto, ese dia no existe