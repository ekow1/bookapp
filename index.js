// import  the needed packages
const express = require('express')
const bodyParser = require('body-parser')
const bankDb = require('./database/booksDb')
const bookmodel = require('./models/bookmodel')
const  { bookList,createBook,updateBook,deleteBook} = require('./controllers/controllers')

// creatre server instance
const app = express()

const PORT = 3000;


// create middleware

app.use(bodyParser.json())


// routes

app.get( '/book' , bookList)
app.post( '/book' , createBook)
app.put( '/book' , updateBook)
app.delete( '/book' , deleteBook)



app.listen(PORT , () => console.log(`Server listening on ${PORT }`) )


