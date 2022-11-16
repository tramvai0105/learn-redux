
import {useState, useEffect} from "react";
import { updateComment, deleteComment } from "../redux/actions";
import {useDispatch} from "react-redux";

function SingleComment({data}){
    const [commentText, setCommentText] = useState("");
    const {text, id} = data
    const dispatch = useDispatch();

    useEffect(() => {
        if (text) {
            setCommentText(text);
        }
    }, [text]);

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateComment(commentText, id))
    }

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteComment(id))
    }

    const handleInput = (e) => {
        setCommentText(e.target.value)
    }

    return(
            <form onSubmit={handleUpdate} className="comments-item">
                <div onClick={handleDelete} className="comments-item-delete">&times;</div>
                <input type="text" value={commentText} onChange={handleInput}/>
                <input type="submit" hidden/>
            </form>
    )
}

export default SingleComment;