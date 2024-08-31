class jogador {
    //Aqui passamos os paremetros desejados. nome, idade e classe.
    constructor(nome, idade, classe) {
        this.nome = nome;
        this.idade = idade;
        this.classe = classe;
    }

    //Aqui criamos um método de ataque, com saída diferente para cada classe.
    atacar() {
        let ataque;
        switch (this.classe.toLowerCase()) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            case "barbaro":
                ataque = "machado"
                break;
            default:
                ataque = "um ataque desconhecido";

        }
        // Imprime a frase, com o nick, classe e o ataque da classe.
        console.log(`O jogacor com o nick \x1b[1m${this.nome}\x1b[0m da classe ${ this.classe }, atacou usando ${ ataque }`)
    }

}
//O **new** cria um novo "jogador (a classe com parametros e etc..."), recebendo os parametros desejados(nome, idade e classe)
let heroi1 = new jogador("Rei-Mago", 28, "mago")

let heroi2 = new jogador("O_Espada", 27, "guerreiro")

let heroi3 = new jogador("theCalm", 32, "monge")

let heroi4 = new jogador("NemMeViu", 19, "ninja")

let heroi5 = new jogador("Barbarinho", 39, "barbaro")

//chama a classe, com o novo(new) herói criado.
heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()
heroi5.atacar()