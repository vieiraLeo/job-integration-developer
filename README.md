# Intelipost: Teste Prático Desenvolvedor de Integrações

Este é o teste usado por nós aqui da [Intelipost](http://www.intelipost.com.br) para avaliar tecnicamente os candidatos a nossas vagas de Integração de Software. Se você estiver participando de um processo seletivo para nossa equipe, certamente em algum momento receberá este link, mas caso você tenha chego aqui "por acaso", sinta-se convidado a desenvolver nosso teste e enviar uma mensagem para nós no e-mail `rogerio.spina@intelipost.com.br`. 

Aqui na Intelipost nós aplicamos este mesmo teste para as vagas em todos os níveis, ou seja, um candidato a uma vaga júnior fará o mesmo teste de um outro candidato a uma vaga sênior, mudando obviamente o nosso critério de avaliação do resultado do teste. 

Nós fazemos isso esperando que as pessoas mais iniciantes entendam qual o modelo de profissional que temos por aqui e que buscamos para o nosso time. Portanto, se você estiver se candidatando a uma vaga mais iniciante, não se assuste, e faça o melhor que você puder!

## Instruções

Você deverá criar um `fork` deste projeto, e desenvolver em cima do seu fork. Use o *README* principal do seu repositório para nos contar como foi resolver seu teste, as decisões tomadas, como você organizou e separou seu código, e principalmente as instruções de como rodar seu projeto, afinal a primeira pessoa que irá rodar seu projeto será um programador frontend de nossa equipe, e se você conseguir explicar para ele como fazer isso, você já começou bem!

Lembre-se que este é um teste técnico e não um concurso público, portanto, não existe apenas uma resposta correta. Mostre que você é bom e nos impressione, mas não esqueça do objetivo do projeto. 

Nós não definimos um tempo limite para resolução deste teste, o que vale para nós e o resultado final e a evolução da criação do projeto até se atingir este resultado, mas acreditamos que este desafio pode ser resolvido em cerca de 16 horas de codificação.

## Um pouco sobre a Intelipost

A Intelipost é uma startup de tecnologia que está revolucionando a logística no Brasil, um mercado de R$ 300B por ano com muitas ineficiências e desafios. Temos um sistema inovador que gerencia a logística para empresas do e-commerce. Já recebemos R$11 milhões de investimento até o momento, e em pouquissimo tempo já estamos colhendo grandes resultados: Em 2016 fomos selecionados como uma empresa [Promessas Endeavor](https://ecommercenews.com.br/noticias/parcerias-comerciais/intelipost-e-selecionada-pelo-promessas-endeavor/), também [ganhamos a competição IBM Smartcamp](https://www.ibm.com/blogs/robertoa/2016/11/intelipost-e-nazar-vencem-o-ibm-smartcamp-brasil-2016/), com foco de Big Data e data analysis, o que nos rendeu a [realização de um Hackathon sobre Blockchain junto a IBM](https://www.ibm.com/blogs/robertoa/2017/09/intelipost-e-ibm-realizam-o-primeiro-hackathon-de-blockchain-em-startup-do-brasil/), e em 2017 [fomos selecionados pela Oracle para sermos acelerados por eles no programa Oracle Startup Cloud Accelerator](https://www.oracle.com/br/corporate/pressrelease/oracle-anuncia-startups-selecionadas-programa-oracle-startup-cloud-accelerator-sao-paulo-20170804.html).

Tecnicamente, o nosso maior desafio hoje é estar preparado para atender a todos os nossos clientes, que além de muitos, são grandes em número de requisições (Americanas, Submarino, Shoptime, Lojas Renner, Boticário, Livraria Cultura, Magazine Luiza, etc), totalizando mais de meio bilhão de requisições por mês.

## O desafio

Imagine um sistema de rastreamento de encomendas. Toda vez que uma encomenda é marcada como entregue dentro deste sistema uma requisição http é disparada para uma url determinada.

Com a intenção de que esta requisição de notificação de entrega seja entendida por outro sistema, neste caso uma plataforma de vendas online, basta configurarmos a url da API deste outro sistema, correto? 

Porém, a comunicação não aconteceu. 

Tendo em vista que o modelo de comunicação disparado pelo sistema de rastreamento é diferente do que a API da plataforma de vendas espera, repare nos modelos de comunicação pré-definidos pelos sistemas:

> Todas as comunicações são feitas via HTTP e tem o seu conteudo em json.

Modelo de comunicação disparado pelo sistema de rastreamento
```
{
  	"order_id":123,
	"event":{
		"status_id":1
		"date":"2018-02-02T10:45:32"
	},
	"package":{
		"package_id":1,
		"package_invoice":{
			"number":"9871236",
			"key":"01234567890123456789012345678901234567891234"
			"date":"2018-02-01T10:45:32" 
		}
	}
}
```

Modelo de comunicação que a plataforma de vendas espera receber
```
[
  {
	"orderId":123,
	"status":"delivered",
	"date":"2018-02-02T10:45:32"
  }
]
```

Note tambem que os status estão em diferentes formatos nos dois sistemas, ou seja, para que a comunicação aconteça, tambem é necessario que estes status sejam traduzidos.

Sistema 1 (Rastreamento de encomendas)

|Status | Descição     
| :---: |:-------------
| 1     | Pedido em transito 
| 2     | Pedido saiu para entrega      
| 3     | Pedido entregue     

Sistema 2 (Plataforma de vendas)

|Status | Descição     
| :--- |:-------------
| in_transit     | Pedido em transito 
| to_be_delivered     | Pedido saiu para entrega      
| delivered     | Pedido entregue


Com base neste cenário:

_1 )_ Codifique algo que permita a comunicação entre estes dois sistemas.
> Quaisquer ferramentas e linguagens podem ser utilizadas no teste, mas nos conte o que te motivou a seguir por este caminho.

> Para simular as requisições do sistema de rastreamento recomendamos o [Postman](https://www.getpostman.com/). E para simular a API da plataforma de vendas recomendamos o [Requestbin](https://requestb.in/)

_2 )_ Caso na sua visão codificar algo para que eles se comuniquem não responde à melhor solução, escreva aqui qual a sua sugestão para que possamos resolver a comunicação entre estes dois sistemas.


### O que nós esperamos do seu teste

* O código deverá ser hospedado em algum repositório público. Diversos quesitos serão avaliados aqui, como organização do código, sequencialidade de commits, nomeação de classes e métodos, etc.
* O código deverá estar pronto para ser executado e testado, portanto, caso exista algum requisito, este deve estar completamente documentado no README do seu projeto.
* Esperamos também alguma explicação sobre a solução, que pode ser em comentários no código, um texto escrito ou até um vídeo narrativo explicando a abordagem utilizada. 

### O que nós ficaríamos felizes de ver em seu teste

* Testes
* Processo de build e deploy documentado
* Ver o código rodando live (em qualquer serviço por aí)

### O que nós não gostaríamos

* Descobrir que não foi você quem fez seu teste
* Ver commits grandes, sem muita explicação nas mensagens em seu repositório 

## O que avaliaremos de seu teste

* Histórico de commits do git
* As instruções de como rodar o projeto
* Organização, semântica, estrutura, legibilidade, manutenibilidade do seu código
* Alcance dos objetivos propostos
* Escalabilidade da solução adotada 
