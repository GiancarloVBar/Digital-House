//-----------------------------------------------------------------------------------------------------
//                                      EXERCICIOS 02/11/2021
//-----------------------------------------------------------------------------------------------------

console.log("\n------------------------------------------------------------------------------------------")
console.log("EXERCICIOS 02/11/2021")
console.log("------------------------------------------------------------------------------------------")


/**
 * *****************************************************************************************************
 *                                          Exercicio 01
 * *****************************************************************************************************
 */

 console.log("\nExercicio 01\n")

const alunos = [
    {
        nome: 'Carlos',
        idade: 23,
        curso: 'Marketing'
    },
    {  
        nome: 'Augusto',
        idade: 32,
        curso: 'Negócios'
    },
    {
        nome: 'Fernanda',
        idade: 19,
        curso: 'Marketing'
    }
]

//console.log(alunos[2].idade)

var tot = 0
var med = 0

{
    for (let i = 0; i<alunos.length; i++) {
        tot = tot + alunos[i].idade
    }
    console.log("Os alunos da DH possuem uma idade total de: " + tot + "\n")
}

console.log("Um aluno da DH tem em média "+tot/alunos.length+" anos\n")

{
    for (let i = 0; i<alunos.length; i++) {
        
    }
}