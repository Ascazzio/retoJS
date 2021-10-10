let num1 = 0;
let num2 = 0;
let operador = "a";

num1 = prompt('Ingrese el primer operando');
num2 = prompt('Ingrese el segundo operando')
operador = prompt('Ingrese un operador (+, -, *, /, ^, %)');

while (operador != '+' && operador != '-' && operador != '*' && operador != '/' && operador != '^' && operador !='%') {
    operador = prompt('Operador invalido, ingrese alguno de estos operadores: (+, -, *, /, ^, %)');
}

switch (operador) {
    case '+':
        alert(num1 + ' + ' + num2 + ' = ' + (parseInt(num1) + parseInt(num2)));
        break;

    case '-':
        alert(num1 + ' - ' + num2 + ' = ' + (parseInt(num1) - parseInt(num2)));
        break;

    case '*':
        alert(num1 + ' * ' + num2 + ' = ' + (parseInt(num1) * parseInt(num2)));
        break

    case '/':
        alert(num1 + ' / ' + num2 + ' = ' + (parseFloat(num1) / parseFloat(num2)));
        break;

    case '^':
        alert(num1 + ' ^ ' + num2 + ' = ' + (parseInt(num1) ^ parseInt(num2)));
        break;

    case '%':
        alert(num1 + ' modulo ' + num2 + ' = ' + (parseFloat(num1) % parseFloat(num2)));
        break;
        
    default:
        break;
}

