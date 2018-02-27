import {Link} from 'react-router-dom';
import Preview from './Preview';
import S from './style.scss'

export default class PreviewList extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
    }

    render(){
        let {previews} = this.props;

        previews = [];

        previews = previews.map((elt, i) => {
            let {
                id: article_id,
                article_title,
                createdAt,
                preview: previewContent,
                collection_name,
                user_id,
                collection_id,
                user
            } = elt;

            let {avatar, user_name, user_intro} = user;

            return (
                <Preview
                    {...{
                        article_id,
                        article_title,
                        previewContent,
                        user_id,
                        user_name,
                        createdAt,
                        avatar,
                        user_intro
                    }}
                    key={i}
                >
                    <Link to={""} className={S.tag}>
                        {collection_name}
                    </Link>

                </Preview>
            )

        });

        return (
            <div>
                {previews}
            </div>
        )


    }
}