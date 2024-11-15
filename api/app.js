document.addEventListener('DOMContentLoaded', function() {
    const bookList = document.getElementById('book-list');
    const addBookForm = document.getElementById('add-book-form');

    // Function to Fetch Books from the API
    function fetchBooks() {
        fetch('http://127.0.0.1:8000/api/books/')
            .then(response => response.json())
            .then(books => {
                bookList.innerHTML = '';  // Clear the current book list
                books.forEach(book => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${book.title} by ${book.author} (Published: ${book.published_date})`;
                    bookList.appendChild(listItem);
                });
            })
            .catch(error => console.error('Error fetching books:', error));
    }

    // Function to Handle Form Submission for Adding a New Book
    addBookForm.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent page refresh

        // Get form data
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const publishedDate = document.getElementById('published_date').value;

        // Create the book object
        const newBook = {
            title: title,
            author: author,
            published_date: publishedDate
        };

        // Send POST request to the API to add the new book
        fetch('http://127.0.0.1:8000/api/books/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBook)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            fetchBooks();  // Refresh the book list
        })
        .catch(error => console.error('Error adding book:', error));
    });

    // Initial fetch of books when the page loads
    fetchBooks();
});
