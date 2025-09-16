const misProductos = [
    {id: "1", nombre: "Dunk SB" , precio: 150, img:"/imagenes/dunk.jpg", idCat: "hombre"},
    {id: "2", nombre: "Yeezy 500" , precio: 250, img:"/imagenes/yeezy.jpg", idCat: "niños"},
    {id: "3", nombre: "AirForce 1" , precio: 120, img:"/imagenes/airforce.jpg", idCat: "mujer"},
    {id: "4", nombre: "AirMax 95" , precio: 200, img:"/imagenes/95.jpg", idCat: "mujer"},
    {id: "5", nombre: "Nike Uptempo" , precio: 300, img:"/imagenes/uptempo.jpg", idCat: "hombre"}, 
]

export const getProductos = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve (misProductos)
        },2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const producto = misProductos.find(item=> item.id === id)
            resolve (producto)
        },2000)
    })
}
export const getProductosPorCategoria = (idCategoria) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const productosCategoria = misProductos.filter(item=> item.idCat === idCategoria)
            resolve (productosCategoria)
        },100)
    })
}