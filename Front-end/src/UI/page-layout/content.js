import React from "react";
import { ContentChildrens } from "../page-setup/ContentChildrens";
import { tankData } from "../page-setup/tank-data/TankData";

export const Content = () => {
  return (
    <div>
      <ContentChildrens tank={tankData} />
    </div>
  );
};
  