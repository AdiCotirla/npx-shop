import "./cart.css"
function Cart(props) {
    const data = [...props.data]
    return (
        <div>
            
            <div className="cart-title">
                <h1>THIS IS YOU SHOPING CART</h1>
            </div>

            <div className="cart-items" >
                {props.data.map(productItem => {
                    return(
                        <div className="cart-item" key={productItem.id}>
                            <img src={productItem.image}/>
                            <h1>{productItem.name}</h1>
                            <h2>{productItem.price} x {productItem.quantity}</h2>
                        </div>
                    )
                })}
                </div>
        </div>
    )
}



export default Cart

