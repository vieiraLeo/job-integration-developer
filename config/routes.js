const express = require('express')
//URL utilizada para enviar a Order para a plataforma de vendas 
const url = "http://localhost:3000/order"
const rp = require("request-promise")

//Criação do JSON que é utilizado na conversão dos status
const odst = {
    1:"in_transit",
    2:"to_be_delivered",
    3:"delivered"
}

//Criação da rota post que é utilizada pelo sistema de rastreamento
module.exports = (server) => {
    //API Routes
    let router = express.Router()

    //Define a rota raiz da aplicação
    server.use('/middleware', router)
    //Rota utilizada no post
    router.route('/order').post((req, res, next) => {

        //JSON utilizado para o post
        let options = {
            method: 'post',
            body:{
                "orderId": req.body.event.status_id,
                "status": odst[req.body.event.status_id],
                "date": req.body.event.date
            },
            json: true,
            uri: url,
        }
        
        //Validação do status
        if(odst[req.body.event.status_id] == "delivered"){

            //Envio das informações para a plataforma de vendas
            rp(options).then((parsedBody)=> {
                res.status(200).send(options.body)
        
            }).catch((err)=> {
                res.status(404).send(err)
            });
        }
        else{
            res.status(400).send(`Informação não foi enviado o status é: ${odst[req.body.event.status_id]}`)
        }
    })
}