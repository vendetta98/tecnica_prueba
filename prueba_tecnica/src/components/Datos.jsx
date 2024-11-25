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
        <div className="card-body">
          <CardBody arreglo={arreglo} />
        </div>
        <div className="card-footer text-body-secondary">2 days ago</div>
      </div>
    </>
  );
}

export default Datos;
