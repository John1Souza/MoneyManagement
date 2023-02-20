# MoneyManagement

### O ReactJS é uma poderosa biblioteca que nos permite criar interfaces de usuário dinâmicas para aplicações web, neste projeto "Simples", foram utilizadas algumas das ferramentas e recursos mais populares do ReactJS, dentre eles TypeScript, useEffect, useContext, MirageJS, modal, styled components, Axios, e Context API. 

### Íncrivel como algo que aparenta ser uma simples aplicação de gerenciamento de gastos, ao mesmo tempo foram utilizados tantos conhecimentos para sua criação.

![image](https://user-images.githubusercontent.com/109979241/220179949-93ceb11c-5b98-4f48-993e-18f41f275b0e.png)

### Nesta aplicação é possível registrar todas as suas transações, nome, valor, categoria e tipo, automaticamente ela cadastra a data de cada transação.

### Clicando em "Nova Transação", será aberto um modal com um formulário para que seja realizado o cadastro da sua nova transação

![image](https://user-images.githubusercontent.com/109979241/220179968-33b365f8-76f7-4fd8-a9ca-6775a570f28b.png)

### Após inserir o nome, o valor, clicar no botão referente à "Entrada", no caso de valores recebidos, e "Saída" no caso dos gastos, inserir a "Categoria" e clicar em "Registrar" 

![image](https://user-images.githubusercontent.com/109979241/220180132-1078c3ca-4d96-4c5b-9bd0-1004075cf21c.png)

![image](https://user-images.githubusercontent.com/109979241/220180309-591cb5b3-bc26-4172-9326-11d9d2c0bfb8.png)

### O modal com formulário será fechado, e na tela inicial estarão armazenadas suas novas transações, informando agora o total de "Entradas" e "Saídas" e o "Saldo Total"

![image](https://user-images.githubusercontent.com/109979241/220180329-b379d783-9c7d-4560-8512-ca98a3ba85ad.png)

# Tecnologias
### Neste projeto foram utilizados, o processo de aprendizagem é seguido de muitos erros, erros com os quais espero aprender bastante.


## TypeScript
- Utilizado para tratamento de erros, gerando uma melhor qualidade no código e uma tipagem.
## useState
- utilizado para armazenar e mudar os dados obtidos, como os valores dos inputs do modal.
## useEffect e useContext 
- o primeiro foi utilizado para buscar(fetch) os dados da API e para atualizar o estado das variáveis quando necessário, o segundo para fazer mudanças no estado que precisam ser compartilhadas com multiplos components. neste exemplo as transações, o estado das transações precisavam ser passados por muitos componentes diferentes.
## Miragejs
- utilizado para simular a API
## Modal
- Utilizado para fazer os formulários
## Styled-Components
- A estilização foi feita utilizando o Styled-Components, que dentre alguns benefícios, permite a estilização em cadeia
## Axios
- foi utilizado para conexão com a API, ao invés do fetch padrão, torna o processo um pouco mais simples, pois podemos definir um endereço HTTP padrão.

## Deploy

yarn install -y 

yarn start




