const mysql = require("mysql2/promise");
const { fecha } = require("./Utils");
const credencialesMySql = {
    host: process.env.MYSQL_HOST || '127.0.0.1',
    database: process.env.MYSQL_DATABASE || 'FORMULARIO',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '',
    port: process.env.MYSQL_PORT || 3306
};
var query = mysql.createPool(credencialesMySql)

const getEncuesta = async (req, res) => {
    let [first] = await query.query('SELECT * FROM forms');
    res.send(first);
}
const postEncuesta = async (req, res) => {
    let valores = Object.values(req.body)
    let date = fecha();
    try {
        await query.query(`INSERT INTO forms(nombre,correo,telefono,mensaje,medio_contacto,momento_contacto,novedades,fecha) VALUES (?,?);`, [valores, date])
        res.send({ code: 200, message: "Created succesfully" });
    } catch (error) {
        res.status(400).send({ code: 400, message: `Error: ${error}` })
    }

}
module.exports = { getEncuesta, postEncuesta }