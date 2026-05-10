export default function BookList({ books }) {
    return (
        <diV>
            <h2>Book List</h2>
            <ul>
                {
                    books.map(book=>(
                        <li key={book.id}>
                            <h3>{book.title}</h3>
                            <h2>Author: {book.author}</h2>
                            <h2>Year: {book.year}</h2>
                            <h2>Price: {book.price}</h2>
                        </li>
                    ))
                }
            </ul>
        </diV>
    )
} 