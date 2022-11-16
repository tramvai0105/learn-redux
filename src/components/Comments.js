import {useState, useEffect} from "react";
import SingleComment from "./SingleComment"
import { createComment, loadComments } from "../redux/actions";
import uniqid from "uniqid"
import {useDispatch, useSelector} from "react-redux";

function Comments(props){
    const [textComment, setTextComment] = useState("")
    const dispatch = useDispatch();
    const comments = useSelector(state => {
        const {commentsReducer} = state
        return commentsReducer.comments
    })
    const handleInput = (e) =>{
        setTextComment(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        const id = uniqid();
        dispatch(createComment(textComment,id))
    }
    
    useEffect(() => {
        dispatch(loadComments())
    }, []);

    return(
        <div className="card-comments">
            <form onSubmit={handleSubmit} className="comments-item-create">
                <input type="text" onChange={handleInput} value={textComment}/>
                <input type="submit" hidden/>
            </form>
            {comments.map(res => 
                <SingleComment key={res.id} data={res}/>)}
        </div>
    )
}

export default Comments