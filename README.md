# Cashforce | Teste técnico | Backend

Projeto como objetivo de estruturar uma aplicação web fullstack, dockerizada, cujo objetivo seja possibilitar que usuários verifiquem os dados das notas fiscais e dos respectivos cedentes.

Este diretório é composto pela aplicação backend do projeto como um todo.
Para rodar cada aplicação (backend) siga os passos:

### Criação do banco de dados e iniciando a aplicação Backend

1. Primeiramente será necessário criar um arquivo `.env` que tenha as variáveis de ambiente necessárias para que a aplicação acesse seu banco de dados MYSQL.

O arquivo '.env' deve conter o seguinte conteúdo:

```bash
MYSQL_USER=root
MYSQL_PASSWORD=password
MYSQL_DB_NAME=cashforce_v3
MYSQL_HOST=localhost
MYSQL_PORT=3306
API_PORT=3001
```

Onde:
- MYSQL_USER: Nome de usuário do MYSQL. Aqui estamos utilizando o usuário **root** mas, em um ambiente de produção, deve-se utilizar um outro usuário por questões de segurança;
- MYSQL_PASSWORD: A senha do nome de usuário especificado em DB_USERNAME;
- MYSQL_DB_NAME: O nome que irá dar ao banco de dados. Aqui estamos utilizando o **cashforce_v3**, que seu arquivo SQL está na raiz do diretório backend ;
- MYSQL_HOST: O nome do _host_ (computador hospedeiro) no qual o servidor MYSQL está sendo executado. Caso você esteja executando o servidor MYSQL no seu computador local o valor deve ser `127.0.0.1` ou `localhost`;
- MYSQL_PORT: A porta usada pelo servidor MYSQL.
- API_PORT: A porta usada pelo servidor Node da API;

2. Instale as dependências

```bash
npm install
```

3. Execute o arquivo SQL que está na raiz do diratório backend para criar a base de dados no seu servidor MYSQL e popular as tabelas com alguns dados

4. Inicie o servidor da API

```bash
npm run dev
```
[Aplicação Frontend](https://github.com/thalesmsm/cashforce-frontend)