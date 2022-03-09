import "./AddPostForm.css";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Component } from "react";

export class AddPostForm extends Component {
  state = {
    postTitle: "",
    postDescription: "",
  };
  handelPostTitleChange = (e) => {
    this.setState({
      postTitle: e.target.value,
    });
  };

  handelPostDescription = (e) => {
    this.setState({
      postDescription: e.target.value,
    });
  };

  render() {
    const handleAddFormHide = this.props.handleAddFormHide;
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
              value={this.state.postTitle}
              onChange={this.handelPostTitleChange}
            />
          </div>
          <div>
            <textarea
              className="addFormInput"
              name="postDescription"
              placeholder="Enter New Post "
              value={this.state.postDescription}
              onChange={this.handelPostDescription}
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
        <div className="overlay"></div>
      </>
    );
  }
}
