# Frontend de Pagamento Fictício

Este é o frontend para uma aplicação de pagamento fictício construída com React. O frontend permite que os usuários insiram os detalhes do cartão e o valor da transação para simulação de um pagamento, integrando-se com a API de backend.

## Tecnologias Utilizadas
- React
- Axios
- CSS

## Configuração do Ambiente

### Pré-requisitos
- Node.js

### Instalação
1. Clone o repositório:
   ```sh
   git clone <URL_DO_REPOSITORIO>
   cd pagamentos-frontend
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

### Execução
Inicie o servidor de desenvolvimento:
```sh
npm start
```

O frontend estará em execução na porta `3000`.

## Estrutura do Projeto
- `src/App.js`: Componente principal contendo o formulário de pagamento e a lógica de requisição.
- `src/App.css`: Estilos CSS para a aplicação.

## Funcionalidades

### Formulário de Pagamento
- **Campos**:
  - Número do Cartão
  - Nome no Cartão
  - Data de Validade
  - CVV
  - Valor

### Envio de Pagamento
- Os detalhes do pagamento são enviados para a API de backend utilizando Axios.
- A resposta da API é exibida na interface, mostrando o ID da transação, nome no cartão, valor, status e data.

## Exemplo de Uso

### Tela Inicial
![Tela Inicial](./src/img/inicial.jpg)

### Formulário de Pagamento
![Formulário de Pagamento](./src/img/form.jpg)

### Resposta do Pagamento
![Resposta do Pagamento](./src/img/resp.jpg)


## Contato
Para mais informações, entre em contato:
- **Email**: tiaguinaldo2016@gmail.com
- **LinkedIn**: [Aguinaldo Borges](https://www.linkedin.com/in/aguinaldo-borges-dev/)
- **GitHub**: [AguinaldoBorges](https://github.com/AguinaldoBorges)
```