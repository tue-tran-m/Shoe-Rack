import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../Navigation/Nav";
import Card from "../component/card";
import './cart-styles.css'

function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.newPrice, 0));
  }, [cart]);

  return (
    <div>
        <h1 className="title" style={{position: "absolute",
                                      left: '22px',
                                      top: '32px'
                                    }}>
            SHOE RACK
        </h1>
      <Nav />
      {cart && cart.length ? (
        <div className="cart-container">
          <div className="item-container">
              {cart.map((cartItem) => (
                <Card
                  product={cartItem}
                  key={cartItem.id}
                  img={cartItem.img}
                  title={cartItem.title}
                  star={cartItem.star}
                  reviews={cartItem.reviews}
                  prevPrice={cartItem.prevPrice}
                  newPrice={cartItem.newPrice}
                />
              ))}
          </div>
          <div className="checkout-container">
              <h2>Your Cart Summary</h2>
              <p>
                <span>Total Item</span>
                <span>: {cart.length}</span>
              </p>
              <p>
                <span>Total Amount</span>
                <span>: ${totalCart}.00</span>
              </p>
              <button>
                Continue to checkout
              </button>
          </div>
        </div>
      ) : (
        <div className="cart-container-empty">
          <h1>Your Cart is Empty!</h1>
          <Link to="/">
            <button className="btns shop-btn">SHOP NOW</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
