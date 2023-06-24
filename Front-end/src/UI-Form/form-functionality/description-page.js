import React from "react";
import { useParams } from "react-router-dom";
import { tankData } from "../../UI/page-setup/tank-data/TankData";
import { Link } from "react-router-dom";
export const DescriptionPage = () => {
  const { id } = useParams();

  const produs = tankData.find((tank) => tank.name === id);

  if (!produs) {
    return <div>Produsul nu a fost gasit in magazin !</div>;
  }

  return (
    <div className="description-page">
      <Link to={`/`}>
      <button class="Btn-back">
        <svg height="1.2em" class="arrow" viewBox="0 0 512 512">
          <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
        </svg>
      </button>
      </Link>
      <div>
        <img className="image-tank " src={produs.image} alt={produs.name} />
      </div>

      <div className="text-tank">
        <p>{produs.cannon_description}</p>
        <p>{produs.armor_description}</p>
        <p>{produs.capacity_description}</p>
        <p>{produs.mobility_desciption}</p>
      </div>
    </div>
  );
};

export default DescriptionPage;
