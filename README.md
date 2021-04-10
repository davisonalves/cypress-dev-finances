# Meu primeiro teste automatizado com cypress  🤖 
 Primeiro iremos **conhecer a aplicação** que vamos validar.
 
 ![home](https://user-images.githubusercontent.com/53572219/114283386-769f2a80-9a17-11eb-9969-20c2889d9b48.png)
 
 O [Dev finances](https://dev-finance.netlify.app/) é uma aplicação web para controle financeiro, nele podemos listar algumas funcionalidades como:
 * Registrar uma nova transação.
 * Apagar uma transação.
 * Visualizar o "Extrato" das nossas transações.
 * Visualizar o nosso "Saldo" em total.
 
![transação](https://user-images.githubusercontent.com/53572219/114283399-8caceb00-9a17-11eb-9160-8f7b3e127039.png)

![extrato](https://user-images.githubusercontent.com/53572219/114283416-a1897e80-9a17-11eb-8caf-61fbe2b51c30.png)

**🤔É importante saber:** para registrar uma transação do tipo *entrada* devemos colocar um valor positivo como R$20. Já para as transações do tipo *saída* devemos colocar um valor negativo como R$-12.
## O que vamos validar 🔧
1. O registro de uma transação do tipo *Entrada*.
2. O registro de uma transação do tipo *Saída*.
3. A remoção de uma entrada e saída.

**No final obtemos esse resultado:**
![rodando-cypress](https://user-images.githubusercontent.com/53572219/114283438-ba922f80-9a17-11eb-8788-45f74f91e44d.gif)

