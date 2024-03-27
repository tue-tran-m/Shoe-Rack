import { HiShoppingCart } from "react-icons/hi2";
import { MdRemoveShoppingCart } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../Store/Slices/card-slice";

function Card(props) {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    function handleAddToCart() {
        dispatch(addToCart(props.product))
    }

    function handleRemoveCart() {
        dispatch(removeFromCart(props.product.id))
    }

    return(
        <section className="card">
            <img src={props.img} alt={props.title}/>
            <div className="card-details">
                <h3 className="card-title">{props.title}</h3>
                <section className="card-review">
                    {props.star} {props.star} {props.star} {props.star}
                    <span className="total-reviews">
                        {props.reviews}
                    </span>
                </section>

                <section className="card-price">
                    <div className="price">
                        <del>{props.prevPrice}</del> ${props.newPrice},00
                    </div>
                    <div className="bag">
                        {
                            cart.some(item => item.id === props.product.id) 
                                ? <MdRemoveShoppingCart className='nav-icons bag-icon' onClick={handleRemoveCart}/>
                                : <HiShoppingCart className='nav-icons bag-icon' onClick={handleAddToCart} />
                        }
                    </div>
                </section>
            </div>
        </section>
    );
}

export default Card;