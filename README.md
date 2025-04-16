# Atividade Memes Hub

## Assim como proposto em sala de aula, criei uma aplicação de Web em NextJS sobre um site de memes.

# 📝 Criação do projeto 📝

## Utilizei da documentação que realizamos durante as aulas de front-end para inicializar uma nova aplicação em React, assim como fizemos durante todo o aprendizado.
## Ao iniciar da atividade, o professor disponibilizou o código de dois arquivos centrais (page.jsx e page.module.css), copiei esses códigos e transferi para meu projeto.

# 🧩 Componentização & Props 🧩

### Para começar, criei o componente da Header da aplicação, sem props, e em seguida, segui com o componente da Herosection, no entanto, um erro denunciou que não a haveria forma de continuar o desenvolvimento sem a aplicação de props na HeroSection. No entanto, eu não me lembrava exatamente a sintaxe do método map, e tive de consultar o material do professor, e com facilidade, consegui realizar. 
### Aproveitando que estava fazendo a props de um componente, e me pus a fazer o da Header também, tive certos erros na passagem de propriedades do array que me travaram, mas consegui solucionar todos com certa dificuldade. 
### Logo, parti para o componente da seção de categorias, que deu certo de primeira. Mas como sou um dev de respeito, percebi que poderia componentizar os cards das categrias dentro da seção de categorias. Tive que pensar bastante para chegar a uma lógica funcional para a passagem de props de um componente menor dentro de outro componente paterno, mas, por incrível que pareça, consegui de primeira.
### E assim fui seguindo por diversos outros componentes e suas passagens de props, a maioria deles sem mais dificuldades.
### Os problemas começaram a surgir durante a criação do props da footer, onde eu tive que criar arrays para o props de footerData, mas o método map não funcinava declarando que o array era indefinido. Nessas condições, tive de recorrer ao Copitlot, que me ajudou a resolver esse problema e me explicar o que estava acontecendo.
### Outro componente que tive certa dificuldade foi a sideBar. Não nela em si, mas na tagcloud em específico. Eu passei os props como era esperado, mas por algum motivo que eu não entendi qual, e que nem o copilot conseguiu resolver, o flexbox da tagcloud nao estava funcionando, fazendo com que as tags ficassem organizadas em colunas. O mais impressionante é que somente asa propriedades de display: flex e gap não eram passadas, uma vez que se eu quisesse mudar a cor de fundo ou o tamanho da tagcloud, eu conseguiria. Portanto, lamento em informar que envio esta atividade com esse defeito.
### Mas vale ressaltar que todo o resto está adequdamente funcional.


