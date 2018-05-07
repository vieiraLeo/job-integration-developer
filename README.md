# Intelipost: Teste Prático Desenvolvedor de Integrações

## Utilização
### Requisitos
Para rodar o projeto é necessario instalar o [Node.Js](https://nodejs.org/en/)

### Configuração e instalação
Após clonar o repositório navegue até a pasta job-integration-developer com o prompt de comando:
- Dentro da pasta digite o comando:
> npm install.

O comando npm install realiza o download e a instalação de todas as dependência necessarios para o funcionamento da aplicação, esse processo pode demorar um pouco.
- Após o download e a instalação das dependências digite o comando:
> json-server --watch db.json.

O json-server cria uma API Fake que roda em http://localhost:3000/order essa API tem a função de simular a plataforma de vendas. Caso queira testar com outra URL
basta substitu-la no arquivo routes.js

- Mantenha o terminal com a API Fake aberto e rodando.
- Abra o prompt de comando e navegue até job-integration-developer novamente
- Podemos rodar a aplicação em modo de desenvolvimento com:

> npm run dev.

ou em modo de produção com:

> npm run production.

além disso podemos rodar unit tests com:

> npm run test.

- Após rodar a aplicação com os comandos npm run dev ou npm run production já podemos enviar requisições com o metodo POST para http://localhost:3003/middleware/order
 

#### Tecnologias utilizadas
Eu usei o [Node.Js](https://nodejs.org/en/) por ser uma plataforma ideal para tarefas de I/O, o [Node.Js](https://nodejs.org/en/) é não bloqueante,ou seja, nenhuma tarefas pesadas de IO vai travar a aplicação, pois elas serão executadas em background sem bloquear a aplicação.Além disso existem uma serie de modulos e bibliotecas disponibilizados pela comunidade que ajudam no desenvolvimento, aqui estão algumas das ferramentas que utilizei:
- [request-promise](https://www.npmjs.com/package/request-promise) essa ferramenta simplifica e auxilia o processo de resolução de promises, dexando o codigo menor e mais legivel
- [mocha](https://www.npmjs.com/package/mocha) é um framework simples que ajuda na criação de unit tests
- [nodemon](https://www.npmjs.com/package/nodemon) é uma dependência de desenvolvedor, esse módulo é um utilitário que irá monitorar todas as alterações nos arquivos da aplicação e reiniciar automaticamente o servidor quando for necessário

#### Explicação sobre a solução
_1 )_ A solução é bem simples, basicamente o servidor que roda em http://localhost:3003/middleware/order recebe as requisições POST do sistema externo (sistema de rastreamento)
_2 )_ faz o parse do JSON recebido para um JavasCript Object
_3 )_ valida o status da order, se ele for delivered o converte
_4 )_ Cria o arquivo de options no formato:
	{
        method: 'post',
        body:  {
			"orderId":123,
			"status":"delivered",
			"date":"2018-02-02T10:45:32"
  		},
        json: true,
        uri: url,
	}
_5 )_ Realiza o post do documento para a Plataforma de vendas

