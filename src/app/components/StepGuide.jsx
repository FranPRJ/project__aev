"use client";

import styles from "./StepGuide.module.css";

const StepGuide = () => {
  return (
    <div className={styles.container}>
      <div className={styles.stepContainer}>
        <div className={`${styles.rhombus} ${styles.rhombus1}`}>
          <span className={styles.stepNumber}>1</span>
        </div>
        <p className={styles.stepText}>
          Crear perfil o inicia sesión para comenzar
        </p>
        <p className={styles.stepSubText}>
          Deberás crear una cuenta con tus datos, que serán verificados para la
          tranquilidad de ambas partes.
        </p>
      </div>

      <div className={styles.stepContainer}>
        <div className={`${styles.rhombus} ${styles.rhombus2}`}>
          <span className={styles.stepNumber}>2</span>
        </div>
        <p className={styles.stepText}>Buscar el artículo que necesitas</p>
        <p className={styles.stepSubText}>
          Una vez que estés en tu perfil, busca el o los artículos que deseas
          arrendar
        </p>
      </div>

      <div className={styles.stepContainer}>
        <div className={`${styles.rhombus} ${styles.rhombus3}`}>
          <span className={styles.stepNumber}>3</span>
        </div>
        <p className={styles.stepText}>Seleccionar cantidad de días</p>
        <p className={styles.stepSubText}>
          Marca la cantidad de días en los que necesites cada artículo y agrega
          tu petición al carrito
        </p>
      </div>

      <div className={styles.stepContainer}>
        <div className={`${styles.rhombus} ${styles.rhombus4}`}>
          <span className={styles.stepNumber}>4</span>
        </div>
        <p className={styles.stepText}>Selecciona el método de pago</p>
        <p className={styles.stepSubText}>
          Elije tu medio de pago, completa la transacción y recibirás un correo
          de confirmación de compra
        </p>
      </div>

      <div className={styles.stepContainer}>
        <div className={`${styles.rhombus} ${styles.rhombus5}`}>
          <span className={styles.stepNumber}>5</span>
        </div>
        <p className={styles.stepText}>
          Y listo! <br /> Compra exitosa!
        </p>

        <p className={styles.stepSubText}>
          Te pondremos en contacto con tu arrendor para coordinar la entrega del
          producto
        </p>
      </div>
    </div>
  );
};

export default StepGuide;

// <div className={styles.container}>
// <div>
// <div className={`${styles.step} ${styles.step1}`}>
//     <p className={styles.number}>1</p>
//   </div>
//   <p className={styles.instruction}>sdfdsf</p>
// </div>

//   <div className={`${styles.step} ${styles.step2}`}>
//     <p className={styles.number}>2</p>
//     <p className={styles.instruction}>sdfds</p>
//   </div>
//   <div className={`${styles.step} ${styles.step3}`}>
//     <p className={styles.number}>3</p>
//     <p className={styles.instruction}>sdfsdfdfsdfs</p>
//   </div>
//   <div className={`${styles.step} ${styles.step4}`}>
//     <p className={styles.number}>4</p>
//     <p className={styles.instruction}>dfdfs</p>
//   </div>
//   <div className={`${styles.step} ${styles.step5}`}>
//     <p className={styles.number}>5</p>
//     <p className={styles.instruction}>dfdsfsdf</p>
//   </div>

// </div>

{
  /* <div className={styles.step1}>
          <span>1</span>
          <p>Description 1</p>
          </div>
          <div className={styles.step2}>
          <span>2</span>
          <p>Description 2</p>
          </div>
          <div className={styles.step3}>
          <span>3</span>
          <p>Description 3</p>
          </div>
          <div className={styles.step4}>
          <span>4</span>
          <p>Description 4</p>
          </div>
          <div className={styles.step5}>
          <span>5</span>
          <p>Description 5</p>
          </div> */
}

{
  /* </div> */
}
