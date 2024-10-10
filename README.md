# E-commerce Backend

Este é o backend de um sistema de e-commerce simplificado. O sistema permite que usuários se cadastrem, façam login e realizem compras de produtos.

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Prisma
- PostgreSQL

## Requisitos do Sistema

- Cadastro de Usuário

  - O sistema deve permitir o cadastro de dois tipos de usuários: clientes e administradores.
  - Os clientes podem comprar produtos e visualizar pedidos.
  - Os administradores podem cadastrar produtos, atualizar produtos, remover produtos e visualizar todas as compras.
  - Para cada usuário, o sistema deve armazenar: Nome Completo, CPF, e-mail, senha (criptografada) e tipo de usuário (cliente ou administrador).
  - Tanto o CPF quanto o e-mail devem ser únicos.

- Gerenciamento de Produtos

  - O administrador deve ser capaz de cadastrar, atualizar e remover produtos.
  - Cada produto deve ter as seguintes informações: ID, nome, descrição, preço, quantidade em estoque e data de criação.

- Realização de Compras
  - O cliente pode visualizar a lista de produtos disponíveis e fazer compras.
  - O cliente só pode comprar produtos se houver quantidade suficiente em estoque.
  - Ao realizar uma compra, o sistema deve atualizar o estoque e registrar a compra na tabela de pedidos.
  - Cada pedido deve conter: ID do pedido, ID do cliente, lista de produtos comprados, quantidade de cada produto e data da compra.

## Configuração do Ambiente

### Pré-requisitos

- Node.js
- PostgreSQL

### Passos para Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/ecommerce-backend.git
   cd ecommerce-backend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure o banco de dados PostgreSQL e atualize o arquivo `.env` com a string de conexão do banco de dados:
   ```bash
    DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"
   ```
4. Configure o Prisma:
   ```bash
   npx prisma migrate dev --name init
   ```
5. Inicie o servidor:
   ```bash
   npm start
   ```

### Estrutura do Projeto

      ecommerce-backend/
      ├── node_modules/
      ├── src/
      │   └── index.ts
      ├── prisma/
      │   ├── schema.prisma
      │   └── migrations/
      ├── tsconfig.json
      ├── .env
      └── README.md

## Testando a API

### Registro de Usuário

- Método: `POST`
- URL: `http://localhost:3000/register`
- Corpo(JSON):

  ```bash
  {
  "name": "John Doe",
  "cpf": "12345678900",
  "email": "john.doe@example.com",
  "password": "password123",
  "userType": "admin"
  }
  ```

### Criação de Produto:

- Método: `POST`
- URL: `http://localhost:3000/products`
- Corpo(JSON):

      {
      "name": "Product 1",
      "description": "Description of Product 1",
      "price": 100.0,
      "stock": 10
      }

### Criação de Produto

- Método: `POST`
- URL: `http://localhost:3000/products`

  ```bash
  {
  "name": "Product 1",
  "description": "Description of Product 1",
  "price": 100.0,
  "stock": 10
  }
  ```

### Atualização de Produto

- Método: `PUT`
- URL: `http://localhost:3000/products/1`
  (Substitua `1` pelo ID do produto)
- Corpo(JSON):

  ```bash
  {
  "name": "Updated Product 1",
  "description": "Updated Description of Product 1",
  "price": 150.0,
  "stock": 5
  }
  ```

### Remoção de Produto

- Método: `DELETE`
- URL: `http://localhost:3000/products/1`
    (Substitua `1` pelo ID do Produto)
