import {Link} from "react-router-dom";

export const Category = (props) => {
    return(
        <div>
            <Link to={"" + props.id}>{props.name}</Link>
            <button onClick={()=>props.deleteCategory(props.id)}>delete</button>
        </div>
    )
}
