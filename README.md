<h1 align="center" id="top">Zukt Backend</span></h1>
<p align="center">
<h3 align="left">
<span style="color:#10BEF5"><em>Zukt Backend</em></span> é uma aplicação criada para realizar o teste da empresa Zukt. Essa api é utilizada para solicitar atendimento técnico.
</h3>

## 🕹 Features

<strong>Cadastrar um atendimento</strong>   
- Rota: localhost:3000/services
- Método: POST
- Body: Deve ser informado os campos: localization e problem.
<br>

<strong>Listar todos os atendimentos solicitados</strong>
- Rota: localhost:3000/services
- Método: GET
<br>

<strong>Filtrar atendimentos pelo status</strong>
- Rota: localhost:3000/services/status
- Método: GET
- Body: Deve ser passado o status do atendimento como parametro
<br>

<strong>Atualizar o status do atendimento </strong>
- Rota: localhost:3000/services/:uuid
- Método: PATCH
- Body: Deve ser informado o novo status do atendimento.
- Params: Deve ser passado o id do atendimento como parametro
<br>

## ⚠ Antes de iniciar

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com)
- [NodeJs](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/)

E uma ferramenta operar a aplicação, sugiro o 
[VSCode](https://code.visualstudio.com/).

## 🚦 Avisos

Para uma maior estabilidade, use node versão 14 ou 16.

SE você não sabe quão versão está em uso na sua máquina, digite isto em seu terminal:

```bash
node --version
```

SE você deseja mudar a versão do Node,
digite isto em seu terminal:

```bash
nvm use 14
```

<h3>OU</h3>

```bash
nvm use 16
```

Verifique se não há nenhuma outra aplicação que está sendo executada na porta :3000

Para ter certeza de que nada está sendo executado nessa porta, digite em seu terminal:

```bash
sudo lsof -i :3000
```

Se você encontrar alguma aplicação sendo executada, termine o processo com o seguinte comando(digite o PID):

```bash
sudo kill -9 PID
```

## 🎲 Instalação

Para iniciar o projeto na sua máquina, é necessário que sua máquina tenha instalado yarn e o git, além de uma versão do node compativel.

Começe clonando o repositório usando git clone:

```
git clone https://github.com/IgorPetersson/zukt_challange_backend.git
```

Depois disso, digite <em>npm install</em> para instalar todas as dependências:

```bash
npm install
```
É preciso criar um arquivo chamado`.env` com as informações do banco de dados, conforme o `.env.example`.

Depois disso, digite <em> npm run typeorm migration:run </em> para criar a tabela no banco de dados

```bash
npm run typeorm migration:run
```
Para iniciar a aplicação em sua máquina local, digite em seu terminal:

```bash
npm run dev
```

### <h2> 🛠 Tecnologias </h2>

As seguintes ferramentas foram usadas na construção do projeto:

- [Insomnia](https://insomnia.rest)
- [VSCode](https://code.visualstudio.com)


### <h2> 📋 Termos de uso </h2>

<p>Este projeto não tem termos de uso.</p>

<div align="center">
  <a href="https://choosealicense.com/licenses/mit/" target="_blank"><img src="https://img.shields.io/static/v1?label=License&message=MIT&color=informational"></a>
 </div>

<h2 id="desenvolvedores">🧑‍💻 Equipe de Desenvolvimento</h2>
<br>   
<div align="center">
<table align="center">
  <tr>
    <td align="center"><a href="https://gitlab.com/IgorPetersson">
      <img src="https://ca.slack-edge.com/TQZR39SET-U01QNUDCN7M-24007b058eea-512" style="border-radius: 50%" width="100px" alt="Imagem do perfil de Igor"/>
      <br />
      <sub><b>Igor P. Cardoso e Santos</b></sub>
      <br />
    </td>
</table>
</div>

[Voltar para o topo 🔝](#top)
