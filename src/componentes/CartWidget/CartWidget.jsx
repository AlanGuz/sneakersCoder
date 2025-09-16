import "./CartWidget.css"

const CartWidget = () => {

    const imgCarrito= "/imagenes/carrito.png"
  return (
    <div className="carroCompra">
        <img className="imgCarrito" src={imgCarrito} alt="Imagen de caja de zapatos" />
        <strong>2</strong>
    </div>
    
  )
}

export default CartWidget