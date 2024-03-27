import './recom.css';
import Button from '../component/buttons';
import { CiSearch } from "react-icons/ci";


function Recomm(props) {

    return(
        <div className='recom-container'>
            <div className="recom-btns">
                <Button onClickHandler={props.handleClick} value="" title="All Products" />
                <Button onClickHandler={props.handleClick} value="Nike" title="Nike" />
                <Button onClickHandler={props.handleClick} value="Adidas" title="Adidas" />
                <Button onClickHandler={props.handleClick} value="Puma" title="Puma" />
                <Button onClickHandler={props.handleClick} value="Vans" title="Vans" />
            </div>

            <div className="search-container">
                <CiSearch className='nav-icons' />
                <input  type="text"
                        placeholder='Search products'
                        className='search-input'
                        value={props.input}
                        onChange={props.handleInputChange}
                />
            </div>
        </div>
    );
};

export default Recomm;