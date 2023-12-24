import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Category} from "./category.jsx";

export const Categories = () => {
    const [categoryName, setCategoryName] = useState("");
    const [categories, setCategories] = useState([]);
    const getCategories = async () => {
        await fetch("http://127.0.0.1:8000/api/getCategories")
            .then(res => res.json())
            .then(res => {
                console.log(res.categories);
                setCategories(res.categories);
            })
    }

    const addCategory = async () => {

        await fetch("http://127.0.0.1:8000/api/addCategory", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({categoryName})
        }).then(res => console.log(res));

        getCategories();
        setCategoryName("");
    }

    const deleteCategory = async (id) => {

        await fetch("http://127.0.0.1:8000/api/deleteCategory", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id})
        }).then(res => console.log(res));

        getCategories()
    }

    useEffect(() => {
        getCategories();
    }, []);


    return (
        <div className="categories_wrapper">
            <div className="categories_container">
                <div className="add_category_form">
                    <form>
                        <input value={categoryName} onChange={e => setCategoryName(e.target.value)} type="text" name=""
                               id="" placeholder="category name"/>
                        <button type={"button"} onClick={addCategory}>Add Category</button>
                    </form>
                </div>
                <div className="categories">
                    <ul>
                        {categories.map((item) => {
                            return <li>
                                <Category name={item.name} id={item.id} deleteCategory = {deleteCategory}/>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
