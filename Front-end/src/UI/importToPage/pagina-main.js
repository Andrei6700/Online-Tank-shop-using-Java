import React from "react";
import "./pagina-main.css";

import { Filters } from "../page-layout/filters";
import { Content } from "../page-layout/content";
import { Footer } from "../page-layout/footer";


export const PaginaMain = () => {
    return (
        <div className="layout">
            <Filters />
            <Content />
            <Footer />
        </div>
    )
}