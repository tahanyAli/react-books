import React, { useState } from "react";
import BookEdit from "./BookEdit";
const BookShow = ({ book, onDelete }) => {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    onDelete(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  let content = <h3>{book.title}</h3>;
  if(showEdit) {
    content=<BookEdit book={book} />

  }
  return (
    <div className="book-show">
      {content}
      <div className="actions">
        <button onClick={handleEditClick} className="edit">
          Edit
        </button>
        <button onClick={handleDeleteClick} className="delete">
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
