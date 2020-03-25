const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.text())

const sql = require('msnodesqlv8');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
const con = "Provider=MSOLEDBSQL;Server=35.228.40.196;Database=webshop;UID=sqlserver;PWD=o6iJK5kt4tDk9pmx;Driver={SQL Server Native Client 11.0}";

//const connString = "server=.;Database=webshop;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";

app.post('/addCustomer', function(req, res){   
    console.log(JSON.parse(req.body))
    let result = JSON.parse(req.body)
    const sqlCode = "INSERT INTO customers (username, password) values('" + result.username + "','" + result.password + "')";
    res.send()
    sql.query(con, sqlCode, function(err,response){
      console.log(err)
     console.log("customer added")
  });
});
app.post('/addOrder', function(req, res){   
  console.log(JSON.parse(req.body))
  let result = JSON.parse(req.body)
  let sqlCode = "INSERT INTO orders (totalpayment, customerID) values('" + result.totalpayment + "','" + result.customerID + "')";
  res.send()
  sql.query(con, sqlCode, function(err,response){
   });
   let query = "SELECT TOP 1 (orderID) FROM orders ORDER BY orderID DESC";
  sql.query(con, query, (err, rows) => {
   let orderID = rows[0].orderID
   result.produktID.forEach(produkt => {
     console.log(produkt)
    sqlCode = "INSERT INTO orders_products (orderID, produktID) values('" + orderID + "','" + produkt + "')";
    res.send()
    sql.query(con, sqlCode, function(err,response){
       });    
     });  
  });  
});
app.get('/getProducts', function(request, response){
  let query = "SELECT * FROM products";

  sql.query(con, query, (err, rows) => {
   console.log(rows);
   response.send(rows)
 });
});
app.get('/getProduct', function(req, res){
  console.log(req.query)
  let query = `SELECT * FROM products WHERE products.name LIKE '${req.query.name}%'`;

  sql.query(con, query, (err, rows) => {
   console.log(rows);
   res.send(rows)
 });
});
app.get('/getCustomers', function(request, response){
   let query = "SELECT * FROM customers";

   sql.query(con, query, (err, rows) => {
    response.send(rows)
  });
});

app.listen(port);
console.log(port);