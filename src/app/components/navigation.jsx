import Link from "next/link";
import Image from "next/image";
import styles from "./navigation.module.css";

const links = [
  {
    label: "Inicio",
    route: "homepage",
  },
  {
    label: "Cómo arrendar",
    route: "howto",
  },
  {
    label: "Categorías",
    route: "categories",
  },
  {
    label: "Productos destacados",
    route: "products",
  },
  {
    label: "Sobre nosotros",
    route: "/about ",
  },
];

const subLinks = [
  {
    label: "Iluminarias",
    route: "categories/iluminaries",
  },
  {
    label: "Herramientas",
    route: "categories/tools",
  },
  {
    label: "Muebles",
    route: "categories/furnitures",
  },
  {
    label: "Artículos para viajes",
    route: "categories/travel",
  },
];

export function Navigation() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.imglogin}>
          <Image
            src="/iniciosesion.png"
            width={25}
            height={25}
            alt="login"
            style={styles.imageIS}
          />
          <p className={styles.login}> Iniciar sesión</p>
        </div>

        <h1 className={styles.title}>Arriendo entre Vecinos</h1>
        <nav>
          <ul className={styles.navigation}>
            {links.map(({ label, route }) => (
              <li className={styles.tabs} key={route}>
                <Link
                  style={{ textDecoration: "none", color: "gray" }}
                  href={route}
                >
                  {label}
                </Link>
                {route === "categories" && (
                  <div className={styles.tabSubOptions}>
                    {subLinks.map(({ label, route }) => (
                      <div className={styles.tabSubOption} key={route}>
                        <Link
                          style={{ textDecoration: "none", color: "gray" }}
                          href={route}
                        >
                          {label}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}

{
  /* <div className={styles.tabSubOption}> Iluminaria</div>
                    <div className={styles.tabSubOption}> Herramientas</div>
                    <div className={styles.tabSubOption}> Muebles</div>
                    <div className={styles.tabSubOption}>
                      Artículos para viajes
                    </div>
                  </div> */
}
