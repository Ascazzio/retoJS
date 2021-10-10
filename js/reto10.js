let n_ventas = prompt('Cuantos articulos se vendieron?');
let res = 0;

for (let i = 1; i <= n_ventas; i++) {
    res = res + parseFloat(prompt('Ingrese el articulo ' + i));
}

alert('Las ganancias de ventas total es: ' + res);