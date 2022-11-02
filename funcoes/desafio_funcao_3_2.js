const nota1 = 7.8;
const nota2 = 3.1;
const nota3 = 6.7;

const menorNota = Math.min(nota1, nota2, nota3);

const media = (nota1+nota2+nota3-menorNota)/2;

function verificaNota(media) {
    if(media >= 7) {
        return "Aprovado";
    } else if(media >= 3) {
        return "Em recuperação";
    } else {
        return "Reprovado";
    }

}

console.log(verificaNota(media));