import {Link} from 'react-router-dom';
import S from './style.scss';

export default class Preview extends React.Component {
    constructor(props){
        super(props);
    }

    render(){

        let {
            article_id,
            article_title,
            previewContent,
            user_id,
            user_name,
            createdAt,
            avatar,
            user_intro
        } = this.props;

        return (
            <div className={S.note}>
                <div className={"ui divider hidden"}></div>
                <div className={S.content}>
                    <div className={S.author}>
                        <Link
                            to={"/"}
                            className={"avatar"}
                        >
                            <img src={avatar} alt={""} className={"ui avatar image"} />
                        </Link>

                        <div className={S.name}>
                            <Link to={"/"}> {user_name} </Link>
                            <span className={"time"}>{createdAt}</span>
                        </div>
                    </div>
                    <Link to={"/"} className={S.title}>{article_title}</Link>
                    <p className={S.abstract}>
                        {previewContent}
                    </p>
                    <div className={S.meta}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}