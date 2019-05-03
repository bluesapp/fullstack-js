import BookService from './services/BookService';
const bookService = new BookService();

class UI {

    async renderBooks() {
        const books = await bookService.getBooks();
        console.log(books);
        
    }
    
    async addANewBook(book) {
        await bookService.postBook(book);
        this.clearBookForm();
    }
    
    clearBookForm() {
        document.getElementById('book-form').reset();
        
    }
    
    renderMessage() {}

    deleteBook() {}

}

export default UI;