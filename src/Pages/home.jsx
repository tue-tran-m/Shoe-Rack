import { useState } from 'react'


import Recomm from '../Recommended/recom'
import Sidebar from '../Sidebar/Sidebar'
import Card from '../component/card'
import Products from '../Products/products'

// Database
import data from '../db/data';
import Nav from '../Navigation/Nav'


function Home() {

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [input, setInput] = useState('');

    // Input Filter
    function handleInputChange(e) {
        setInput(e.target.value);
    };

    const filteredItems = data.filter(dataItem => 
        dataItem.title.toLowerCase().indexOf(input.toLowerCase()) !== -1
    );

    // Radio Filter
    function handleChange(e) {
        setSelectedCategory(e.target.value);
    }

    // Button Filter
    function handleClick(e) {
        setSelectedCategory(e.target.value);
    }

    function filterredData(data, selected, input) {
        let filteredProducts = data;

        // Filtering input items
        if (input) {
            filteredProducts = filteredItems;
        }

        // Filtering selected item
        if (selected) {
            filteredProducts = filteredProducts.filter(dataItem =>
            dataItem.category === selected ||
            dataItem.color === selected ||
            dataItem.company === selected ||
            dataItem.newPrice === selected ||
            dataItem.title === selected
        );
        }

        return (
            filteredProducts.map(dataItem => 
            <Card
                product={dataItem}
                key={dataItem.id}
                img={dataItem.img}
                title={dataItem.title}
                star={dataItem.star}
                reviews={dataItem.reviews}
                prevPrice={dataItem.prevPrice}
                newPrice={dataItem.newPrice}
            />
            )
        );
    }

    const result = filterredData(data, selectedCategory, input);

    return (
        <>
            <Sidebar handleChange={handleChange} />
            <Nav />
            <Recomm input={input} handleInputChange={handleInputChange} handleClick={handleClick}/>
            <Products result={result}/>
        </>
    );  
}

export default Home;