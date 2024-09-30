function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  if(x > y) {
    return x;
  }else if(y > x || y === x){
      return y;
  }

  }

console.log(obtenerMayor(10, 5))
module.exports = obtenerMayor;
