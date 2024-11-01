import React from "react";

import Contador from "./Componentes/Contador";
import styles from "./Styles/App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <h1>&nbsp; Taller React 6 </h1>
      <h4> &nbsp; Hooks useState y 
      useEffect </h4>
      <Contador />
    </div>
  );
};
export default App; 



