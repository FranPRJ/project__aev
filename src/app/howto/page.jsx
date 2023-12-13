import styles from './howto.module.css';
import StepForm from '../components/StepGuide';



export default function HowTo(){
    return(
        <div className={styles.howto}>
              <h3> ¿Cómo arrendar el producto que deseas?</h3>
              <div>
              <StepForm/>
              </div>
              
        </div>
      
    );
}