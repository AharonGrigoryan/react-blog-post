import "./AddPostForm.css";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export const AddPostForm = ({ handleAddFormHide }) => {
  return (
    <>
      <form action="" className="addPostForm">
        <buton className="hideBtn" onClick={handleAddFormHide}>
          <CloseRoundedIcon />
        </buton>
        <h2>New Post</h2>
        <div>
          <input
            className="addFormInput"
            type="text"
            name="postTitle"
            placeholder="Enter Post Name"
          />
        </div>
        <div>
          <textarea
            className="addFormInput"
            name="postDescription"
            placeholder="Enter New Post "
          />
        </div>
        <div>
          <button
            onClick={handleAddFormHide}
            className="blackbtn"
            type="button"
          >
            Add Post
          </button>
        </div>
      </form>
      <div  className="overlay"></div>
    </>
  );
};
