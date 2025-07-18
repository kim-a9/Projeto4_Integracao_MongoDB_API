# Projeto4_Integracao_MongoDB_API

---

# 📚 Biblioteca API - Gerenciamento de Livros

Essa é uma API simples e eficiente para gerenciamento de livros em uma biblioteca. O projeto foi desenvolvido com **TypeScript**, **Express**, e tem integração com **MongoDB**, foi estruturada utilizando os princípios da **Clean Architecture** para garantir organização e escalabilidade do código.

---

## 📌 Objetivo

Permitir operações CRUD (Create, Read, Update, Delete) em registros de livros, com segurança, identificadores únicos e facilidade de testes e manutenção.

---

## 🛠️ Tecnologias Utilizadas

- **TypeScript**
- **Express.js**
- **MongoDB** - Banco de dados utilizado na aplicação
- **Mongoose** - Biblioteca para integração com BD
- **Thunder Client** – Testes rápidos no VS Code

---

## ⚙️ Pré-requisitos

Antes de iniciar o projeto, garanta que você tenha:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- npm (instalado com o Node.js)
- [Thunder Client](https://www.thunderclient.com/) ou [Postman](https://www.postman.com/) para testar os endpoints
- MongoDB local ou instância na nuvem (ex: MongoDB Atlas)

---

## 📫 Endpoints Principais

**GET /books** — Listar todos os livros

**GET /books/:id** — Consultar um livro específico

**POST /books** — Criar um novo livro

**PATCH /books/:id** — Atualizar um livro

**DELETE /books/:id** — Remover um livro

---

📁 Estrutura de Pastas (Clean Architecture)
```console
src/
│ ├── main.ts                
│ │
│ ├── app/
│ │     ├── controller/       
│ │     └── routes/           
│ ├── core/
│ │     ├── entities/
│ │     ├── repository/
│ │     └── usecases/
│ ├── infra/
│ │     ├── database/
│ │     └── server/
│ └── tests/
│       ├── unit/
│       └── integration/ 
├── .gitignore
├── package.json
└── tsconfig.json
```

---
## 🚀 Instalação e Execução
# Clone o repositório
````console
git clone https://github.com/seu-usuario/seu-projeto.git

````
# Acesse a pasta do projeto
```console
cd seu-projeto

```
# Instale as dependências
```javascript
npm install

```
# Inicie o servidor
```javascript
npm start

```
---

## 🧪 Testando a API
**1. Listar todos os livros (GET)**

`GET http://localhost:3000/books`

Exemplo de resposta:
```console
[
  {
    "title": "Quarto de Despejo", 
    "author": "Carolina Maria de Jesus", 
    "genre": "diario"
  },
  {
    "title": "Um defeito de cor", 
    "author": "Ana Maria Gonçalves", 
    "genre": "romance"
  }
]
```

**2. Adicionar um novo livro (POST)**

`POST http://localhost:3000/books`

Use como exemplo os dados:
```console
{
  "title": "Insubmissas Lágrimas de Mulheres", 
  "author": "Conceição Evaristo", 
  "genre": "romance"  
}
```

Exemplo de resposta (sucesso):
```console
{
  "title": "Insubmissas Lágrimas de Mulheres", 
  "author": "Conceição Evaristo", 
  "genre": "romance" 
}
```

- Exemplo de visualização na instância criada localmente:
![mongodb](mongodb_api.png)