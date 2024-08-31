# Descrição do Código

Este código em JavaScript implementa uma classe chamada jogador, que serve para modelar personagens em um ambiente de jogo. A classe permite criar personagens com atributos específicos como nome, idade, e classe. Além de definir esses atributos, a classe possui um método chamado atacar, que determina o tipo de ataque que o personagem realiza com base em sua classe.

## Estrutura da Classe
Atributos:

* nome: O nome do personagem, que representa o apelido ou título do herói.

* idade: A idade do personagem, que pode ser utilizada para caracterizar ainda mais o herói, embora não tenha impacto direto na funcionalidade do código.

* classe: A classe do personagem, como "mago", "guerreiro", "monge", etc., que define o tipo de ataque disponível.


## Método atacar:

- Este método utiliza um switch para verificar a classe do personagem e atribuir uma habilidade ou arma de ataque correspondente. As opções incluem ataques como magia para magos, espadas para guerreiros, artes marciais para monges, shurikens para ninjas, e machados para bárbaros. Caso a classe não seja reconhecida, o método retorna "um ataque desconhecido".
- Uma mensagem é então exibida no console, informando o nome do personagem, sua classe, e o tipo de ataque que ele realizou. O nome do personagem é destacado em negrito para uma melhor visualização.


##

O código inclui a criação de cinco diferentes personagens (ou heróis), cada um com seu próprio nome, idade e classe. Após a criação desses personagens, o método atacar é chamado para cada um deles, simulando a execução de um ataque.

Este código é uma demonstração básica de como classes e métodos podem ser utilizados em JavaScript para criar e gerenciar personagens em um jogo. Ele ilustra como diferentes atributos podem influenciar o comportamento de objetos criados a partir de uma classe, e como métodos podem ser personalizados para fornecer funcionalidades específicas baseadas nesses atributos.
