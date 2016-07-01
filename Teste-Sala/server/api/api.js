module.exports = function(server) {

    var express = require('express');
    var Busca = require ('../routes/busca');
    var Participante = require ('../routes/participante');
    var Sala = require ('../routes/sala');
    var Data = require ('../routes/data');
    var Responsavel = require ('../routes/responsavel');
    var Inserir = require ('../routes/inserir');

    server.use('/busca', Busca);
    server.use('/participante', Participante);
    server.use('/sala', Sala);
    server.use('/data', Data);
    server.use('/responsavel', Responsavel);
    server.use('/inserir', Inserir);

    
    // Create Express API's here

    /*
    server.post('/', function (req, res) {
        var body = req.body;

        res.status(200).json({
            code: 200,
            message: "success"
        });
    });
    */
};