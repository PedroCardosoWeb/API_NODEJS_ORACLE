const entrega = require('../models/app-model.js'); 

exports.createAnEntrega = function (req, res) {
    console.log("createAnEntrega...callbacks createEntrega...")
    var new_entrega = entrega(req.body)
    entrega.createEntrega(new_entrega, function(err, entrega) {
    if (err) { 
        res.send(err) 
        } else {    
            res.json(new_entrega) 
            console.log(
            "NF: " + Entrega.num_nf + 
            "\n" + "Serie_NF: " + Entrega.sr_nf + 
            "\n" + "Status: " + Entrega.cod_entrega + 
            "\n" + "Obs: " + Entrega.obs_histor +
            "\n" + "Realizado: " + Entrega.sn_efet_entrega +
            "\n" + "Data_Hora: " + Entrega.dt_efet_entrega +
            "\n" 
            );
        }
    })
}    

// exports.listAllEntrega = function (req, res, next){
//     Entrega.getAllEntrega (function (err, entrega){
//     if (err){
//         res.send(err)
//         } else {
//             res.send(entrega)
//         }    
//     })     
// }    

// exports.readAnEntrega = function (req, res){
//     Entrega.getEntregaById (req.params.entregaId, function(err, cli){
//     if (err){
//         res.send(err)
//         } else {
//             res.json(entrega)
//         }    
//     })     
// }    

// exports.updateAnEntrega = function (req, res) {
//     Entrega.getEntregaById(req.params.entregaId, new Entrega(req.body), function(err, entrega) {
//     if (err) {
//         res.send(err)
//         } else {
//             res.json(entrega)
//         }    
//     })    
// }    

// exports.deleteEntrega = function (req, res) {
//     Entrega.remove(req.params.entregaId, function(err, entrega) {
//     if (err) {
//         res.send(err)
//         } else {
//             res.json({ message: 'Registro deletado' })
//         }
//     })
// }
