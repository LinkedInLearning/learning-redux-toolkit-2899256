import productList from '../data/productList.json'
import '../styles/cart.scss'

import { useDispatch, useSelector } from 'react-redux'
import cartSlice from '../data/cartSlice'

const Cart = () => {
  const { delItem, clearAllItems } = cartSlice.actions;
  const cartSliceCurrState = useSelector(state => state.cart);
  const productSliceCurrState = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const productsInCart = productSliceCurrState.data.filter((product) => cartSliceCurrState.cartProductIds.includes(product.id));

  
  return (
    <div className="cart">
      {productsInCart.length > 0 && (<div className="cart-product">
        <h3 className="header">Items in cart</h3>

        {productsInCart.map(
            (product) => {
              return (
                <div key={product.id} className="row">
                  <img className="item-image" src={product.imageUrl} alt="product" />

                  <div className="item-info">
                    <h4>{product.name}</h4>
                    <p className="text-truncate">{product.detail}</p>
                    <p>
                      <label className="card-text">Quantity <span className="badge">{cartSliceCurrState.cartProductIds.filter(cpid => cpid === product.id).length}</span></label>
                    </p>
                    <button className="btn btn-primary" onClick={() => {dispatch(delItem(product.id))}}>
                      <i className="bi bi-trash-fill" /> Remove Item
                    </button>
                  </div>
                </div>
              );
            }
          )}

        <footer className="text-center">
          <button className="btn btn-primary" onClick={() => {dispatch(clearAllItems())}}>CLEAR</button>
        </footer>
      </div>)}
      
      { productsInCart.length <= 0 && (
        <div className="text-center empty-cart">
          <i className="bi bi-cart3" />
          <p>Your cart is empty.</p>
          <p>You have not added any item to your cart.</p>
        </div>
      )}
    </div>
  )
}

export default Cart
