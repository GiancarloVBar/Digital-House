//-----------------------------------------------------------------------------------------------------
//                                      EXERCICIOS 04/11/2021
//-----------------------------------------------------------------------------------------------------

console.log("\n------------------------------------------------------------------------------------------")
console.log("EXERCICIOS 04/11/2021")
console.log("------------------------------------------------------------------------------------------")

/**
 * *****************************************************************************************************
 *                                          Exercicio 01
 * *****************************************************************************************************
 */

 console.log("\nExercicio 01\n")

 
{
    console.log("\n Exercicio de manipulacao de array\n")
    const users = [
        {
        name: "Bruno Oliveira",
        username: "byoliveira",
        age: 24
        },
        {
        name: "João Paulo",
        username: "jpaulo",
        age: 30
        },
        {
        name: "Lays Alves",
        username: "lalves",
        age: 18
        },
        {
        name: "Julia dos Santos",
        username: "jsantos",
        age: 19
        },
        {
        name: "Brenda Araujo",
        username: "baraujo",
        age: 14
        },
        {
        name: "Henrique Souza",
        username: "hsouza",
        age: 25
        },
        {
        name: "Jose Oliveira",
        username: "joliveira",
        age: 24
        },
        {
        name: "Matheus Felix",
        username: "mfelix",
        age: 20
        },
        {
        name: "Romulo Almeida",
        username: "ralmeida",
        age: 21
        },
        {
        name: "Bruna Assis",
        username: "bassis",
        age: 29
        },
        {
        name: "Jaciane Oliveira",
        username: "joliveira",
        age: 35
        },
        {
        name: "Carlos Eduardo",
        username: "ceduardo",
        age: 18
        },
        {
        name: "Lucas Silva",
        username: "lsilva",
        age: 22
        },
        {
        name: "Douglas Costa",
        username: "dcosta",
        age: 32
        },
        {
        name: "Barbara Santos",
        username: "bsantos",
        age: 10
        },
        {
        name: "Ralf Augusto",
        username: "raugusto",
        age: 19
        },
        {
        name: "Lucas Crispin",
        username: "lcrispin",
        age: 20
        },
        {
        name: "Lucas Crispin",
        username: "lcrispin",
        age: 20
        },
        {
        name: "Lucas Crispin",
        username: "lcrispin",
        age: 20
        },
        {
        name: "Lucas Crispin",
        username: "lcrispin",
        age: 20
        },
        {
        name: "Lucas Crispin",
        username: "lcrispin",
        age: 20
        },
        {
        name: "Augusto de Melo",
        username: "amelo",
        age: 31
        },
        {
        name: "Carla Alves",
        username: "calves",
        age: 28
        },
        {
        name: "Jonas Sousa",
        username: "jsousa",
        age: 31
        },
        {
        name: "Lucas Crispin",
        username: "lcrispin",
        age: 20
        },
        {
        name: "Pedro Lara",
        username: "plara",
        age: 19
        },
        {
        name: "Victor Viegas",
        username: "vviegas",
        age: 24
        },
        {
        name: "Lucas Crispin",
        username: "lcrispin",
        age: 20
        },
        {
        name: "Matheus Augusto",
        username: "maugusto",
        age: 20
        },
        {
        name: "Silvia Bertis",
        username: "sbertis",
        age: 24
        },
        {
        name: "Glaucia Gimenes",
        username: "ggimenes",
        age: 24
        },
        {
        name: "Glaucia Gimenes",
        username: "ggimenes1",
        age: 30
        },
        {
        name: "Glaucia Gimenes",
        username: "ggimenes2",
        age: 18
        },
        {
        name: "Mayra Barbosa",
        username: "mbarbosa",
        age: 29
        },
        {
        name: "Mayla Santos",
        username: "msatnos3",
        age: 17
        },
        {
        name: "Renato Augusto",
        username: "raugusto",
        age: 31
        },
        {
        name: "Roger Guedes",
        username: "rguedes",
        age: 23
        },
        {
        name: "Gustavo Silva",
        username: "gsilva",
        age: 24
        },
        {
        name: "Fabio Santos",
        username: "fsantos",
        age: 38
        },
        {
        name: "Jose Ferreira Neto",
        username: "jneto",
        age: 51
        }
        ];

        //primeira parte: adicionar os integrantes no final do array

        users.push({
            name: "Luiza Oliveira",
            username: "Luiza",
            age:35
        },
        {
            name:"William Mendes",
            username:"Wmendes",
            age: 30
        },
        {
            name:"Giancarlo",
            username:"gvbarros",
            age: 36
        },
        {
            name:"Jaqueline Martini",
            username:"jaquelinemartini",
            age: 21
        }
        )

        console.log(users)

        //segunda parte: adicionar os integrantes no comeco do array

        users.unshift({
            name: "Luiza Oliveira",
            username: "Luiza",
            age:35
        },
        {
            name:"William Mendes",
            username:"Wmendes",
            age: 30
        },
        {
            name:"Giancarlo",
            username:"gvbarros",
            age: 36
        },
        {
            name:"Jaqueline Martini",
            username:"jaquelinemartini",
            age: 21
        }
        )

        console.log(users)

        //terceira parte: remover os dois últimos

        users.pop()
        users.pop()
        
        console.log(users)

 
    /**
    * *****************************************************************************************************
    *                                          Exercicio 02
    * *****************************************************************************************************
    */

    console.log("\nExercicio 02\n")

    index1 = users.findIndex(x => x.username === 'ggimenes1')
    console.log(index1)

    index2 = users.findIndex(x => x.username === 'raugusto')
    console.log(index2)

    users.splice(index1)
    console.log(users)

    users.splice(index2)
    console.log(users)
}

{
    console.log("\nteste\n")
    let teste = ["u0", "u1", "u2", "u3", "u4", "u5", "u6"]
    console.log(teste.length)
    console.log(teste)
    teste.splice(teste.length-2,2)
    console.log(teste)
}