function CardBody({ arreglo }) {
  return (
    <>
      <div className="card-body">
        {arreglo.map((item) => (
          <div key={item.id}>
            <h5 className="card-title">Titulo: {item.name}</h5>
            <p className="card-text">
              Descripcion: {item.description} - Precio: {item.price}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardBody;
