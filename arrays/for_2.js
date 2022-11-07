const notas = [7, 8, 3, 5, 10, 9, 8, 8];

// foreach

let valores = '';

for(let nota of notas) {
    valores += nota + ' ';
}

console.log(valores);

let indices = '';

for(let indice in notas) {
    indices += indice + ' ';
}

console.log(indices);

// for 'off' usa os valores do array
// for 'in' usa os índices do array