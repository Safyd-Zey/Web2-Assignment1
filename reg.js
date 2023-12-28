var express = require('express');
var bodyParser = require('body-parser');
const { Pool } = require('pg');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'newDB',
    password: '123456789',
    port: '5432',
  });

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

app.get('/', urlencodedParser, async function(req, res){
  const mes = '';
             res.render('sign_up', { mes });
});
app.get('/123', urlencodedParser, async function(req, res){
  const mes = '';
  res.render('sign_in', { mes });
});
app.get('/321', urlencodedParser, async function(req, res){
  const mes = ""
  res.render('site', {mes})
});


app.post('/', urlencodedParser, async function(req, res){
  const {email, password } = req.body; // Замените на поля вашей таблицы
    try {
        if ((!email || !password)) {
          const mes ='Bad Request: No data provided';
          res.render('sign_up', { mes});
        };
    
        
        

        // Проверка наличия email в базе данных
        const emailExistsQuery = 'SELECT * FROM registration WHERE email = $1';
        const emailExistsResult = await pool.query(emailExistsQuery, [email]);
    
        if (emailExistsResult.rows.length > 0) {
          const mes ='Bad Request: Email already exists';
          res.render('sign_up', { mes});
         
        }

        // Вставка данных в таблицу вашей базы данных
        const insertQuery = 'INSERT INTO registration(email, password) VALUES($1, $2)';
        await pool.query(insertQuery, [req.body.email, req.body.password]);
    
        const mes ='Data has been successfully added to the database';
             res.render('sign_up', { mes});
      } catch (error) {
        const mes ='Error when inserting data into the database';
             res.render('sign_up', { mes});
       
      }
    });
    
    app.post('/123', urlencodedParser, async function(req, res){
      const { email, password } = req.body;

    // Проверка наличия email и пароля в базе данных
    const userExistsQuery = 'SELECT * FROM registration WHERE email = $1 AND password = $2';
    const userExistsResult = await pool.query(userExistsQuery, [email, password]);

    if (userExistsResult.rows.length > 0) {
      // Пользователь найден, выводим сообщение об успешном входе
      res.render('site', { mes: 'Login successful' });
    } else {
      // Пользователь не найден, выводим сообщение об ошибке
      res.render('sign_in', { mes: 'Incorrect email or password' });
    }
    });
    

app.listen(3000, function () {
    console.log("The server is running at http://localhost:3000");
});