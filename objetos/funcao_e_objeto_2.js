function criarData(dia, mes, ano) {
    return {
        dia: dia,
        mes: mes,
        ano: ano,
        exibir: function() {
            return `${this.dia}/${this.mes}/${this.ano}`
        }
    };
}

const d1 = criarData(28, 5, 1997);
const d2 = criarData(22, 1, 1996);
const d3 = criarData(12, 4, 2020);

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());