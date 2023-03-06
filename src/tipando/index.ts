import { frota, TCarro } from "./frota"

function buscarCarrosPorMarca(frota: TCarro[], marca?: string): TCarro[] { //TCarro[] é o retorno da função;
  //? = o argumento é opicional;
  if (marca === undefined) {
    return frota
  }

  return frota.filter(
    (carro) => {
      return carro.marca.toLocaleLowerCase() === marca.toLocaleLowerCase()
    }
  )
}
console.log(buscarCarrosPorMarca(frota))