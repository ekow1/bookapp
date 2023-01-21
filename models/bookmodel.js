// import database
let bookDb = require('../database/booksDb')
// Book Model

class BookModel {
    constructor({title , desc , author }){
        this.title = title ;
        this.desc = desc ;
        this.author = author;   
    }

    save(){
        
            bookDb.push(this)
            return this;
        
    }

static all(){
   return bookDb
}
static update(updateInfo = {}){
   bookDb = bookDb.map(book => {
    if (book.name === updateInfo.name) {

        return {...book , ...updateInfo}
        
    } 
        return book;   
    
   })
}
static delete({name}){
    let deletedBook = null
   bookDb = bookDb.filter(book => {
    if (book.name !== name) {
        deletedBook = name
        return true
        
    } else {
        return false;
        
    }
   })

   return deletedBook;
}
}

module.exports = BookModel