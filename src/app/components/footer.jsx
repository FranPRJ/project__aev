import styles from './footer.module.css';


const today = new Date();
const currYear = today.getFullYear();


const Footer = () => {

    return (

        <div className={styles.footer}>
           
            <p> ¡Contáctenos!</p>
            <p> Correo electrónico: escobaranalia.18@gmail.com </p>
            <p> Celular: +569 55869513</p>
            <p style={{paddingTop: '20px'}}> © {currYear} by Scarves Wraps</p>
        
        
        </div>

    );

};

export default Footer;
// import React from "react";
// import Image from "next/image";  
// import styles from "../styles/components.module.css";
// import logo from "../../public/logo.png";

// //customizacion del logo inicio sesio
// const imageIS = {
//     paddingTop: "15px",
// }

// const Header = () => {
//     return(
//         // console.log(logo2)
//         <div className={styles.headerSTY}>
//             <div className={styles.login} 
//                     style={{backgroundImage: `url(${logo.src})`,
                         
//                             backgroundRepeat: "no-repeat"
                           
//                         ,}}>

//            <Image src="/iniciosesion.png" width={25} height={25} alt="login"  style={imageIS} /> 
//             <p className={styles.iniciosesion}>Iniciar sesión</p>

//            </div>
            
//             <p className={styles.titulo}>Arriendo Entre Vecinos</p>
          
            
            
//             {/* <Image src="/logo2.jpeg" width="200" height="200" alt="loguin"/> */}
//         {/* <img src={require('../public/images/logo2.jpeg').default} height={200} width={200} /> */}

//         </div>
        

//     );
// };

// export default Header;