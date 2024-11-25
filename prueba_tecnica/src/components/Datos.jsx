import axios from "axios";
import { useEffect, useState } from "react";
import CardBody from "./CardBody";

function Datos() {
  const [arreglo, setArreglo] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/products");
        setArreglo(response.data);
      } catch (ex) {
        console.error("Error: " + ex);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div
        className="card text-center"
        style={{ width: "30rem", margin: "20px" }}
      >
        <div className="card-header">informacion</div>
        {arreglo.map((item) => (
          <CardBody key={item.id} arreglo={[item]} />
        ))}
      </div>
    </>
  );
}

export default Datos;
