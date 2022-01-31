# Cadastro de desenvolvedores

API desenvolvida para cadastrar desenvolvedores e associar o mesmo a um determinado nível.


## Stack utilizada

**Back-end:** Node, Typescript, Express, MongoDb


## Documentação da API
A fim de facilitar os testes, foi feito o deploy do projeto utilizando o serviço do Heroku.
URL de produção: https://developers-registration.herokuapp.com

exemplo: https://developers-registration.herokuapp.com/levels

#### Listar níveis existentes:
```http
  GET /levels
```

#### Retornar um nível específico:
```http
  GET /levels/${id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do nível que deseja listar |


#### Cadastrar um novo nível: 
```http
  POST /levels
```
| Campos do JSON   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nivel`      | `string` | Descrição do nível que deseja cadastrar (ex: SENIOR) |


#### Editar um nível: 
```http
  PUT /levels/${id}
```
| Campos do JSON   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nivel`      | `string` | Descrição do nível para qual deseja alterar |


#### Remover um  nível: 
```http
  DELETE /levels/${id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do nível que você quer remover |



#### Listar desenvolvedores existentes:
```http
  GET /developers
```

#### Retorna um desenvolvedor específico:
```http
  GET /developers/${id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do desenvolvedor que deseja listar |


#### Cadastrar um novo desenvolvedor: 
```http
  POST /developers
```
| Campos do JSON   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nome`      | `string` | Nome do desenvolvedor. (ex: João) |
| `sexo`      | `string` | Sexo do desenvolvedor. (ex: M) |
| `datanascimento`      | `string` | Data de Nascimento do desenvolvedor. (ex: 1994-04-14T22:16:07.084Z) |
| `idade`      | `Number` | Idade do desenvolvedor. (ex: 27) |
| `hobby`      | `string` | Hobby do desenvolvedor. (ex: Programar) |
| `nivelid`      | `string` | ID do nível que deseja vincular a esse desenvolvedor. |


#### Editar um desenvolvedor: 
```http
  PUT /developers/${id}
```
| Campos do JSON   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nome`      | `string` | Nome do desenvolvedor. (ex: João) |
| `sexo`      | `string` | Sexo do desenvolvedor. (ex: M) |
| `datanascimento`      | `string` | Data de Nascimento do desenvolvedor. (ex: 1994-04-14T22:16:07.084Z) |
| `idade`      | `Number` | Idade do desenvolvedor. (ex: 27) |
| `hobby`      | `string` | Hobby do desenvolvedor. (ex: Programar) |
| `nivelid`      | `string` | ID do nível que deseja vincular a esse desenvolvedor. |


#### Remover um  desenvolvedor: 
```http
  DELETE /developers/${id}
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do desenvolvedor que você quer remover |
## Executando a aplicação local com o docker-compose 

1. Baixe o repositório do projeto em seu computador.
2. Acesse o diretório raiz do projeto.
4. Execute o seguinte comando:
```bash
# instala as dependências
$ npm i
# realiza o build e já sobe os containers
$ npm run up
```
5. Aplicação ficará disponível na porta 3000, exemplo: http://localhost:3000/developers

**OPCIONAL:** Caso queira executar diretamente com o Node: 
```bash
# realiza o build
$ npm run build

# executa a aplicação
$ npm run start
```

**Testes:** Para executar os testes: 
```bash
# executa todos os testes
$ npm teste
```