import Input from '../../component/input';

function Category(props) {

    return(
        <div className='sidebar-container'>
            <h2 className="sidebar-title">
                Category
            </h2>

            <div>
                <label className="sidebar-label-container">
                    <input  type="radio"
                            onChange={props.handleChange}
                            value=""
                            name="test"
                    />
                    <span className="checkmark"></span>All
                </label>

                <Input 
                    handleChange={props.handleChange}
                    value="sneakers"
                    title="Sneakers"
                    name="test"
                />

                <Input 
                    handleChange={props.handleChange}
                    value="flats"
                    title="Flats"
                    name="test"
                />

                <Input 
                    handleChange={props.handleChange}
                    value="sandals"
                    title="Sandals"
                    name="test"
                />

                <Input 
                    handleChange={props.handleChange}
                    value="heels"
                    title="Heels"
                    name="test"
                />

            </div>
        </div>
    );
}

export default Category;