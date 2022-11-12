// Função construtora (Classe) -> Objeto

function data(dia = 1, mes = 1, ano = 2021) {
    this.data = dia;
    this.mes = mes;
    this.ano = ano;
    this.exibir = function() {
        return `${this.data}/${this.mes}/${this.ano}`
    }
}

const d1 = new data(28, 5, 1997);
const d2 = new data(22, 1, 1996);
const d3 = new data(12, 4, 2020);

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());

console.log(d1);
console.log(d2);
console.log(d3);


