import './styles/app.css';

document.getElementById('book-form')
    .addEventListener('submit', e => {
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const isbn = document.getElementById('isbn').value;
        const image = document.getElementById('image').file;

        console.log(title, author, isbn, image);
        
        e.preventDefault();

    })