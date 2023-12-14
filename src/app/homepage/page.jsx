"use client";
import styles from "./homepage.module.css";
import Image from "next/image";
import Logo from "../../public/logo2.jpeg";
import Carousel from "react-grid-carousel";
// import Carousel from "../components/carousel";
// import iniciosesion from "../../../public/iniciosesion.png"
// import styles from "../../styles/components.module.css";
// import Header from "../components/header";

const images = require.context("../../public/images");
const tools = images.keys().map((image) => images(image));

const Gallery = () => {
  return (
    <div style={{ width: "1000px", margin: "auto", paddingBottom: "200px" }}>
      <Carousel
        cols={3}
        rows={1}
        loop
        autoplay={2000}
        className={styles.customCarousel}
      >
        {tools.map((image, index) => (
          <Carousel.Item key={index} style={styles.images}>
            <Image src={image.default} width={300} height={300} alt="holi" />
            <div className={styles.overlay}>hello</div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default function HomePage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.container}>
        <Image src={Logo} width={300} height={300} alt="logo" />
        <div className={styles.msjInicial}>
          <p>
            Tu destino y lugar para compartir y para arrendar productos con
            confianza.
          </p>
          <h5>¡Conoce más! </h5>
        </div>
      </div>
      <div className={styles.msjArrendar}>
        <h3>¿Cómo arrendar?</h3>

        <ol>
          <li>
            Deberás crear una cuenta con tus datos, que serán verificados para
            la tranquilidad de ambas partes.{" "}
          </li>
          <li>
            Cuando tu perfil ya haya sido creado, busca el artículo que deseas
            arrendar, agrégalo al carrito,
          </li>
          <li>Busca el artículo que deseas arrendar y agrégalo al carrito </li>
          <li>
            Elije el medio de pago de tu preferencia y te pondremos en contacto
            con tu arrendor para la entrega del producto.{" "}
          </li>
        </ol>
      </div>
      <div className={styles.prodDestacados}>
        <h3>Productos destacados</h3>
        <Gallery />
      </div>
    </div>
  );
}

// {`image-${index}`}

{
  /* <div className={styles.pageSTY}>
            <Header />

       </div> */
}

//   <h1 >
//         Read <Link href="/posts/first-post">this page!</Link>
//       </h1>
//       <p>Hello</p>
// <div className='main'>
//   <h1>Arriendo entre vecinos</h1>
//     <div className="tabs">
//       <div className="tabs-container">
//           <div className="tabs-list">
//             <div className="tabs-list-item-title">
//               <p>Home</p>
//             </div>
//             <div className="tabs-list-item-title">
//               <p>Cómo arrendar</p>
//             </div>
//             <div className="tabs-list-item-title">
//               <p>Categorías</p>
//             </div>
//             <div className="tabs-list-item-title">
//               <p>Productos destacados</p>
//             </div>
//             <div className="tabs-list-item-title">
//               <p>Sobre nosotros</p>
//             </div>
//         </div>
//       </div>
//     </div>

//     <div className="description-title">
//       <p>¿Cómo arrendar?</p>
//     </div>
//     <div className="description">
//       <p>Primero, deberás crear una cuenta con tus datos, que serán verificados para la tranquilidad de ambas partes.
//         Cuando tu perfil ya haya sido creado, busca el artículo que deseas arrendar, agrégalo al carrito, elije el
//         medio de pago de tu preferencia y te pondremos en contacto con tu arrendor para la entrega del producto.
//       </p>
//     </div>
//     <div className="footer">
//       <p>© 2023 by Scarves Wraps escobaranalia.18@gmail.com +56955869513</p>
//     </div>

// </div>
