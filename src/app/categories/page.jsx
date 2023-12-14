"use client";

import styles from "./categories.module.css";
import IluminariesCategory from "../components/categoriesSubTasbs/iluminariesCategory";
import ToolsCategory from "../components/categoriesSubTasbs/toolsCategory";

export default function Categories() {
  return (
    <div>
      {" "}
      <div className={styles.categories}>
        <h3>Categorías de productos</h3>
        <p>
          {" "}
          Selecciona una de las siguientes categorías para ver los productos
          disponibles
        </p>
      </div>
      <div>
        <IluminariesCategory />
        <ToolsCategory />
      </div>
    </div>
  );
}
