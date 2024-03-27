
function Input(props) {

    return(
        <label className="sidebar-label-container">
            <input  type="radio"
                    onChange={props.handleChange}
                    value={props.value}
                    name={props.name}
            />
            <span   className="checkmark"
                    style={{background: props.color}}>
            </span> {props.title}
        </label>
    );
};

export default Input;