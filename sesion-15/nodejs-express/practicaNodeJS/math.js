const Math = {};

function suma(num1, num2) {
  return num1 + num2;
}

function resta(num1, num2) {
  return num1 - num2;
}

function multiplica(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return `No se puede dividir entre 0`;
  } else {
    return num1 / num2;
  }
}

// exports.suma = suma;
// exports.resta = resta;
// exports.multiplica = multiplica;
// exports.divide = divide;

Math.suma = suma;
Math.resta = resta;
Math.multiplica = multiplica;
Math.divide = divide;

module.exports = Math;
