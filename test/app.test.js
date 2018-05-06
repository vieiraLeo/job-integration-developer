//Declatação das dependências necessárias para realizar os testes
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();

//Criação do objeto JSON que sera utilizado nos testes
var order = {
    "order_id": 1231,
    "event": {
        "status_id": 3,
        "date": "2018-02-02T10:45:32"
    },
    "package": {
        "package_id": 1,
        "package_invoice": {
            "number": "9871236",
            "key": "Maria Julia",
            "date": "2018-02-01T10:45:32"
        }
    }
}

chai.use(chaiHttp);

describe('/POST order', function () {
    it('Verifica se os atributos que são enviados para a plataforma de vendas estão corretos', function (done) {

        chai.request(server)
            .post('/middleware/order')
            .send(order)
            .end(function (error, res) {

                //Se o teste fuuncionar retorna status: 200 - OK
                res.should.have.status(200);
                res.body.should.be.property("orderId")
                res.body.should.be.property("status")
                res.body.should.be.property("date")
                done();
            });
    })
})

describe('/POST order', function () {
    it('Deve retorar status (resposta) 400 devido a mudança no status_id. Verifica se a validação de envio esta funcionando', function (done) {
        order.event.status_id = 1
        chai.request(server)
            .post('/middleware/order')
            .send(order)
            .end(function (error, res) {
                res.should.have.status(400);
                done();
            });
    })
})