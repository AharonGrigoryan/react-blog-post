import { Component } from "react";
import { post } from "../../shared/projectData";
import { AddPostForm } from "./components/AddPostForm";
import { BlogCard } from "./components/BlogCard";
import "./components/AddPostForm.css";

export class BlogContent extends Component {
  state = {
    showAddForm: false,
    blogArray: JSON.parse(localStorage.getItem("blogArr")) || post,
  };

  likePost = (pos) => {
    const temp = [...this.state.blogArray];
    temp[pos].liked = !temp[pos].liked;

    this.setState({
      blogArray: temp,
    });
    localStorage.setItem("blogArr", JSON.stringify(temp));
  };

  deletPost = (pos) => {
    if (
      window.confirm(
        `Hatat uzum eq jnjel  ${this.state.blogArray[pos].title} !!!`
      )
    ) {
      const temp = [...this.state.blogArray];
      temp.splice(pos, 1);

      console.log("massiv=>", this.state.blogArray);
      console.log("temp massiv=>", temp);

      this.setState({
        blogArray: temp,
      });
      localStorage.setItem("blogArr", JSON.stringify(temp));
    }
  };

  handleAddFormShow = () => {
    this.setState({
      showAddForm: true,
    });
  };
  handleAddFormHide = () => {
    this.setState({
      showAddForm: false,
    });
  };

  render() {
    const blogPosts = this.state.blogArray.map((item, pos) => {
      return (
        <BlogCard
          title={item.title}
          description={item.description}
          key={item.id}
          liked={item.liked}
          likePost={() => this.likePost(pos)}
          deletPost={() => this.deletPost(pos)}
        />
      );
    });
    return (
      <>
        {this.state.showAddForm ? (
          <AddPostForm  handleAddFormHide={this.handleAddFormHide}/>
        ) : null}
        <>
          <h1>Simple Blog</h1>

          <button onClick={this.handleAddFormShow} className="blackbtn">Add New Post </button>
          <div className="blog">{blogPosts}</div>
          <div>
            <button>Get amount of posts</button>
          </div>
        </>
      </>
    );
  }
}

