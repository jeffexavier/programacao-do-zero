// Objeto data
// Atributos: dia, mes e ano
// Metodo: exibir -> "dia/mes/ano

const dataNascimento = {
    dia: 28,
    mes: 05,
    ano: 1997,
    exibirDataNascimento: function() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
};

console.log(dataNascimento.exibirDataNascimento())
