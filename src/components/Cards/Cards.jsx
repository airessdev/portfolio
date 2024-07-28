import { Link } from "react-router-dom";
import "./Cards.css";

const Cards = ({ item }) => {
  return (

    <div key={item.id} className="card">
      <Link to={`/Portfolio/${item.id}`} className="card-link">

        <div className="img-container">
          <img src={item.cover} alt={item.title} />
          <div className="text-container">
          <h2 className="text">{item.title}</h2>
          </div>
        </div>



      </Link>
    </div>
  );
};

export default Cards;
