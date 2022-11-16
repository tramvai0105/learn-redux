import {connect} from "react-redux"
import { decrementLikes, incrementLikes } from "../redux/actions"

function Likes(props){
    return(
        <div className="button-controls">
            <button onClick={props.onIncrementLikes}>❤{props.likes}</button>
            <button onClick={props.onDislike}>Dislike</button>
        </div>
    )
}

function mapStateToProps(state) {
    const {likesReducer} = state
    return {
        likes: likesReducer.likes
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrementLikes: () => dispatch(incrementLikes()),
        onDislike: () => dispatch(decrementLikes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)