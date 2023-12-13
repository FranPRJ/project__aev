import styles from './categories.module.css';


export default function Categories(){
    return(
        <div className={styles.categories}>
            <h3>Categorías de productos</h3>
              <p> Selecciona una de las siguientes categorías para ver los productos disponibles</p>
        </div>
      
    );
}