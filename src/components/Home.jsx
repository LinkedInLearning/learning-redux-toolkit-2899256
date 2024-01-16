import '../styles/home.scss'

import cartSlice from '../data/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchAllProducts } from '../data/productSlice'

const Home = () => {
  const { addItem, delItem } = cartSlice.actions;
  const dispatch = useDispatch();
  const cartSliceCurrState = useSelector((state) => state.cart);
  const productSliceCurrState = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchAllProducts("http://localhost:8080/products"));
  }, [dispatch]);
  
  return (
    <div className="container product-catalogue">
      <div className="row">
        {productSliceCurrState?.data.map((product) => {
          return (
            <div className="wrapper col-md-4" key={product.id}>
              <div className="card">
                <img className="card-img-top center-block" src={product.imageUrl} alt="Card cap" />

                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">
                    <div className="btn-group">
                      <button class="btn btn-default" type="button">
                        Price <span class="badge">${product.price}</span>
                      </button>
                      <button class="btn btn-default" type="button">
                        In Stock <span class="badge">{product.quantity}</span>
                      </button>
                      <button class="btn btn-default" type="button">
                        In Cart <span class="badge">{cartSliceCurrState.cartProductIds.filter(cpid => cpid === product.id).length}</span>
                      </button>
                    </div>
                  </p>
                  <div className="btn-group">
                    <button className="btn btn-primary" onClick={() => {dispatch(addItem(product.id));}} disabled={cartSliceCurrState.cartProductIds.filter(cpid => cpid === product.id).length >= product.quantity}>Add to cart</button>
                    <button className="btn btn-danger" onClick={() => {dispatch(delItem(product.id));}} disabled={!cartSliceCurrState.cartProductIds.includes(product.id)}>Remove from cart</button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
