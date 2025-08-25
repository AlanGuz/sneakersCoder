import "./CartWidget.css"

const CartWidget = () => {

    const imgCarrito= "https://e7.pngegg.com/pngimages/321/763/png-clipart-computer-icons-packaging-and-labeling-design-angle-white-thumbnail.png"
  return (
    <div>
        <img className="imgCarrito" src={imgCarrito} alt="Imagen de caja de zapatos" />
        <strong>2</strong>
    </div>
    
  )
}

export default CartWidget