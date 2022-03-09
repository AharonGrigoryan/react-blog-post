import heart from "../../../asstes/images/heart-svgrepo-com (1).svg";
import "./BlogCard.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export const BlogCard = ({
  title,
  description,
  liked,
  likePost,
  deletPost,
}) => {
  const haertFill = liked ? "crimson" : "black";

  return (
    <div className="post">
      <div className="postContent">
        <h1 className="gridItem">{title}</h1>
        <p className="gridItem1">{description}</p>
        <div>
          <button>
            <FavoriteIcon onClick={likePost} style={{ fill: haertFill }} />
          </button>
        </div>
      </div>
      <button onClick={deletPost}>
        <DeleteForeverIcon />
      </button>
    </div>
  );
};
