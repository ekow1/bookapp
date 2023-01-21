const BookModel = require('../models/bookmodel')


const bookList = (req, res) =>{
    const books = BookModel.all();
    res.json({data : books})
    
}
const createBook = (req, res) =>{
    const {title , desc , author} = req.body;

    const book = new BookModel({title , desc , author})


    book.save()
    res.json({message: 'created successfuly ' , data: book})

}
const updateBook = (req, res) =>{
    const {title , desc , author} = req.body;
    
    const updateBook = BookModel.update({title , desc , author});
    res.json({message : 'updated sucessfully' , data:updateBook})

}
const deleteBook = (req, res) =>{

    const {name} = req.body

    const deletedBook = BookModel.delete({name})
    
    res.json({message : 'deleted sucessfully' , data : deletedBook})

}


module.exports ={
    bookList,
    createBook,
    updateBook,
    deleteBook
}