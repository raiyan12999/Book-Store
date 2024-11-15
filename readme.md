# Book Store

This is a simple Django-based project demonstrating the implementation of RESTful APIs for managing books. The project includes basic GET and POST functionality for interacting with book data.

## Features

- **RESTful API**: Implemented REST API endpoints for:
  - Retrieving the list of all books (**GET**).
  - Adding a new book to the database (**POST**).
- No CRUD functionality (Update/Delete features are not implemented yet).

## Technologies Used

- **Django**: Framework used to develop the application.
- **Django REST Framework (DRF)**: Used to build and manage RESTful APIs.
- **SQLite**: Lightweight database used for data storage.
- **Python**: Programming language for backend development.

## Usage

- Navigate through the provided URLs to manage books:
  - `/` or `/home/`: View all books.
  - `/add/`: Add a new book.
  - `/update/<book_id>/`: Update an existing book (replace `<book_id>` with the book's ID).
  - `/delete/<book_id>/`: Delete an existing book.

## Project Structure

- **`bookstore/`**: Contains the main project settings and configuration files.
- **`api/`**: Application folder handling API related functionality.
- **`db.sqlite3`**: SQLite database file.
- **`manage.py`**: Command-line utility for managing the project.
- **`README.md`**: Documentation file.

## How It Works

1. **Backend**:

   - Function-based views handle requests and send responses.
   - SQLite stores the data for books.

2. **Frontend**:
   - No front-end styling or scripts are used. The output is plain and functional for testing purposes.

## Limitations

- No web design or interactivity features are included.
- No support for updating or deleting books(CRUD is incomplete)
- No frontend implementation for user interface for interacting with the API

## Future Enhancements

Some potential enhancements for the project include:

- Adding frontend design with CSS and JavaScript for better user experience.
- Implementing full fledged CRUD operation
- Implementing pagination for listing books.
- Expanding functionality to include search and filter options.
- Switching to a more robust database like PostgreSQL or MySQL.

---

Feel free to contribute to this project by forking the repository and submitting pull requests!

## Author

**Raiyan Bin Atik**  
[GitHub Profile](https://github.com/raiyan12999)
