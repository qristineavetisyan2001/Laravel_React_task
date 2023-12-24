import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {Product} from "./product.jsx";


export const Products = () => {
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");

    const [products, setProducts] = useState([]);

    const {categoryId} = useParams();
    console.log(categoryId);
    const getProducts = async () => {
        await fetch("http://127.0.0.1:8000/api/getProducts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({categoryId})
        })
            .then(res => res.json())
            .then(res => {
                if (res.products) {
                    setProducts(res.products);
                }
            })
    }

    const addProduct = async () => {

        await fetch("http://127.0.0.1:8000/api/addProduct", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({productName, categoryId, price})
        }).then(res => console.log(res));

        getProducts();
        setProductName("");
    }

    const deleteProduct = async (id) => {

        await fetch("http://127.0.0.1:8000/api/deleteProduct", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id})
        }).then(res => console.log(res));

        getProducts()
    }


    useEffect(() => {
        getProducts();
    }, []);


    return (
        <div className="categories_wrapper">
            <div className="categories_container">
                <div className="add_category_form">
                    <form>
                        <input value={productName} onChange={e => setProductName(e.target.value)} type="text" name=""
                               id="" placeholder="product name"/>
                        <input value={price} onChange={e => setPrice(e.target.value)} type="number" name="" id=""
                               placeholder={"price"}/>
                        <button type={"button"} onClick={addProduct}>Add Category</button>
                    </form>
                </div>
                <div className="categories">
                    <ul>
                        {products.map((item) => {
                            return <li>
                                <Product item={item} deleteProduct={deleteProduct}/>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
