
import React, {useEffect, useState} from "react";
import styles from '../Styles/Contador.module.css';


function Contador() {
  const [contador, setContador] = useState(0);

useEffect(() => {
  console.log('El contador ha cambiado su estado');
});


  return (
    <div className={styles.container}>
      <p> El contador es: {contador}</p>
      <input className={styles.input}
      type= "number" 
      value={contador}
      onChange={(e) => setContador(e.target.value)} />
       
      <button className={styles.button1} onClick={() => setContador(contador + 1)}>Incrementar</button> <br />
      <button className={styles.button2} onClick={() => setContador(contador - 1)}>Decrementar</button> <br />
      <button className={styles.button3}  onClick={() => setContador(0)}>Reiniciar</button>
    </div>
  )
};

export default Contador;






