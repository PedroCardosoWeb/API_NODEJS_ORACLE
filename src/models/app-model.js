const conn = require('../../bin/db_connect.js')

//Entrega object constructor
var Entrega = function (nf, sr_nf, sts, dt_hr, cod, hist) {
    this.num_nf = nf, // os dados serão gravados através dos métodos set e invocados a partir dos get
    this.sr_nf = sr_nf,
    this.sn_efet_entrega = sts,
    this.dt_efet_entrega = dt_hr,
    this.cod_entrega = cod,
    this.obs_histor = hist
};

// GETTERs & SETTERs
Object.defineProperty( Entrega, 'num_nf', {
    set: function (nf) {
        this.num_nf = parseInt(nf); //string to integer
    },
    get: function (){
        return this.num_nf;
    }
});

Object.defineProperty( Entrega, 'sr_nf', {
    set: function (sr) {
        this.sr_nf = parseInt(sr);
    },
    get: function (){
        return this.sr_nf;
    }
});

Object.defineProperty( Entrega, 'sn_efet_entrega', {
    set: function (sts) {
        if(sts == '1' || sts == '01'){
            this.sn_efet_entrega = 'S'
        } else {
            this.sn_efet_entrega = 'N'
        }
    },
    get: function (){
        return this.sn_efet_entrega;
    }
});

Object.defineProperty( Entrega, 'dt_efet_entrega', {
    set: function (dt, hr) {
        this.dt_efet_entrega = 
        dt.substring(4,8) + "-" + dt.substring(2,4) + "-" + dt.substring(0,2) + " " +
        hr.substring(0,2) + ":" + hr.substring(2,4) + ":00";
    },
    get: function (){
        return this.dt_efet_entrega;
    }
});

Object.defineProperty( Entrega, 'cod_entrega', {
    set: function (cod) {
        this.cod_entrega = parseInt(cod);
    },
    get: function (){
        return this.cod_entrega;
    }
});

Object.defineProperty( Entrega, 'obs_histor', {
    set: function (obs) {
        this.obs_histor = obs;
    },
    get: function (){
        return this.obs_histor;
    }
});

Entrega.createEntrega = function (req, res) { 
    console.log("createEntrega... solicita Gravação no DB...")
    
    try {
        // var insere = `INSERT INTO bv_edi_proceda 
        //     (:num_nf, :sr_nf, :dt_efet_entrega, :sn_efet_entrega, :obs_histor, :cod_entrega) 
        //     VALUES = ? `;
        conn.execute(
            connection.execute(`INSERT INTO bv_edi_proceda 
            (:num_nf, :sr_nf, :dt_efet_entrega, :sn_efet_entrega, :obs_histor, :cod_entrega) 
            VALUES = ? `, 
            [req.body.num_nf, req.body.sr_nf, req.body.dt_efet_entrega, req.body.sn_efet_entrega, 
                req.body.obs_histor, req.body.cod_entrega],
            // insere, // queryCRUD
            // entrega, // obj inserido
            {isAutoCommit: true}, 
                function (err, res) {
                if(err) {
                    console.log("error: ", err);
                }
                    else
                    {
                        console.log(res.insertId);
                        console.log("Registro Inserido com Sucesso!");
                    }
                }
            )
        )
    } 
    catch (err) {
          console.error(err);
    } 
}

module.exports = Entrega;

