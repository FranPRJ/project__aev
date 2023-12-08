import Link from 'next/link';
import Image from 'next/image';
import styles from './navigation.module.css';


const links = [{
    label: "Inicio",
    route: "homepage"
  },{
    label: "Cómo arrendar",
    route: "howto" 
  },{
    label: "Categorías",
    route: "categories"
  },{
    label: "Productos destacados",
    route: "products"
  },{
    label: "Sobre nosotros",
    route: "/about "
  },]


export function Navigation() {

    return(
        <div>
          <header className={styles.header}>
            <div className={styles.imglogin}>
            <Image src="/iniciosesion.png" width={25} height={25} alt="login"  style={styles.imageIS} /> 
              <p className={styles.login}> Iniciar sesión</p>
              
            </div>
            
            <h1 className={styles.title}>Arriendo entre Vecinos</h1>
            <nav >
              <ul className={styles.navigation}>
                {links.map(({label, route}) => (
                  <li className={styles.tabs} key={route}>
                    <Link style={{ textDecoration: 'none' , color:'gray'}} href={route}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </header>




        </div>
    );

}