function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
 // Valida que los argumentos sean números enteros
 if (!Number.isInteger(a) || !Number.isInteger(b)) {
  throw new Error('Los argumentos deben ser números enteros');
}

 
if (a === b) {
  return a;
}

let numMin = Math.min(a, b);
let numMax = Math.max(a, b);
let producto = 1;

for (let i = numMin; i <= numMax; i++) {
  producto *= i;
  if (producto === 0) {
    return 0;  
  }
}

 
return producto === -0 ? 0 : producto;
 
}
 
module.exports = productoEntreNúmeros;