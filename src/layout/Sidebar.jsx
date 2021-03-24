import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ genres }) => {
  return (
    <div className="sidebar">
      <ul>
        {genres &&
          genres.map((element, index) => (
            <li key={index}>
              <Link to={`/genre/${element.id}`}>{element.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Sidebar;
