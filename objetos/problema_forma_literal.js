const d1 = {
    dia: 28,
    mes: 5,
    ano: 1997,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
};

const d2 = {
    dia: 22,
    mes: 1,
    ano: 1996,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
};

const d3 = {
    dia: 12,
    mes: 4,
    ano: 2020,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
};


console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());