
function Button(props) {
    return(
        <button onClick={props.onClickHandler} value={props.value} className="btns">
            {props.title}
        </button>
    );
}

export default Button;