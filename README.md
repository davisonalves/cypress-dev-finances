# Meu primeiro teste automatizado com cypress
 Primeiro iremos **conhecer a aplicação** que vamos validar hoje.
 ![Home]{C:\Users\davis\Desktop\home.png}
 O [Dev finances(https://dev-finance.netlify.app/)] é uma apliacação web para controle financeiro, nele podemos listar algumas funcionalidades como:
 *Registrar uma nova transação.
 *Apagar uma transação.
 *Visualizar o "Extrato" das nossas transações.
 *Visualizar o nosso "Saldo" em total.
 ![Nova-transação]{https://cdn.discordapp.com/attachments/806509611984879666/830528691704299540/unknown.png}

 ![Extrato-saldo]{https://cdn.discordapp.com/attachments/806509611984879666/830528733106405406/unknown.png}
**É importante saber:** para registrar uma transação do tipo *entrada* devemos colocar um valor positivo como R$20. Já para as transações do tipo *saída* devemos colocar um valor negativo como R$-12.
## O que vamos validar
1. O registro de uma transação do tipo *Entrada*.
2. O registro de uma transação do tipo *Saída*.
3. A remoção de uma entrada e saída.
**No final obtemos esse resultado:**
![Rodando-cypress]{https://cdn.discordapp.com/attachments/806509611984879666/830532107347558420/Nova-guia.gif}
