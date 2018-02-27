import {Link} from 'react-router-dom';

export default class Author extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className={"item"}>
                <Link
                    to={"/"}
                    className={"ui mini avatar image"}
                >
                    <img src={"avatar"} alt={""}/>
                </Link>
                <div className={"content"}>
                    <div className={"header"}>
                        {user_name}
                    </div>
                </div>
            </div>
        )
    }
}