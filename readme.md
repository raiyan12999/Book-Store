# Book Store

This is a simple Django-based project for managing a book store. The project allows users to perform basic CRUD operations (Create, Read, Update, Delete) on books in the database. It is implemented using Django's function-based views and SQLite for database management, without incorporating JavaScript, CSS, or HTML for user-facing interactions.

## Features

- **View All Books**: Displays a list of all the books available in the store.
- **Add a New Book**: Users can add new books to the store by specifying the title, author, and publication date.
- **Update Existing Books**: Modify details of existing books in the store.
- **Delete Books**: Remove books from the store permanently.

## Technologies Used

- **Django**: Framework used to develop the application.
- **SQLite**: Lightweight database used for data storage.
- **Python**: Programming language for backend development.

## Installation and Setup

Follow the steps below to set up the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/raiyan12999/Book-Store.git
   cd Book-Store
   ```

2. Create a virtual environment (optional but recommended):

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Apply database migrations:

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. Run the development server:

   ```bash
   python manage.py runserver
   ```

6. Access the application at:
   ```
   http://127.0.0.1:8000/
   ```

## Usage

- Navigate through the provided URLs to manage books:
  - `/` or `/home/`: View all books.
  - `/add/`: Add a new book.
  - `/update/<book_id>/`: Update an existing book (replace `<book_id>` with the book's ID).
  - `/delete/<book_id>/`: Delete an existing book.

## Project Structure

- **`bookstore/`**: Contains the main project settings and configuration files.
- **`books/`**: The app handling all book-related functionalities.
- **`templates/`**: Template files for rendering views.
- **`db.sqlite3`**: SQLite database file.
- **`manage.py`**: Command-line utility for managing the project.

## How It Works

1. **Backend**:

   - Function-based views handle requests and send responses.
   - SQLite stores the data for books.

2. **Frontend**:
   - No front-end styling or scripts are used. The output is plain and functional for testing purposes.

## Limitations

- No web design or interactivity features are included.
- Plain HTML outputs, suitable for demonstrating functionality rather than user experience.

## Future Enhancements

Some potential enhancements for the project include:

- Adding frontend design with CSS and JavaScript for better user experience.
- Implementing pagination for listing books.
- Expanding functionality to include search and filter options.
- Switching to a more robust database like PostgreSQL or MySQL.

---

Feel free to contribute to this project by forking the repository and submitting pull requests!

## Author

**Raiyan Bin Atik**  
[GitHub Profile](https://github.com/raiyan12999)

```

```
