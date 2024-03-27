import './products.css'

function Products(props) {
    return(
        <section className="card-container">
            {props.result}
        </section>
    );
}

export default Products