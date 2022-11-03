function executar(funcao) {
    if(typeof funcao === "function") {
       console.log(funcao()); // <--- Parte central da aula
    }
}

function bomDia() {
    return "Bom dia";
}

//executar(3);
executar(bomDia);
console.log(bomDia()); // <--- Parte central da aula

const x = bomDia;
const y = bomDia();

console.log(x());
console.log(y);

//console.log(typeof executar)
// executar(3);