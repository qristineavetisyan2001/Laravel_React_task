import {useState} from "react";

export const Product = (props) => {
    const [newPrice, setNewPrice] = useState(props.item.price);
    const [newName, setNewName] = useState(props.item.name);
    const [editStatus, setEditStatus] = useState(false);

    const edit = async () =>{
        setEditStatus(!editStatus);
        await fetch("http://127.0.0.1:8000/api/editProduct", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({newName, newPrice, id:props.item.id})
        }).then(res => console.log(res));
    }

    return(
        <div className="product_container">
            <div>
                <img src={props.item.image} alt="" className="product_image"/>
            </div>
            <div className={"product_name"}>
                {
                    editStatus?
                        <input type="text" value={newName} onChange={e=>setNewName(e.target.value)}  className="product_name" />
                        :<div>{newName}</div>
                }
            </div>
            {
                editStatus?
                    <input type="number" value={newPrice} onChange={e=>setNewPrice(e.target.value)}  className="product_price" />
                    :<div>{newPrice}</div>
            }
            <div>
                <button type={"submit"} onClick={()=>props.deleteProduct(props.item.id)}>delete</button>
            </div>
            <div>
                <button type={"submit"} onClick={edit}> {!editStatus?"edit":"save"}</button>
            </div>
        </div>
    )
}
