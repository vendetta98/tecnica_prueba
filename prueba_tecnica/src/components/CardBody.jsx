function CardBody({ arreglo }) {
  return (
    <>
      {arreglo.map((item) => (
        <p key={item.id}>
          <h5 className="card-title">Titulo: {item.name}</h5>
          <p className="card-text">
            Descripcion: {item.description} - Precio: {item.price}
          </p>
        </p>
      ))}
    </>
  );
}

export default CardBody;
