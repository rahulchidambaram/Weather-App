import React, { useState }  from "react";

function ProductForm() {

    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('')
    const [productType, setProductType] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [purchase, setPurchase] = useState('')
    const [product, setProduct] = useState([]);

    const handleSubmit = (e) =>{
        e.preventDefault();
    

    const newProduct = {
        productName,
        productDescription,
        productType,
        productPrice,
        purchase
    };

    setProduct([...product, newProduct]);   //appends old array to a new array

    setProductName('');
    setProductDescription('');
    setProductType('');
    setProductPrice('');
    setPurchase('');

}

    //Delete function
    const handleDelete = (index) => {
        const updatedProduct = [...product];
        updatedProduct.splice(index,1);   //at index position - removes 1 item
        setProduct(updatedProduct);
    };



    return(
        <div className="mainapp">
            <h1>Add a new product</h1>
            <form onSubmit={handleSubmit} >
                <label>Product Name:
                <input type="text" value={productName} onChange={(e)=>setProductName(e.target.value)} required/>
                </label> 
                <br /><br />

                <label>Product Description:
                <textarea value={productDescription}  onChange={(e)=>setProductDescription(e.target.value)} />
                </label> 
                <br /><br />

                <label>Product Type:
                    <select value={productType} onChange={(e)=>setProductType(e.target.value)} required> 
                    <option value="" disabled>Select product type</option>
                    <option value="phone">Phone</option>
                    <option value="tv">TV</option>
                    <option value="laptop">Laptop</option>
                    </select>
                
                </label> 
                <br /><br />

                <label>Product Price:
                <input type="number" value={productPrice} onChange={(e)=>setProductPrice(e.target.value)} required/>
                </label> 

                <br /><br />

                <label>Purchase Date:
                <input type="date" value={purchase} onChange={(e)=>setPurchase(e.target.value)} />
                </label> 
            
                <br /> <br />

                <button type="submit">Add product info</button>

                <h2 className="second">Product List</h2>
                
                <table className="table">
                    <thead> 
                    <tr>
                        <th>Product Name</th>
                        <th>Product Description</th>
                        <th>Product Type</th>
                        <th>Product Price</th>
                        <th>Purchase Date</th>
                        <th>Delete</th>
                    </tr>
                    </thead>

                    <tbody>
                        {product.map((product, index) => (
                            <tr key={index}>
                                <td>{product.productName}</td>
                                <td>{product.productDescription}</td>
                                <td>{product.productType}</td>
                                <td>{product.productPrice}</td>
                                <td>{product.purchase}</td>
                                <td><button onClick={() => handleDelete(index)}><i className="material-icons">delete</i></button></td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </form>
        </div>
    )
}


export default ProductForm