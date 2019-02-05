var express = require('express');
var router = express.Router();
var mysql = require('promise-mysql');


var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  connectionLimit: 10
});



router.post('/adduser', async (req, res, next) => {

  let data = await pool.query(`INSERT INTO yes.clients (username, password, channels)
VALUES ('${req.body.username}', '${req.body.password}', '[]');`)

  res.json(data);
});



router.post('/updateuser', async (req, res, next) => {

  let data = await pool.query(`
  
              UPDATE yes.clients
              SET channels = '[${req.body.allC}]'
              WHERE username='${req.query.username}' AND password='${req.query.password}'`);
              res.json(data);
});

router.get('/allchannels', async (req, res, next) =>{
  let data = await pool.query(`SELECT * FROM yes.channels;`)
  res.json(data)

})

router.get('/getuserdata', async (req, res, next) => {  
  let data = await pool.query(`SELECT * FROM  yes.clients 
  WHERE username='${req.query.username}' AND password='${req.query.password}'`);
     res.json(data);  
 });



// router.get('/createdb', async (req, res, next) => {
//   try {
//     await pool.query(`
//   CREATE TABLE yes.clients (
//     id INT NOT NULL AUTO_INCREMENT,
//     username VARCHAR(20) NOT NULL,
//     password VARCHAR(20) NOT NULL,
//     channels VARCHAR(20) NOT NULL,
//     PRIMARY KEY (id)
//   )`);


//     await pool.query(`
//     CREATE TABLE yes.channels (
//     id INT NOT NULL AUTO_INCREMENT,
//     channels VARCHAR(20) NOT NULL,
//     PRIMARY KEY (id)
//   )`);

//     res.send('DB and tables created!')
//   }
//   catch (err) {
//     console.log(err)
//   }
// });


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
