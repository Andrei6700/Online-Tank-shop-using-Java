import React from "react";
import "./ContentChildrens.css";
import { Link } from "react-router-dom";
import { tankData } from "./tank-data/TankData";

export const ContentChildrens = ({ tank }) => {
  return (
    <div class="content">
      <div className="title">
        Magazin Online de Tancuri
        <hr className="hr-title" />
      </div>

      <div className="layout-content">
        {tankData.map((tank) => (
          <Link
            to={`/second/${tank.name}`}
            className="image-item"
            key={tank.name}
          >
            <img
              src={tank.image}
              alt={tank.name}
              style={{ objectFit: "cover" }}
            />
            <div className="item-info">
              <div>
                <p className="produs">{tank.name}</p>
              </div>

              <div>
                <p className="text">{tank.text_description}</p>
              </div>

              <div>
                <p className="price">{tank.price}</p>
              </div>

              <div>
                <button className="button">Buy</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
