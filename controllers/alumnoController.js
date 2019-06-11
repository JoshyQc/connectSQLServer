const self = module.exports = {

    // // query to the database and get the records
    // request.query('select * from Curso', function (err, recordset) {

    //     if (err) console.log(err)

    //     console.log("GO");

    // });
    index: (req, res) => {
        req.con.query(`SELECT * FROM alumno`, function (err, recordset) {
            if (err) console.log(err);
            res.json(recordset);
        });
    },
    create: (req, res) => {
        console.log(req.body, "THE BODY");
        req.con.query(`INSERT INTO alumno(firstName,lastName,age,carnet)
                        VALUES ('${req.body.firstName}','${req.body.lastName}','${req.body.age}','${req.body.carnet}')`,
            function (err, recordset) {
                if (err) console.log(err);
                res.json(recordset);
            });
    },

    //SUERTE EN TU PRUEBA TE AMO MUCHO.<3

    //LISTO AMOR en serio?  que era? ademas mandaste mal los firstName y lastName
    //Bueno manda bien tu los parametros pero recordate que es en el body raw y como JSON asi como habiamos hecho antes

    //EN que ruta pasa?
    update:(req,res)=>{
        console.log(req.body, "THE BODY");
        req.con.query(`UPDATE alumno SET 
                        firstName='${req.body.firstName}',
                        lastName='${req.body.lastName}',
                        age='${req.body.age}',
                        carnet='${req.body.carnet}' WHERE alumno_Id='${req.body.alumno_Id}'`,
            function (err, recordset) {
                if (err) console.log(err);
                res.json(recordset);
            });
    },
    delete:(req,res)=>{
        req.con.query(`DELETE FROM alumno WHERE alumno_Id='${req.body.alumno_Id}'`, function (err, recordset) {
            if (err) console.log(err);
            res.json(recordset);
        });
    }
}