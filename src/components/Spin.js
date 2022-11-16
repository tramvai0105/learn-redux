import Loader from "react-loader-spinner"
import {useSelector} from "react-redux"

const Spin = (props) =>{
    const spinner = useSelector(state => state.appReducer.loading)
    return(
        <div className="loader-styles">
            <Loader
                type="Puff"
                color="#00BFFF"
                height={400}
                width={400}
                visible={spinner}
            />
        </div>
    )
}

export default Spin;