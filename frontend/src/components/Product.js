import React, { useState} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Rating from './Rating';


export default function Product(props) {
  const { product } = props;
  const navigate = useNavigate();


  const [qty, setQty] = useState(1);
// line 21 replaced `/api/products/product-photo/${product._id}`

  const addToCartHandler = () => {
    setQty(qty + 1);
    navigate(`/cart/${product._id}?qty=${qty}`);
  };
  return (
    <div key={product._id} className="card">
      <Link to={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
        <Link className='tags' to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews ? product.numReviews : ''}
        ></Rating>
        <div className="row">
          <div className="price">${product.price}</div>
          <div>
            {/* <Link to={`/seller/${product.seller._id}`}>
              {product.seller.seller.name}
            </Link> */}
          </div>
           <div>
          <button
                         onClick={addToCartHandler}
                          className="primary block"
                        >
                          Add to Cart
                        </button>
          </div> 
        </div>
      </div>
    </div>
  );
}
