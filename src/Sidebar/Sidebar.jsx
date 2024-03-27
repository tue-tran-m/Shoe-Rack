
import Category from './Category/category';
import Colors from './Colors/colors';
import Price from './Price/price';
import './Sidebar.css' 
import { BiCategory } from "react-icons/bi";

function Sidebar(props) {
    return(
        <>
            <section className="sidebar">
                <div className="logo-container">
                    <h1 className='title'>SHOE RACK</h1>
                </div>

                <Category handleChange={props.handleChange} />
                <Price handleChange={props.handleChange} />
                <Colors handleChange={props.handleChange} /> 
            </section>
        </>
    );
};

export default Sidebar;