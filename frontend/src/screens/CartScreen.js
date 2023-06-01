import React, { useEffect } from "react";
import { listProducts, listProductsCart } from '../actions/productActions';
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from '../components/LoadingBox';
import Product from '../components/Product';
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cartActions";
import MessageBox from "../components/MessageBox";

export default function CartScreen(props) {
  const productList = useSelector((state) => state.productList);
  const { loading, error1, products } = productList;
  const navigate = useNavigate();
  const params = useParams();
  const { id: productId } = params;

  const { search } = useLocation();
  const qtyInUrl = new URLSearchParams(search).get("qty");
  const qty = qtyInUrl ? Number(qtyInUrl) : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems, error } = cart;

  /* added code from PlaceOrderScreen */
  const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
  const itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  // const shippingPrice = itemsPrice > 100 ? toPrice(0) : toPrice(10);
  const taxPrice = toPrice(0.15 * itemsPrice);
  const totalPrice = itemsPrice + taxPrice;
  /*... */

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProductsCart({}));
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    // delete action
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/signin?redirect=/shipping");
  };
  return (
    <div>
    <div className="row top">
      <div className="col-2">
        <h1>Shopping Cart</h1>
        <div className="cartTable">
          <div className="cartTable1">
            <h2 id="cartTableitem1">Product</h2>
          </div>
          <div className="cartTable2">
            <h2>Quantity</h2>
          </div>
          <div className="cartTable3">
            <h2>Price</h2>
          </div>
        </div>
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        {cartItems.length === 0 ? (
          <MessageBox>
            Cart is empty. <Link to="/">Go Shopping</Link>
          </MessageBox>
        ) : (
          <ul>
            {console.log(cartItems)}
            {cartItems.map((item) => (
              <li key={item.product}>
                <div className="row">
                  <div>
                    <img
                      src={`/api/products/product-photo/${item.product}`}
                      alt={item.name}
                      className="small"
                    ></img>
                  </div>
                  <div className="min-30">
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>
                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {/* item.countInStock  */}
                      {[...Array(item.quantity).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>${item.price}</div>
                  <div>
                    <button
                      type="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
             {/* <li>
              <h2>
                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
                {
                   {cartItems.reduce((a, c) => a + c.price * c.qty, 0)} 
                  itemsPrice.toFixed(2)
                }
              </h2>
            </li>
            <li>
              <h2>Shipping : ${shippingPrice.toFixed(2)}</h2>
            </li>  */}
            <li>
                <h2>Total Items({cartItems.reduce((a, c) => a + c.qty, 0)} items)</h2>
              </li>
              <li>
                <div className="row">
                  <div>Items Price</div>
                  <div>${itemsPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Shipping</div>
                  <div><strong>TBD</strong></div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Tax</div>
                  <div>${taxPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>
                    <strong> Order Total</strong>
                  </div>
                  <div>
                    <strong>${totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
              </li>
            <li>
              <button
                type="button"
                onClick={checkoutHandler}
                className="primary block"
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <h2>Our Top Rated Products</h2>
    {loading ? (
  <LoadingBox></LoadingBox>
) : error1 ? (
  <MessageBox variant="danger">{error1}</MessageBox>
) : (
  <>
    {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
    <div className="row cart">
      {products.map((product) => (
        <Product key={product._id} product={product}></Product>
      ))}
    </div>
  </>
)}
</div>

  );
}
