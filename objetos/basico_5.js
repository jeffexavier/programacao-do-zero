const cliente = {
    codigo: 16532,
    nome: 'Joyce',
    vip: true,
    endereco: {
        logradouro: 'QNL 1 Conjunto J',
        numero: 12,
        complemento: 'Casa',
        pontosRef: [
            {nome: 'Hospital X', muitoProximo: true},
            {nome: 'Shopping Y', muitoProximo: false},
        ]
    },
    nomeFilhos: [
        'Bia', 'Carlos', 'Gabriel'
    ]
};

console.log(cliente['endereco']['logradouro']);
console.log(cliente.endereco.logradouro);
console.log(cliente.endereco.pontosRef[0].muitoProximo);