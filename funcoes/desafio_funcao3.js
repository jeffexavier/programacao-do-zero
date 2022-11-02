// média das duas maiores notas
// >= 7 aprovado
// entre 4 e 6,9 recuperação
// entre 0 e 3,9 reproado
 
const nota1 = 7.8;
const nota2 = 7.0;
const nota3 = 0.0;

const menorNota = Math.min(nota1, nota2, nota3);

const media = (nota1+nota2+nota3-menorNota)/2;

function verificaNota(media) {
    // switch(Math.round(media)) {
    //     case 10: case 9: case 8: case 7:
    //         return 'Aprovado' ;
    //     case 6: case 5: case 4:
    //         return 'Em recuperação' ;
    //     case 3: case 2: case 1: case 0:
    //         return 'Reprovado';
    //     default: return null;                   
    // }
    if(media >= 7) {
        return "Aprovado";
    } else if(media >= 3) {
        return "Em recuperação";
    }else {
        return "Reprovado";
    }
    
}


// console.log(nota1, nota2, nota3);
// console.log(menorNota);
// console.log(nota1+nota2+nota3-menorNota)
// console.log(media)
console.log(verificaNota(media));