const prompt = require("prompt-sync")()
const {adicionarResidencia,atualizarResidencia,listarResidencias,removerResidencia} = require("./Residencias.js")

let residencias = [
  {
    id: 1,
    bairro: "Centro",
    rua: "Rua Jequitiba",
    numero: 71,
    moradores: ["Pedro", "Matheus"],
  },
  {
    id: 2,
    bairro: "Centro",
    rua: "Rua 2",
    numero: 72,
    moradores: ["Maria", "João"],
  },
  {
    id: 3,
    bairro: "Uvaranas",
    rua: "Rua Tamandaré",
    numero: 10,
    moradores: ["Ana", "José", "Paulo"],
  },
];


while (true) {
    console.log(`
                 ╔═════════════════════════════════════╗
                 ║1. Criar uma nova residência         ║
                 ║2. Atualizar uma residência existente║
                 ║3. Listar residencias cadastradas    ║
                 ║4. Remover uma residência existente  ║
                 ║5. Sair do programa                  ║
                 ╚═════════════════════════════════════╝`)

    const opcao = prompt("Digite uma opcão:▂▂▂▂▂");        

    switch (opcao) {
        case "1":
            adicionarResidencia()
            break;
        case "2":
            atualizarResidencia()
            break;
        case "3":
            listarResidencias()
            break;  
        case "4":
            removerResidencia()
            break;
        case "5":
            console.log("Saindo...")
            process.exit()
            break;          
        default:
            console.log('Opção inválida')
            break;
    }
}

