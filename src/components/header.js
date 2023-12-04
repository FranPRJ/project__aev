import React from "react";
import Image from "next/image";  
// import styles from "../styles/styles.css";

const Header = () => {
    return(
        // console.log(logo2)
        <Image src="/logo2.jpeg" width="200" height="200" alt="loguin"/>
        // <img src={require('../public/images/logo2.jpeg').default} height={200} width={200} />

    );
};

export default Header;