import "./ItemDetail.css"

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className="contenedorDetalle">
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <img src={img} alt={nombre}/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus fuga ullam reiciendis amet rerum quod saepe quas libero nesciunt officiis, dolore nisi distinctio dicta alias porro culpa sequi. Eum, neque?</p>
    </div>
  )
}

export default ItemDetail