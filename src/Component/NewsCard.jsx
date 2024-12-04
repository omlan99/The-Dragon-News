import { AiFillStar } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    rating,
    total_view,
    details,
  } = news;

  return (
    <div className="card w-full bg-base-100 shadow-xl p-4">
      <figure>
        <img
          src={thumbnail_url}
          alt="Thumbnail"
          className="rounded-lg w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-bold">{title}</h2>
        <div className="flex items-center gap-2">
          <img
            src={author.img}
            alt="Author"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium">{author.name}</p>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toDateString()}
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          {details.slice(0, 100)}... <Link to={`/news/${news._id}`} className="text-primary">Read More</Link>
        </p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-1 text-yellow-500">
            <AiFillStar />
            <span>{rating.number}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <BsEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
