import { useParams } from 'react-router-dom';
import Layout from "./Layout";
  function Takoda() {
    let { number } = useParams();
    
    console.log("Takoda")  
    return (
      <>
      <Layout>
      <h1>2 {number} </h1>
      </Layout>
        
      </>
    );
  }

  export default Takoda;