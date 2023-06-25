import React from "react";
import { useParams } from "react-router-dom";
import { tankData } from "../../UI/page-setup/tank-data/TankData";
import { OnChange } from "../components-form/on-submit";

export const HeaderPage = () => {
  const { id } = useParams();

  const produs = tankData.find((tank) => tank.name === id);

  if (!produs) {
    return <div>Produsul nu a fost gasit !</div>;
  }
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    OnChange(e, produs.name);
  };

  return (
    <div className="header-page">
      <div>
        <h2>{produs.name}</h2>
      </div>
      <form onSubmit={handleFormSubmit}>
      </form>
    </div>
  );
};
